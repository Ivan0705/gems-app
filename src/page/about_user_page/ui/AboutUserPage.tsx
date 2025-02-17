import { UserInfo } from "@/entities/users";
import cls from "./AboutUserPage.module.scss";
import { Page } from "@/shared/ui/Page";
import { memo } from "react";

export const AboutUserPage = memo(() => {
  return (
    <Page className={cls.aboutUserPage}>
      <div data-testid="about_user_page">
        <UserInfo />
      </div>
    </Page>
  );
});
