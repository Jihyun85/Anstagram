import routes from "./routes";
import multer from "multer";

const multerContent = multer({ dest: "uploads/images/" });
export const uploadContent = multerContent.single("imageFile");

const multerProfileImg = multer({ dest: "uploads/profiles/" });
export const uploadProfileImg = multerProfileImg.single("profileUrl");

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = req.user || null;
  next();
};
