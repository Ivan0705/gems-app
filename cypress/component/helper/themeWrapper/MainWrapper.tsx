import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import { classNames } from "@/shared/libs/classNames/classNames";
import { ReactNode } from "react";
import "@/app/styles/index.scss";

export const MainWrapper = (props: { children: ReactNode; color: Theme }) => {
  const { children, color } = props;
  return <div className={classNames("app", {}, [color])}>{children}</div>;
};
