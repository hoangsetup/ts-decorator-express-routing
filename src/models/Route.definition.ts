/**
 * Created by hoangdv on 2019-09-14
 */

export type RequestMethod = 'get' | 'post' | 'delete' | 'options' | 'put';

export interface IRouteDefinition {
  // Path to our route
  path: string;
  // HTTP Request method (get, post, ...)
  requestMethod: RequestMethod;
  // Method name within our class responsible for this route
  methodName: string;
}
