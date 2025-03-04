import { classNames } from "@/shared/libs/classNames/classNames";
import { ReactNode } from "react";
import "@/app/styles/index.scss";
import { Theme } from "@/app/providers/theme_provider/models/enums";

export const MainWrapper = (props: { children: ReactNode; color: Theme }) => {
  const { children, color } = props;
  return <div className={classNames("app", {}, [color])}>{children}</div>;
};
