import express from "express";
import {
  deleteId,
  deleteProfile,
  getEditProfile,
  getMe,
  postMe,
  getProfile,
  postEditProfile,
} from "../controllers/userController";
import { onlyPrivate, uploadProfileImg } from "../middlewares";

import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.me, onlyPrivate, getMe);
userRouter.post(routes.me, onlyPrivate, uploadProfileImg, postMe);

userRouter.get(routes.editProfile(), onlyPrivate, getEditProfile);

userRouter.get(routes.deleteId(), onlyPrivate, deleteId);

userRouter.get(routes.profile(), getProfile);
export default userRouter;
