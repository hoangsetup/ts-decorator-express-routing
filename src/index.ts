/* tslint:disable:ordered-imports */
import 'reflect-metadata';
import express, { Request, Response } from 'express';
import CatController from './controllers/Cat.controller';
import { IRouteDefinition } from "./models/Route.definition";

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Meooo!');
});

// Iterate over all our controllers and register our routes
[
  CatController,
].forEach((controller) => {
  // This is our instantiated class
  const instance = new controller();

  // The prefix saved to our controller
  const prefix = Reflect.getMetadata('prefix', controller);

  // Our `routes` array containing all our routes for this controller
  const routes: IRouteDefinition[] = Reflect.getMetadata('routes', controller);

  // Iterate over all routes and register them to our express application
  routes.forEach((route) => {
    // It would be a good idea at this point to substitute the `app[route.requestMethod]` with a `switch/case` statement
    // since we can't be sure about the availability of methods on our `app` object. But for the sake of simplicity
    // this should be enough for now.
    app[route.requestMethod](prefix + route.path, (req: Request, res: Response) => {
      // Execute our method for this path and pass our express request and response object.
      (instance as any)[route.methodName](req, res);
    });
  });
});

app.listen(3000, () => {
  console.log('Started express on port 3000');
});
