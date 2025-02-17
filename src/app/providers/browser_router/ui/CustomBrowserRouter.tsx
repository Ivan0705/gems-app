import { memo, ReactNode } from "react";
import { baseName } from "@/app/providers/browser_router/config/baseName";
import { BrowserRouter } from "react-router-dom";

interface CustomBrowserRouterProps {
  children: ReactNode;
}

export const CustomBrowserRouter = memo((props: CustomBrowserRouterProps) => {
  const { children } = props;
  return <BrowserRouter basename={baseName()}>{children}</BrowserRouter>;
});
