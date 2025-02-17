import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

export const CustomRouter = (props: { children: ReactNode }) => {
  const { children } = props;
  return <BrowserRouter>{children}</BrowserRouter>;
};
