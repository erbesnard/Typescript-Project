import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import "./controllers/LoginController";
import { AppRouter } from "./AppRouter";
import "./controllers/RootController";

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["lastCookie"] }));
app.use(AppRouter.getInstance());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
