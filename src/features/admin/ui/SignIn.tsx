import { FC, memo } from "react";
import cls from "./SignIn.module.scss";
import { AdminForm } from "./adminForm/AdminForm";

export const SignIn: FC = memo(() => {
  return (
    <div className={cls.signIn} data-testid="signin">
      <AdminForm />
    </div>
  );
});
