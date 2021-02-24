const HOME = "/";
const LOGIN = "/login";
const JOIN = "/join";
const LOGOUT = "/logout";

const USERS = "/users";
const ME = "/me";
const EDIT_ME = "/me/edit";
const PROFILE = "/:id";
const DELETE_PROFILE = "/:id/delete";

const CONTENT = "/content";
const UPLOAD = "/upload";
const CONTENT_DETAIL = "/:id";
const EDIT_CONTENT = "/:id/edit";
const DELETE_CONTENT = "/:id/delete";

// api
const API = "/api";
const HEART = "/:id/heart";
const COMMENT = "/:id/comment";

const routes = {
  home: HOME,
  login: LOGIN,
  join: JOIN,
  logout: LOGOUT,
  users: USERS,
  me: ME,
  profile: (id) => {
    if (id) {
      return `/users/${id}`;
    } else {
      return PROFILE;
    }
  },
  editMe: EDIT_ME,
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
  api: API,
  heart: (id) => {
    if (id) {
      return `/api/${id}/heart`;
    } else {
      return HEART;
    }
  },
  comment: (id) => {
    if (id) {
      return `/api/${id}/comment`;
    } else {
      return COMMENT;
    }
  },
};

export default routes;
