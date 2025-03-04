import { createContext } from "react";
import { AuthContextProps } from "../models/IAuthContext";

export const AuthContext = createContext<AuthContextProps>({});
