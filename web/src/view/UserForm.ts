import { User } from "../model/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.validate": this.onButtonClick,
      "click:.set-age": this.onSetRandomAgeClick
    };
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

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
      <h1>UserForm</h1>
      <div>User name: ${this.model.get("name")}</div>
      <div>User age: ${this.model.get("age")}</div>
      <input></input>
      <button class="validate">Click Me</button>
      <button class="set-age">Random Age</button>
    <div>
    `;
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
