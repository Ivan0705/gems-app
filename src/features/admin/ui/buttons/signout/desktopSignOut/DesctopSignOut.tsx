import { memo } from "react";
import cls from "./DesktopSignOut.module.scss";
import { SignoutBtn } from "../SignoutBtn";

export const DesktopSignOut = memo(() => {
  return (
    <div className={cls.desktopSignOut}>
      <SignoutBtn />
    </div>
  );
});
