import { useUsers } from "@/entities/users/hooks/useUsers";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./UsersErrorList.module.scss";

export const ErrorUsersList = memo(() => {
  const { error } = useUsers();
  const { t } = useTranslation("error");

  return (
    <div data-testid="text-trans">
      {error && <h2 className={cls.error}>{t("error_loading")}</h2>}
    </div>
  );
});
