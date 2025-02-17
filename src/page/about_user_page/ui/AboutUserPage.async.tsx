import { lazy } from "react";

export const AboutUserAsync = lazy(() =>
  import("./AboutUserPage").then(({ AboutUserPage }) => ({
    default: AboutUserPage,
  })),
);
