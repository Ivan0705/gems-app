import { AuthTheme } from "./enums";

export interface AuthContextProps {
  auth?: AuthTheme;
  setAuth?: (auth: AuthTheme) => void;
}

export interface UseAuthResult {
  toggleAuth: () => void;
  auth: AuthTheme;
}
