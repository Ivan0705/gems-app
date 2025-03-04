import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { authArrayRouters, visitorArrayRouters } from "../consts/router";
import { IRoute } from "../model/types";
import { useTranslation } from "react-i18next";
import { MainPage } from "@/page/main_page";
import cls from "./AppRouters.module.scss";
import { loadAuthFromLocalStorage } from "@/features/admin/consts";
import { useAuth } from "../../auth_provider/config/useAuth";

export const AppRouter = () => {
  const { t } = useTranslation("loading");
  const { auth } = useAuth();
  const isAuth = loadAuthFromLocalStorage();
  const arrRoutes = !auth || isAuth ? authArrayRouters : visitorArrayRouters;

  const routersWrapper = (
    <Routes>
      {arrRoutes.map((route: IRoute) => (
        <Route
          key={route.path}
          index={route.index}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
  const children = (
    <Suspense fallback={<div className={cls.appRouter}>{t("")}</div>}>
      {routersWrapper}
    </Suspense>
  );
  return <MainPage children={children} />;
};
