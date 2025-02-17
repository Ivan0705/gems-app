import { lazy } from "react";

export const AboutGemsPageAsync = lazy(() =>
  import("./AboutGemsPage").then(({ AboutGemsPage }) => ({
    default: AboutGemsPage,
  })),
);
