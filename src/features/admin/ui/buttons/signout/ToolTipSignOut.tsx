import { useLogoutAdmin } from "@/features/admin/hooks/useLogoutAdmin";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";
import { memo, ReactNode, useState } from "react";
import cls from "./ToolTipSignOut.module.scss";
import { useTranslation } from "react-i18next";

interface ToolTipSignOutProps {
  children: ReactNode;
}

export const ToolTipSignOut = memo((props: ToolTipSignOutProps) => {
  const { children } = props;
  const [showToolTip, setShowToolTip] = useState(false);
  const { handleLogout } = useLogoutAdmin();
  const { t } = useTranslation("signout");

  const onMouseEnterHandler = () => {
    setShowToolTip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowToolTip(false);
  };
  return (
    <div
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      className={cls.toolTipSignOut}
      data-testid="signoutBtn"
    >
      {showToolTip ? (
        <Button
          theme={ButtonTheme.BACKGROUND}
          className={cls.toolTipSignOut_btn}
          onClick={handleLogout}
        >
          {t("signout")}
        </Button>
      ) : (
        children
      )}
    </div>
  );
});
