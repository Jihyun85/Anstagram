import express from "express";
import {
  deleteId,
  deleteProfile,
  getEditProfile,
  getProfile,
  postEditProfile,
} from "../controllers/userController";
import { uploadProfileImg } from "../middlewares";

import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.editProfile(), getEditProfile);
userRouter.post(routes.editProfile(), uploadProfileImg, postEditProfile);

userRouter.get(routes.deleteId(), deleteId);

userRouter.get(routes.profile(), getProfile);
export default userRouter;
