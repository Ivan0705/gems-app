import { memo } from "react";
import cls from "./SignOut.module.scss";
import { ToolTipSignOut } from "./ToolTipSignOut";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";

export const SignoutBtn = memo(() => {
  const adminName = localStorage.getItem("admin");

  return (
    <ToolTipSignOut>
      <Button className={cls.signoutBtn} theme={ButtonTheme.BACKGROUND}>
        {adminName}
      </Button>
    </ToolTipSignOut>
  );
});
