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
import { uploadProfileImg } from "../middlewares";

import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.me, getMe);
userRouter.post(routes.me, uploadProfileImg, postMe);

userRouter.get(routes.editProfile(), getEditProfile);

userRouter.get(routes.deleteId(), deleteId);

userRouter.get(routes.profile(), getProfile);
export default userRouter;
