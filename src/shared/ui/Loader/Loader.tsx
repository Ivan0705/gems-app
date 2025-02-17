import { ObjectProperties } from "@/shared/consts/ObjectProperties/ObjectProperties";
import { classNames } from "@/shared/libs/classNames/classNames";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./Loader.module.scss";

interface LoaderProps {
  className: string;
}

type LoaderType = Partial<LoaderProps | ObjectProperties>;

export const Loader = memo(({ className }: LoaderType) => {
  const { t } = useTranslation("loading");
  return (
    <div
      className={classNames(cls.lds_ellipsis, {}, [className])}
      data-testid="loader"
    >
      {t("loading")}
    </div>
  );
});
