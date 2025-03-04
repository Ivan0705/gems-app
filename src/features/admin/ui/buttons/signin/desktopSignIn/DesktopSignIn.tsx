import { memo } from "react";
import { SigninBtn } from "../SigninBtn";
import cls from "./DesctopSignIn.module.scss";

export const DesctopSignIn = memo(() => {
  return (
    <div className={cls.desctopSignIn}>
      <SigninBtn />
    </div>
  );
});
