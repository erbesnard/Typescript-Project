import { faker } from "@faker-js/faker";
import { Markable } from "./CustomMap";

export class Company implements Markable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent() {
    return `
    <div>
      <h2>Company name is: ${this.companyName}</h2>
      <h3>${this.catchPhrase}</h3>
    </div>`;
  }
}
