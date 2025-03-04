import { memo, ReactNode, useMemo, useState } from "react";
import { AuthContext } from "../config/AuthContent";
import { LOCAL_STORAGE_AUTH } from "../consts";
import { AuthTheme } from "../models/enums";

const defaultAuth =
  (localStorage.getItem(LOCAL_STORAGE_AUTH) as AuthTheme) || AuthTheme.FALSE;

interface AuthProvider {
  children?: ReactNode;
  initialAuth?: AuthTheme;
}

export const AuthProvider = memo((props: AuthProvider) => {
  const { children, initialAuth } = props;

  const [auth, setAuth] = useState<AuthTheme>(initialAuth || defaultAuth);

  const defaultProps = useMemo(() => ({ auth, setAuth }), [auth, setAuth]);
  return (
    <AuthContext.Provider value={defaultProps}>{children}</AuthContext.Provider>
  );
});
