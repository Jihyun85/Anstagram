export const getHome = (req, res) => {
  res.render("home");
};

export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "게시물 만들기" });
};

export const postUpload = (req, res) => {
  res.send("Hi");
};

export const getContentDetail = (req, res) => {
  res.send("Hi");
};

export const getEditContent = (req, res) => {
  res.render("editContent", { pageTitle: "게시물 수정" });
};

export const postEditContent = (req, res) => {
  res.send("Hi");
};

export const deleteContent = (req, res) => {
  res.send("Hi");
};
