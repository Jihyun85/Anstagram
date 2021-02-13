const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
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
  profile: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return PROFILE;
    }
  },
  editProfile: (id) => {
    if (id) {
      return `/users/${id}/edit`;
    } else {
      return EDIT_PROFILE;
    }
  },
  deleteId: (id) => {
    if (id) {
      return `/users/${id}/delete`;
    } else {
      return DELETE_PROFILE;
    }
  },
  content: CONTENT,
  upload: UPLOAD,
  contentDetail: (id) => {
    if (id) {
      return `/content/${id}`;
    } else {
      return CONTENT_DETAIL;
    }
  },
  editContent: (id) => {
    if (id) {
      return `/content/${id}/edit`;
    } else {
      return EDIT_CONTENT;
    }
  },
  deleteContent: (id) => {
    if (id) {
      return `/content/${id}/delete`;
    } else {
      return DELETE_CONTENT;
    }
  },
};

export default routes;
