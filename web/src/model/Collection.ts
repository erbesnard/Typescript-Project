import { Eventing } from "./Eventing";
import axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public routeURL: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.routeURL).then((res: AxiosResponse) => {
      res.data.forEach((item: K) => {
        this.models.push(this.deserialize(item));
      });
    });
    this.trigger("change");
  }
}
