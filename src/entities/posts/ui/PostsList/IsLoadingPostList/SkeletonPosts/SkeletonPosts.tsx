import { memo } from "react";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { ISkeleton } from "@/entities/posts/model/types/types";
import cls from "./SkeletonPosts.module.scss";
import { classNames } from "@/shared/libs/classNames/classNames";
import { arraySkeleton } from "@/entities/posts/consts";

export const SkeletonPosts = memo(() => {
  return (
    <div className={cls.skeletonPosts} data-testid="skeletonposts">
      {arraySkeleton.map((skeleton: ISkeleton, id: number) => (
        <div className={cls.skeletonPosts_item} key={id}>
          <Skeleton
            width={skeleton.width}
            height={skeleton.height}
            className={classNames(cls.skl, {}, [])}
          />
        </div>
      ))}
    </div>
  );
});
