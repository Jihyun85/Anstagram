import express from "express";
import {
  deleteContent,
  getContentDetail,
  getEditContent,
  getUpload,
  postEditContent,
  postUpload,
} from "../controllers/contentController";

import routes from "../routes";

const contentRouter = express.Router();

contentRouter.get(routes.upload, getUpload);
contentRouter.post(routes.upload, postUpload);

contentRouter.get(routes.contentDetail(), getContentDetail);

contentRouter.get(routes.editContent(), getEditContent);
contentRouter.post(routes.editContent(), postEditContent);

contentRouter.post(routes.deleteContent(), deleteContent);

export default contentRouter;
