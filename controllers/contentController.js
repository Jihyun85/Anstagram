import routes from "../routes";
import Content from "../model/Content";

export const getHome = async (req, res) => {
  try {
    const content = await Content.find({}).populate("creator");
    content.sort(function (a, b) {
      if (a.createAt > b.createAt) {
        return -1;
      }
    });
    res.render("home", { pageTitle: "Home", content });
  } catch (err) {
    console.log(err);
    res.render("home", { pageTitle: "Home", content: [] });
  }
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "이미지 업로드" });
};

export const postUpload = async (req, res) => {
  const {
    body: { description },
    file: { path },
    user: { _id: id },
    //유저 정보도 받아와야 함
  } = req;
  const newContent = await Content.create({
    fileUrl: path,
    description,
    creator: id,
  });
  req.user.content.unshift(newContent.id);
  req.user.save();
  res.redirect(routes.contentDetail(newContent.id));
};

export const getContentDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  const content = await Content.findById(id)
    .populate("creator")
    .populate("comment");
  console.log(content.comment.user);
  res.render("contentDetail", { pageTitle: "Content Detail", content });
};

export const getEditContent = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const content = await Content.findById(id);
    res.render("editContent", { pageTitle: "게시물 수정", content });
  } catch (error) {
    res.redirect(routes.profile(req.user.id));
  }
};

export const postEditContent = async (req, res) => {
  const {
    body: { description },
    params: { id },
  } = req;
  try {
    await Content.findByIdAndUpdate(id, {
      description,
    });
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.contentDetail(id));
};

export const deleteContent = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Content.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
