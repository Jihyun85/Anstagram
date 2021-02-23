import routes from "../routes";
import passport from "passport";
import User from "../model/User";

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "로그인" });
};

export const postLogin = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
});

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};

export const postJoin = async (req, res) => {
  const {
    body: { email, displayName, name, password1, password2 },
    file: { path },
  } = req;
  if (password1 !== password2) {
    //수정 필요(join 페이지를 렌더하지 않고 안내 문구가 나오도록)
    res.status(400);
    res.render("join", { pageTitle: "회원가입" });
  } else {
    try {
      const user = await new User({
        email,
        displayName,
        name,
        profileUrl: path,
      });
      await User.register(user, password1);
      res.redirect(routes.login);
    } catch (error) {
      console.log(error);
      res.redirect(routes.join);
    }
  }
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const getMe = async (req, res) => {
  const {
    user: { id },
  } = req;
  const user = await User.findById(id).populate("content");
  res.render("profile", { pageTitle: "My Profile", user });
};

export const postMe = async (req, res) => {
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
      profileUrl: file ? file.path : req.user.profileUrl,
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
  res.render("profile", { pageTitle: "Edit Profile", user });
};

export const getEditProfile = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id);
    res.render("editProfile", { pageTitle: "프로필 수정", user });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const deleteId = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await User.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};
