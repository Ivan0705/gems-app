import { Theme } from "@/app/providers/theme_provider/lib/ThemeContext";
import { ReactNode } from "react";
import { MainWrapper } from "./MainWrapper";

export const LightWrapper = (props: { children: ReactNode }) => {
  const { children } = props;
  return <MainWrapper color={Theme.LIGHT} children={children} />;
};
