import { memo, ReactNode } from "react";
import cls from "./Page.module.scss";
import { classNames } from "@/shared/libs/classNames/classNames";
import { ObjectProperties } from "@/shared/consts/ObjectProperties/ObjectProperties";

interface PageProps {
  children: ReactNode;
  className?: string;
}

type PagePropsType = PageProps | ObjectProperties;

export const Page = memo((props: PagePropsType) => {
  const { className, children } = props;
  return (
    <div className={classNames(cls.page, {}, [className])} data-testid="page">
      {children}
    </div>
  );
});
