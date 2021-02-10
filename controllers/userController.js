export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "로그인" });
};

export const postLogin = (req, res) => {
  res.send("Hello!");
};

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "회원가입" });
};

export const postJoin = (req, res) => {
  res.send("Hello!");
};

export const logout = (req, res) => {
  res.send("Hello!");
};

export const getProfile = (req, res) => {
  res.render("profile");
};

export const getEditProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "프로필 수정" });
};

export const postEditProfile = (req, res) => {
  res.send("Hello!");
};

export const deleteProfile = (req, res) => {
  res.send("Hello!");
};
