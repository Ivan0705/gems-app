import { classNames } from "@/shared/libs/classNames/classNames";
import { Mods } from "@/shared/libs/classNames/types/Mods";
import { CSSProperties, memo } from "react";
import cls from "./Skeleton.module.scss";
import { ObjectProperties } from "@/shared/consts/ObjectProperties/ObjectProperties";

export interface SkeletonProps {
  className: string;
  height: string | number;
  width: string | number;
  border: string;
}

type SkeletonType = Partial<SkeletonProps | ObjectProperties>;

export const Skeleton = memo((props: SkeletonType) => {
  const { className, height, width, border } = props;

  const mods: Mods = {};

  const styles: CSSProperties = {
    height,
    width,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(cls.Skeleton, mods, [className])}
      style={styles}
      data-testid="skeleton"
    />
  );
});
