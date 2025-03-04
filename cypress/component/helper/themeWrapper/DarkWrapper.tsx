import { Theme } from "@/app/providers/theme_provider/models/enums";
import { ReactNode } from "react";
import { MainWrapper } from "./MainWrapper";

export const DarkWrapper = (props: { children: ReactNode }) => {
  const { children } = props;
  return <MainWrapper color={Theme.DARK} children={children} />;
};
