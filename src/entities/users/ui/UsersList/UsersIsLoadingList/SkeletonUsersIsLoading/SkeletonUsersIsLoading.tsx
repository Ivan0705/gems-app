import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { memo } from "react";
import cls from "./SkeletonUsersIsLoading.module.scss";
import { classNames } from "@/shared/libs/classNames/classNames";
import { arraySkeletonUsers } from "@/entities/users/consts";

export const SkeletonUsertsIsloading = memo(() => {
  return (
    <div
      className={cls.skeletonUsersIsLoading}
      data-testid="skeleton_users_isLoading"
    >
      {arraySkeletonUsers.map((skl: any, index: number) => (
        <Skeleton
          key={index}
          width={skl.width}
          height={skl.height}
          className={classNames(cls[skl.clsName], {}, [])}
        />
      ))}
    </div>
  );
});
