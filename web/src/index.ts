import { UserForm } from "./view/UserForm";
import { User } from "./model/User";

const user = User.buildUser({ name: "NAME", age: 20 });
const userForm = new UserForm(document.getElementById("root") as Element, user);

userForm.render();
