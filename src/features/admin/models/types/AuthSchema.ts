import { IAdmin } from "./IAdmin";

export interface AuthSchema {
  isAuth: boolean;
  admin: IAdmin | null | undefined;
  error: string | null;
  isLoading: boolean;
}
