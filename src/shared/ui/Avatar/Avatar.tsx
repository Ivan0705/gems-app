import { classNames } from "@/shared/libs/classNames/classNames";
import { Mods } from "@/shared/libs/classNames/types/Mods";
import { CSSProperties, useMemo } from "react";
import cls from "./Avatar.module.scss";
import { ObjectProperties } from "@/shared/consts/ObjectProperties/ObjectProperties";

interface AvatarProps {
  className: string;
  src: string;
  size: number;
  alt: string;
}

type AvatarType = Partial<AvatarProps | ObjectProperties>;

export const Avatar = (props: AvatarType) => {
  const { className, size, src, alt } = props;

  const mods: Mods = {};

  const stl = useMemo<CSSProperties>(() => {
    return {
      width: size || 100,
      height: size || 100,
    };
  }, [size]);

  return (
    <img
      className={classNames(cls.Avatar, mods, [className])}
      src={src}
      style={stl}
      alt={alt}
      data-testid="avatar"
    />
  );
};
