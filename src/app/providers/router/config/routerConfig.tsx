import { Posts } from "@/entities/posts";
import { UserInfo, Users } from "@/entities/users";
import { MainPage } from "@/page/main_page/ui/MainPage";
import {
  AppRoutes,
  getRouteMain,
  getRoutePosts,
  getRouteUserInfo,
  getRouteUsers,
} from "@/shared/const/router";

export const routerConfig = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.USERS]: {
    path: getRouteUsers(),
    element: <Users />,
  },
  [AppRoutes.USER_INFO]: {
    path: getRouteUserInfo("id"),
    element: <UserInfo />,
  },
  [AppRoutes.POSTS]: {
    path: getRoutePosts(),
    element: <Posts />,
  },
};
