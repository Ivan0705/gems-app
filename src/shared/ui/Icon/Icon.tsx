import { classNames } from "@/shared/libs/classNames/classNames";
import { memo } from "react";
import cls from "./Icon.module.scss";
import { ObjectProperties } from "@/shared/consts/ObjectProperties/ObjectProperties";
import { Mods } from "@/shared/libs/classNames/types/Mods";
import { IconSize } from "./consts";

interface IconProps {
  className: string;
  Svg: React.SVGProps<SVGSVGElement>;
  size: IconSize;
}

type IconType = Partial<IconProps | ObjectProperties>;

export const Icon = memo((props: IconType) => {
  const { className, Svg, size } = props;

  const mods: Mods = {
    [cls[size]]: true,
  };

  return (
    <Svg
      className={classNames(cls.icon, mods, [className])}
      data-testid="icon"
    />
  );
});
