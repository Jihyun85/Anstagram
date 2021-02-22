import express from "express";
import { postComment } from "../controllers/apiController";

import routes from "../routes";

const apiRouter = express.Router();

apiRouter.post(routes.comment(), postComment);

export default apiRouter;
