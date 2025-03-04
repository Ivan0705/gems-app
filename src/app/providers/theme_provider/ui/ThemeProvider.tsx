import { memo, ReactNode, useMemo, useState } from "react";
import { ThemeContext } from "../lib/ThemeContext";
import { LOCAL_STORAGE_THEME_KEY } from "../consts";
import { Theme } from "../models/enums";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProvider {
  children?: ReactNode;
  initialTheme?: Theme;
}

export const ThemeProvider = memo((props: ThemeProvider) => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
});
