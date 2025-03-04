import { memo } from "react";
import { useTranslation } from "next-i18next";
import { ReactComponent as EnglishFlag } from "@/shared/assets/icons/uk-flag.svg?react";
import { ReactComponent as RussianFlag } from "@/shared/assets/icons/russia-flag.svg?react";
import { Icon } from "@/shared/ui/Icon/Icon";
import cls from "./SwitcherLanguage.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";
import { SwitcherLanguageColor } from "../model/enums";

interface SwitcherLanguageProps {
  color?: any;
}
export const SwitcherLanguage = memo((props: SwitcherLanguageProps) => {
  const { t, i18n } = useTranslation("language");
  const { color = SwitcherLanguageColor.BLACK } = props;

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <div data-testid="switcher_language">
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={() => changeLanguage()}
        className={cls.switherLanguage}
      >
        {i18n.language === "ru" ? (
          <Icon Svg={RussianFlag} className={cls.switherLanguage_flag} />
        ) : (
          <Icon Svg={EnglishFlag} className={cls.switherLanguage_flag} />
        )}
        <div className={cls.switherLanguage_title} style={{ color: color }}>
          {t("language")}
        </div>
      </Button>
    </div>
  );
});
