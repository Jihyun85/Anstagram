import express from "express";
import { countHeart } from "../controllers/apiController";

import routes from "../routes";

const apiRouter = express.Router();

apiRouter.get(routes.heart(), countHeart);

export default apiRouter;
