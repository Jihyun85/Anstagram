import express from "express";

import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";

import routes from "./routes";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import contentRouter from "./router/contentRouter";
import { localMiddleware } from "./middlewares";

const app = express();

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.set("view engine", "pug");

app.use("/uploads", express.static("uploads"));

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.content, contentRouter);

export default app;
