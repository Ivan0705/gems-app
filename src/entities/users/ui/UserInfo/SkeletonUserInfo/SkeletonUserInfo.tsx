import { memo } from "react";
import cls from "./SkeletonUserInfo.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const SkeletonUserInfo = memo(() => {
  return (
    <div className={cls.skeletonUserInfo} data-testid="skeleton_user_info">
      <div className={cls.skeletonUserInfo_aboutUser}>
        <div className={cls.skeletonUserInfo_avatar}>
          <Skeleton width={100} height={30} />
          <Skeleton border="50%" width={230} height={230} />
        </div>
        <div className={cls.skeletonUserInfo_userInfo}>
          <Skeleton className={cls.skeletonUserInfo_userInfo_skeleton} />
        </div>
      </div>
      <div className={cls.skeletonUserInfo_aboutCompany}>
        <Skeleton className={cls.skeletonUserInfo_aboutCompany_skeleton} />
      </div>
    </div>
  );
});
