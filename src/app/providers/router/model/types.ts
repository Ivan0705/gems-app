import { ReactNode } from "react";

export interface IRoute {
  index: boolean;
  path: string;
  element: ReactNode;
}
