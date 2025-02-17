import { lazy } from "react";

export const AboutUsersPageAsync = lazy(() =>
  import("./AboutUsersPage").then(({ AboutUsersPage }) => ({
    default: AboutUsersPage,
  })),
);
