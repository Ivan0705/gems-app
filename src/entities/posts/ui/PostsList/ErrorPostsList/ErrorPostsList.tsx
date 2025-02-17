import { usePosts } from "@/entities/posts/hooks/usePosts";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./ErrorPostsList.module.scss";

export const ErrorPostsList = memo(() => {
  const { error } = usePosts();
  const { t } = useTranslation(["error"]);

  return (
    <div> {error && <h2 className={cls.error}>{t("error_loading")}</h2>}</div>
  );
});
