import { FC, memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateSchema } from "@/app/providers/store_provider/StateSchema";
import { useLoginAdmin } from "../../hooks/useLoginAdmin";
import cls from "./AdminForm.module.scss";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";
import { useTranslation } from "react-i18next";

export const AdminForm: FC = memo(() => {
  const { isLoading, error } = useSelector((state: StateSchema) => state.auth);
  const { t } = useTranslation("signin");
  const { email, setEmail, password, setPassword, handleLoginDebounced } =
    useLoginAdmin();
  const mistake = error ? t("error") : "";
  const validateText = (
    <div className={cls.adminForm_error}>
      {mistake ? (
        <p>{mistake}</p>
      ) : (
        <div className={cls.adminForm_emptyCorrect} />
      )}
    </div>
  );
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      const windowEvent = event.target as Window;
      setWidth(windowEvent.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  const checkWidthScreenForTranslation =
    width <= 700 ? t("enterMobile") : t("enter");

  return (
    <section className={cls.adminForm} data-testid="adminForm">
      <div className={cls.adminForm_wrapper}>
        {validateText}
        <div className={cls.adminForm_list_items}>
          <div className={cls.adminForm_item}>
            <div className={cls.adminForm_item_title}>{t("email")} </div>
            <div className={cls.adminForm_item_fieldForEnter}>
              <Input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={checkWidthScreenForTranslation}
              />
            </div>
          </div>
          <div className={cls.adminForm_item}>
            <div className={cls.adminForm_item_title}>{t("password")}</div>
            <div className={cls.adminForm_item_fieldForEnter}>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={checkWidthScreenForTranslation}
              />
            </div>
          </div>
          <div className={cls.adminForm_item}>
            <div>
              <Button
                onClick={handleLoginDebounced}
                disabled={isLoading}
                className={cls.adminForm_item_btn}
                theme={ButtonTheme.OUTLINE}
              >
                <div className={cls.btn_title}>{t("signin")}</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
