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
import { onlyPrivate, onlyPublic, uploadProfileImg } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.home, getHome);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, uploadProfileImg, postJoin);

globalRouter.get(routes.logout, onlyPrivate, logout);

export default globalRouter;
