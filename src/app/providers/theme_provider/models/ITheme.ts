import { Theme } from "./enums";

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}
