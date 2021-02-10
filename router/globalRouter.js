import express from "express";
import { getHome } from "../controllers/contentController";
import {
  getJoin,
  getLogin,
  logout,
  postJoin,
  postLogin,
} from "../controllers/userController";

import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.post(routes.logout, logout);

export default globalRouter;
