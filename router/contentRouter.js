import express from "express";
import {
  deleteContent,
  getContentDetail,
  getEditContent,
  getUpload,
  postEditContent,
  postUpload,
} from "../controllers/contentController";
import { onlyPrivate, uploadContent } from "../middlewares";

import routes from "../routes";

const contentRouter = express.Router();

contentRouter.get(routes.upload, onlyPrivate, getUpload);
contentRouter.post(routes.upload, onlyPrivate, uploadContent, postUpload);

contentRouter.get(routes.contentDetail(), getContentDetail);

contentRouter.get(routes.editContent(), onlyPrivate, getEditContent);
contentRouter.post(routes.editContent(), onlyPrivate, postEditContent);

contentRouter.get(routes.deleteContent(), onlyPrivate, deleteContent);

export default contentRouter;
