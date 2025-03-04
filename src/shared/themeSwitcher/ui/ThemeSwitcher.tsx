import { memo } from "react";
import { useTheme } from "@/app/providers/theme_provider/lib/useTheme";
import { ReactComponent as Moon } from "@/shared/assets/icons/moon.svg?react";
import { ReactComponent as Sun } from "@/shared/assets/icons/sun.svg?react";
import { Icon } from "@/shared/ui/Icon/Icon";
import cls from "./ThemeSwitcher.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";
import { Theme } from "@/app/providers/theme_provider/models/enums";
import { IconColor } from "@/shared/ui/Icon/consts";

interface ThemeSwitcherProps {
  color?: IconColor;
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const { color } = props;
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      onClick={toggleTheme}
      className={cls.themeSwitcher}
    >
      {theme === Theme.DARK ? (
        <Icon Svg={Moon} className={cls.themeSwitcher_btn} color={color} />
      ) : (
        <Icon Svg={Sun} className={cls.themeSwitcher_btn} color={color} />
      )}
    </Button>
  );
});
