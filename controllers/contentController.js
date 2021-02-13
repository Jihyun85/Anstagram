import routes from "../routes";
import Content from "../model/Content";

export const getHome = async (req, res) => {
  try {
    const contents = await Content.find({});
    res.render("home", { pageTitle: "Home", contents });
  } catch (err) {
    console.log(err);
    res.render("home", { pageTitle: "Home", contents: [] });
  }
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "게시물 만들기" });
};

export const postUpload = async (req, res) => {
  const {
    body: { description },
    file: { path },
    //유저 정보도 받아와야 함
  } = req;
  const newContent = await Content.create({
    fileUrl: path,
    description,
    //user정보 추가해야함
  });
  res.redirect(routes.contentDetail(newContent.id));
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
