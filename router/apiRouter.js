import express from "express";
import { postComment } from "../controllers/apiController";
import { onlyPrivate } from "../middlewares";

import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.comment(), onlyPrivate, postComment);

export default apiRouter;
