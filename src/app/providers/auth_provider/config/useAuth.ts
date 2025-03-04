import { useContext } from "react";
import { AuthContext } from "./AuthContent";
import { AuthTheme } from "../models/enums";
import { LOCAL_STORAGE_AUTH } from "../consts";
import { UseAuthResult } from "../models/IAuthContext";

export function useAuth(): UseAuthResult {
  const { auth, setAuth } = useContext(AuthContext);

  const toggleAuth = () => {
    const newAuth = auth === AuthTheme.FALSE ? AuthTheme.TRUE : AuthTheme.FALSE;

    setAuth?.(newAuth);

    localStorage.setItem(LOCAL_STORAGE_AUTH, newAuth);
  };

  return {
    auth: auth || AuthTheme.FALSE,
    toggleAuth,
  };
}
