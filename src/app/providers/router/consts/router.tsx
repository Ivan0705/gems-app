import { NotFoundPage } from "../../../../page/not-found_page";
import { AboutGemsPage } from "../../../../page/about_gems_page";
import { AboutUsersPage } from "../../../../page/about_users_page";
import { AboutPostsPage } from "../../../../page/about_posts_page/ui/AboutPostsPage";
import { AboutUserPage } from "../../../../page/about_user_page";
import { IRoute } from "../model/types";
import { AppRoutes } from "./AppRoutesEnum";

export const arrayRouters: IRoute[] = [
  { index: true, path: AppRoutes.HOME, element: <AboutGemsPage /> },
  { index: false, path: AppRoutes.USERS, element: <AboutUsersPage /> },
  {
    index: false,
    path: AppRoutes.USER_INFO,
    element: <AboutUserPage />,
  },
  { index: false, path: AppRoutes.POSTS, element: <AboutPostsPage /> },
  { index: false, path: AppRoutes.NOT_FOUND, element: <NotFoundPage /> },
];
