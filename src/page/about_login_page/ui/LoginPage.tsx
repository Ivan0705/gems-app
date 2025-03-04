import { memo } from "react";
import cls from "./LoginPage.module.scss";
import { Page } from "@/shared/ui/Page";
import { SignIn } from "@/features/admin/ui/SignIn";

export const LoginPage = memo(() => {
  return (
    <Page>
      <div className={cls.loginPage} data-testid="about_login_page">
        <SignIn />
      </div>
    </Page>
  );
});
