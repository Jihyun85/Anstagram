import routes from "../routes";
import contents from "../db";

export const getHome = (req, res) => {
  res.render("home", { pageTitle: "Home", contents });
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "게시물 만들기" });
};

export const postUpload = (req, res) => {
  res.redirect(routes.home);
};

export const getContentDetail = (req, res) => {
  res.render("contentDetail");
};

export const getEditContent = (req, res) => {
  res.render("editContent", { pageTitle: "게시물 수정" });
};

export const postEditContent = (req, res) => {
  res.redirect(routes.contentDetail());
};

export const deleteContent = (req, res) => {
  res.redirect(routes.home);
};
