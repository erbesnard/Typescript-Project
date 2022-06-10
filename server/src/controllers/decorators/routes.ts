import "reflect-metadata";
import { Methods } from "./Methods";

function routeBinder(method: string) {
  return function(path: string): Function {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.delete);
export const patch = routeBinder(Methods.patch);
