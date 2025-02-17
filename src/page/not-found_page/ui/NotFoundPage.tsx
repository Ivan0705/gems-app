import { Page } from "@/shared/ui/Page";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import cls from "./NotFoundPage.module.scss";

export const NotFoundPage = memo(() => {
  const { t } = useTranslation("error");
  return (
    <Page className={cls.notFoundPage}>
      <section data-testid="not_found_page">{t("not found")}</section>
    </Page>
  );
});
