import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}

export class APISync<T extends HasId> {
  constructor(public routeURL: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.routeURL}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.routeURL}/${id}`, data);
    } else {
      return axios.post(this.routeURL, data);
    }
  }
}
