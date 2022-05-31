// User class needs to have the ability to store, retrieve and change data

// Ablity to notify the rest of the app

// User needs to persist data to an outside server

import { Model } from "./Model";
import { UserProps } from "./UserProps";
import { Attributes } from "./Attributes";
import { APISync } from "./APISync";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

const routeURL = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new APISync<UserProps>(routeURL)
    );
  }

  static buildUserCollection() {
    return new Collection<User, UserProps>(routeURL, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
