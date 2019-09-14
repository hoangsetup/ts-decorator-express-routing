/**
 * Created by hoangdv on 2019-09-14
 */

/**
 * Set prefix for a controller
 * @param {string} prefix
 * @return {ClassDecorator}
 * @constructor
 */
// decorators/Controller.decorators.ts
export const Controller = (prefix: string): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata('prefix', prefix, target);

    //
    if (!Reflect.hasMetadata('routes', target)) {
      Reflect.defineMetadata('routes', [], target);
    }
  };
};
