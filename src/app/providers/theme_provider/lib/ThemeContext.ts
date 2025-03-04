import { createContext } from "react";
import { ThemeContextProps } from "../models/ITheme";

export const ThemeContext = createContext<ThemeContextProps>({});
