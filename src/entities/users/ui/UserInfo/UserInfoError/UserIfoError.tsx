import cls from "./UserInfoError.module.scss";
import { useTranslation } from "react-i18next";

export const UserInfoError = () => {
  const { t } = useTranslation("error");
  return (
    <div className={cls.userInfoError} data-testid="userInfoError">
      <h1 className={cls.error}>{t("error")}</h1>
    </div>
  );
};
