import { lazy } from "react";

export const AboutPostsPageAsync = lazy(() =>
  import("./AboutPostsPage").then(({ AboutPostsPage }) => ({
    default: AboutPostsPage,
  })),
);
