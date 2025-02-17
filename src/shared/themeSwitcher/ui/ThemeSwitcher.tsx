import { memo } from "react";
import { useTheme } from "@/app/providers/theme_provider/lib/useTheme";
import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import { ReactComponent as Moon } from "@/shared/assets/icons/moon.svg?react";
import { ReactComponent as Sun } from "@/shared/assets/icons/sun.svg?react";
import { Icon } from "@/shared/ui/Icon/Icon";
import cls from "./ThemeSwitcher.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={cls.themeSwitcher}
    >
      {theme === Theme.DARK ? (
        <Icon Svg={Moon} className={cls.themeSwitcher_btn} />
      ) : (
        <Icon Svg={Sun} className={cls.themeSwitcher_btn} />
      )}
    </Button>
  );
});
