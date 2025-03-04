import { memo } from "react";
import cls from "./ModileSignOut.module.scss";
import { SignoutBtn } from "../SignoutBtn";

export const MobileSignOut = memo(() => {
  return (
    <div className={cls.modileSignOut}>
      <SignoutBtn />
    </div>
  );
});
