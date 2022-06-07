import { UserView } from "./view/UserView";
import { User } from "./model/User";

const user = User.buildUser({ name: "NAME", age: 20 });
const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

const userView = new UserView(root, user);

userView.render();

console.log(userView);
