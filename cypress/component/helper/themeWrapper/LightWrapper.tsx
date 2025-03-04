import { ReactNode } from "react";
import { MainWrapper } from "./MainWrapper";
import { Theme } from "@/app/providers/theme_provider/models/enums";

export const LightWrapper = (props: { children: ReactNode }) => {
  const { children } = props;
  return <MainWrapper color={Theme.LIGHT} children={children} />;
};
