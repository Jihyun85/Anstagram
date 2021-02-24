import express from "express";
import {
  deleteId,
  getProfile,
  getMe,
  getEditMe,
  postEditMe,
} from "../controllers/userController";
import { onlyPrivate, uploadProfileImg } from "../middlewares";

import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.me, onlyPrivate, getMe);

userRouter.post(routes.editMe, onlyPrivate, uploadProfileImg, postEditMe);

userRouter.get(routes.editMe, onlyPrivate, getEditMe);

userRouter.get(routes.deleteId(), onlyPrivate, deleteId);

userRouter.get(routes.profile(), getProfile);
export default userRouter;
