import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { arrayRouters } from "../consts/router";
import { IRoute } from "../model/types";
import { useTranslation } from "react-i18next";
import { MainPage } from "@/page/main_page";
import cls from "./AppRouters.module.scss";

export const AppRouter = () => {
  const { t } = useTranslation("loading");

  const routersWrapper = (
    <Routes>
      {arrayRouters.map((route: IRoute) => (
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
