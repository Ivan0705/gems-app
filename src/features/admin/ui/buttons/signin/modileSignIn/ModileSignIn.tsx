import { memo } from "react";
import cls from "./ModileSignIn.module.scss";
import { SignIn } from "../../../SignIn";

export const ModileSignIn = memo(() => {
  return (
    <div className={cls.modileSignOut}>
      <SignIn />
    </div>
  );
});
