import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import "./controllers/LoginController";

import { router } from "./routes/loginRoutes";
import { AppRouter } from "./AppRouter";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["lastCookie"] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
