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
    body: { email, nickname, name, password1, password2 },
  } = req;
  if (password1 !== password2) {
    //수정 필요(join 페이지를 렌더하지 않고 안내 문구가 나오도록)
    res.status(400);
    res.render("join", { pageTitle: "회원가입" });
  } else {
    try {
      const user = await new User({
        email,
        nickname,
        name,
      });
      await User.register(user, password1);
      res.redirect(routes.home);
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

export const getProfile = (req, res) => {
  res.render("profile");
};

export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "프로필 수정" });
};

export const postEditProfile = (req, res) => {
  res.redirect(routes.home);
};

export const deleteProfile = (req, res) => {
  res.redirect(routes.home);
};
