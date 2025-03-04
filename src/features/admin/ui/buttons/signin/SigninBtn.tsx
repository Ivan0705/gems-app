import { AppRoutes } from "@/app/providers/router/consts/AppRoutesEnum";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";
import { memo } from "react";
import { useNavigate } from "react-router-dom";
import cls from "./SigInBtn.module.scss";
import { useTranslation } from "react-i18next";

export const SigninBtn = memo(() => {
  const navigate = useNavigate();
  const { t } = useTranslation("signin");

  const toLogin = () => {
    navigate(AppRoutes.LOGIN);
  };

  return (
    <Button
      data-testid="siginBtn"
      theme={ButtonTheme.BACKGROUND}
      className={cls.sigInBtn}
      onClick={() => toLogin()}
    >
      {t("signin")}
    </Button>
  );
});
