import express from "express";
import {
  deleteProfile,
  getEditProfile,
  getProfile,
  postEditProfile,
} from "../controllers/userController";

import routes from "../routes";

const userRouter = express.Router();

userRouter.get(routes.editProfile, getEditProfile);
userRouter.post(routes.editProfile, postEditProfile);

userRouter.post(routes.deleteProfile, deleteProfile);

userRouter.get(routes.profile, getProfile);
export default userRouter;
