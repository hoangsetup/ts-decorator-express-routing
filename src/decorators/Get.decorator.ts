/**
 * Created by hoangdv on 2019-09-14
 */
import { IRouteDefinition } from "../models/Route.definition";

export const Get = (path: string): MethodDecorator => {
  // `target` equals our class, `propertyKey` equals our decorated method name
  return (target, propertyKey) => {
    // In case this is the first route to be registered the `routes` metadata is likely to be undefined at this point.
    // To prevent any further validation simply set it to an empty array here.
    if (!Reflect.hasMetadata('routes', target.constructor)) {
      Reflect.defineMetadata('routes', [], target.constructor);
    }

    // Get the routes stored so far, extend it by the new route and re-set the metadata.
    const routes: IRouteDefinition[] = Reflect.getMetadata('routes', target.constructor);
    routes.push({
      requestMethod: 'get',
      path,
      methodName: propertyKey as string,
    });

    Reflect.defineMetadata('routes', routes, target.constructor);
  };
};
