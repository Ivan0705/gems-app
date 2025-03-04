import { main, posts, userId, users } from "@/shared/api/api";

export enum AppRoutes {
  MAIN = "mainPage",
  USERS = "users",
  USER_INFO = "user_info",
  POSTS = "posts",
  NOT_FOUND = "not_found",
  LOGIN = "login",
}

export const getRouteMain = () => main;
export const getRouteUsers = () => users;
export const getRouteUserInfo = (id: string) => userId(id);
export const getRoutePosts = () => posts;
