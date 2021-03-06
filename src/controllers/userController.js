import routes from "../routes";
import passport from "passport";
import User from "../model/User";
import Content from "../model/Content";

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login", formTitle: "로그인" });
};

export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
  successFlash: "로그인에 성공했습니다.",
  failureFlash: "로그인에 실패했습니다. 이메일이나 비밀번호를 확인해주세요.",
});

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join", formTitle: "회원가입" });
};

export const postJoin = async (req, res) => {
  const {
    body: { email, displayName, name, password1, password2 },
    file,
  } = req;
  const searchUser = await User.find({ email });
  if (searchUser.length !== 0) {
    req.flash("error", "이미 가입된 이메일입니다.");
    res.render("join", { pageTitle: "Join" });
  } else if (password1 !== password2) {
    req.flash("error", "비밀번호 확인이 비밀번호와 다릅니다.");
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await new User({
        email,
        displayName,
        name,
        profileUrl: file
          ? file.location
          : "https://anstagram.s3.ap-northeast-2.amazonaws.com/profile/profile-default.jpg",
      });
      await User.register(user, password1);
      req.flash("success", "회원가입에 성공했습니다.");
      res.redirect(routes.login);
    } catch (error) {
      console.log(error);
      res.redirect(routes.join);
    }
  }
};

export const logout = (req, res) => {
  req.logout();
  req.flash("success", "로그아웃에 성공했습니다.");
  res.redirect(routes.home);
};

export const getMe = async (req, res) => {
  const {
    user: { id },
  } = req;
  const user = await User.findById(id).populate("content");
  res.render("profile", { pageTitle: "My Profile", user });
};

export const getEditMe = async (req, res) => {
  const {
    user: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("editProfile", {
      pageTitle: "Edit Profile",
      formTitle: "프로필 수정",
      user,
    });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditMe = async (req, res) => {
  const {
    user: { id },
    body: { displayName, name, description },
    file,
  } = req;
  try {
    await User.findByIdAndUpdate(id, {
      displayName,
      description,
      name,
      profileUrl: file ? file.location : req.user.profileUrl,
    });
    //나중에 router를 따로 만들어서 내 프로필만 분리예정
    res.redirect(`/users${routes.me}`);
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const getProfile = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findById(id).populate("content");
  res.render("profile", { pageTitle: "Profile", user });
};

export const deleteId = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id)
      .populate("content")
      .populate("comment");
    const contentAry = user.content;
    contentAry.forEach(async function (content) {
      await Content.findByIdAndRemove(content.id);
    });
    await User.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
