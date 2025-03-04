import { createSelector } from "@reduxjs/toolkit";
import { AuthSchema } from "../types/AuthSchema";
import { getAuth } from "./getAuth";

export const getAuthValue = createSelector(
  getAuth,
  (auth: AuthSchema) => auth.admin?.username,
);
