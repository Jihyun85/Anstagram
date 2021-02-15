import express from "express";

import path from "path";
import helmet from "helmet";
import passport from "passport";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import session from "express-session";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import dotenv from "dotenv";

import routes from "./routes";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import contentRouter from "./router/contentRouter";
import { localMiddleware } from "./middlewares";

dotenv.config();

import "./passport";

const app = express();

const CookieStore = MongoStore(session);

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use("/uploads", express.static("uploads"));
app.use("/static", express.static(path.join(__dirname, "static")));

app.use(localMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.content, contentRouter);

export default app;
