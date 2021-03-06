import routes from "../routes";
import Content from "../model/Content";
import User from "../model/User";

export const getHome = async (req, res) => {
  try {
    const content = await Content.find({}).populate("creator");
    content.sort(function (a, b) {
      if (a.createAt > b.createAt) {
        return -1;
      }
    });
    const userAry = await User.find({});
    let randomNum = [];
    let randomUser = [];
    let i = 0;
    if (userAry.length >= 4) {
      while (i < 4) {
        let n = Math.floor(Math.random() * userAry.length);
        if (randomNum.indexOf(n) === -1) {
          randomNum.push(n);
          randomUser.push(userAry[n]);
          i++;
        }
      }
    }
    res.render("home", { pageTitle: "Home", content, randomUser });
  } catch (err) {
    console.log(err);
    res.render("home", { pageTitle: "Home", content: [] });
  }
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload", formTitle: "콘텐츠 업로드" });
};

export const postUpload = async (req, res) => {
  const {
    body: { description },
    file: { location },
    user: { _id: id },
    //유저 정보도 받아와야 함
  } = req;
  const time = new Date();
  try {
    const newContent = await Content.create({
      fileUrl: location,
      description,
      creator: id,
      createAt: time,
    });
    req.user.content.unshift(newContent.id);
    req.user.save();
    req.flash("success", "업로드에 성공했습니다.");
    res.redirect(routes.contentDetail(newContent.id));
  } catch (error) {
    console.log(error);
    req.flash("error", "업로드에 실패했습니다.");
    res.redirect(routes.home);
  }
};

export const getContentDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  const content = await Content.findById(id)
    .populate("creator")
    .populate("comment");
  res.render("contentDetail", { pageTitle: "Content", content });
};

export const getEditContent = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const content = await Content.findById(id);
    res.render("editContent", {
      pageTitle: "Edit Content",
      formTitle: "콘텐츠 수정",
      content,
    });
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
