import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Theme } from "../models/enums";
import { LOCAL_STORAGE_THEME_KEY } from "../consts";
import { UseThemeResult } from "../models/ITheme";

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme?.(newTheme);

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
