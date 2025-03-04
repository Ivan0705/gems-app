import { createSelector } from "@reduxjs/toolkit";
import { getAuth } from "./getAuth";
import { AuthSchema } from "../types/AuthSchema";

export const getAuthValue = createSelector(
  getAuth,
  (auth: AuthSchema) => auth.isAuth,
  (auth: AuthSchema) => auth.admin?.username,
);
