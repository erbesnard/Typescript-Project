import { User } from "../model/User";
import { View } from "./View";
import { UserProps } from "../model/UserProps";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.validate": this.onButtonClick,
      "click:.set-age": this.onSetRandomAgeClick,
      "click:.change-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    if (!input) {
      return;
    }

    const name = input.value;

    this.model.set({ name });
  };

  onSetRandomAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onButtonClick(): void {
    console.log("hi there");
  }

  onHeaderHover(): void {
    console.log("bouge de la ");
  }

  template(): string {
    return `
    <div>
      <input placeholder="${this.model.get("name")}"></input>
      <button class="change-name">Change Name</button>
      <button class="set-age">Random Age</button>
      <button class="save-model">save</button>
    </div>
    `;
  }
}
