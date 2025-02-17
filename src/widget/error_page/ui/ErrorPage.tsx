import { useTranslation } from "react-i18next";
import { classNames } from "../../../shared/libs/classNames/classNames";
import cls from "./ErrorPage.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { ObjectProperties } from "@/shared/consts/ObjectProperties/ObjectProperties";
import "@/app/styles/index.scss";
import { useTheme } from "@/app/providers/theme_provider/lib/useTheme";

interface ErrorPageProps {
  className?: string;
}

type ErrorPagePropsType = ErrorPageProps | ObjectProperties;

export const ErrorPage = (props: ErrorPagePropsType) => {
  const { className } = props;
  const { t } = useTranslation("error");
  const { theme } = useTheme();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <section
      className={classNames("app", {}, [theme])}
      data-testid="error_page"
    >
      <div className={classNames(cls.error_page, {}, [className])}>
        <p>{t("error")}</p>
        <Button onClick={reloadPage}>{t("reload page")}</Button>
      </div>
    </section>
  );
};
