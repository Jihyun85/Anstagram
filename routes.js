const HOME = "/";
const LOGIN = "/login";
const JOIN = "/login";
const LOGOUT = "/logout";

const USERS = "/users";
const PROFILE = "/:id";
const EDIT_PROFILE = "/:id/edit";
const DELETE_PROFILE = "/:id/delete";

const CONTENT = "/content";
const UPLOAD = "/upload";
const CONTENT_DETAIL = "/:id";
const EDIT_CONTENT = "/:id/edit";
const DELETE_CONTENT = "/:id/delete";

const routes = {
  home: HOME,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  users: USERS,
  profile: PROFILE,
  editProfile: EDIT_PROFILE,
  deleteProfile: DELETE_PROFILE,
  content: CONTENT,
  upload: UPLOAD,
  contentDetail: CONTENT_DETAIL,
  editContent: EDIT_CONTENT,
  deleteContent: DELETE_CONTENT,
};

export default routes;
