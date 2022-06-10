import { Response, Request, NextFunction } from "express";
import { get, controller, use, post, bodyValidator } from "./decorators/index";

function logger(req: Request, res: Response, next: NextFunction) {
  console.log("Request was made");
  next();
}

@controller("/auth")
class LoginController {
  @get("/")
  add(a: number, b: number): number {
    return a + b;
  }

  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
  <form method="POST">
    <div>
      <label>Email</label>
      <input name="email"/>
    </div>
    <div>
      <label>Password</label>
      <input name="password"/>
    </div>
    <button>Submit</button>
  </form>
      `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    req.session = { loggedIn: true };
    res.redirect("/");
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect("/");
  }
}
