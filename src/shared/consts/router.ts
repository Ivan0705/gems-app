export enum AppRoutes {
  MAIN = "mainPage",
  USERS = "users",
  USER_INFO = "user_info",
  POSTS = "posts",
  NOT_FOUND = "not_found",
}

export const getRouteMain = () => "/";
export const getRouteUsers = () => "/users";
export const getRouteUserInfo = (id: string) => `/users/:${id}`;
export const getRoutePosts = () => "/posts";
