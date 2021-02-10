import routes from "./routes";

export const localMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.user = {
    authenticate: true,
    id: 1,
    displayName: "sonnet29_jh",
    name: "Jihyun",
    content: [1, 2, 3, 4, 5],
    follow: [1, 2, 3, 4, 5, 6, 7],
    follower: [1, 3, 6, 8, 4, 3, 3, 5, 7],
    description: "hahahahahahaha",
    profileImage:
      "https://images.unsplash.com/photo-1612866510806-a9a9f7abd246?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1045&q=80",
  };
  next();
};
