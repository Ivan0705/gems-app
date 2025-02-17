import { Users } from "@/entities/users";
import { Page } from "@/shared/ui/Page";
import { memo } from "react";
import cls from "./AboutUsersPage.module.scss";

export const AboutUsersPage = memo(() => {
  return (
    <Page className={cls.aboutUsersPage}>
      <div data-testid="about_users_page">
        <Users />
      </div>
    </Page>
  );
});
