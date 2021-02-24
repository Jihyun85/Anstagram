import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import routes from "./routes";
import dotenv from "dotenv";
dotenv.config();

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_PRIVATE_KEY,
  legion: "ap-northeast-2",
});

const multerContent = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "anstagram/content",
  }),
});
export const uploadContent = multerContent.single("imageFile");

const multerProfileImg = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "anstagram/profile",
  }),
});
export const uploadProfileImg = multerProfileImg.single("profileUrl");

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};

export const onlyPublic = (req, res, next) => {
  if (!req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};
