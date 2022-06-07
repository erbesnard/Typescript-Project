import { View } from "./View";
import { User } from "../model/User";
import { UserProps } from "../model/UserProps";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1>User details</h1>
      <div>User name: ${this.model.get("name")}</div>
      <div>User age: ${this.model.get("age")}</div>
    </div>
    `;
  }
}
