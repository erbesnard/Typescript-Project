import { Router, Request, Response, NextFunction } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send("not permitted");
}

const router = Router();

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (!email) {
    throw new Error("you must provide an email");
  }

  if (!password) {
    throw new Error("you must provide an password");
  }

  req.session = { loggedIn: true };
  res.redirect("/");
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged In</div>
        <a href="/logout">Logout</a>
       </div>`);
  } else {
    res.send(`
      <div>
        <div>You are not logged In</div>
        <a href="/login">Login</a>
       </div>`);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to the protected router, logged in user");
});

export { router };
