import { useUsers } from "@/entities/users/hooks/useUsers";
import { memo } from "react";
import { SkeletonUsertsIsloading } from "./SkeletonUsersIsLoading/SkeletonUsersIsLoading";
import { Input } from "@/shared/ui/Input/Input";
import { useTranslation } from "react-i18next";

interface UsersIsLoadingProps {
  search: string;
  searchHandle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const UsersIsLoadingList = memo((props: UsersIsLoadingProps) => {
  const { search, searchHandle } = props;
  const { isLoading } = useUsers();
  const { t } = useTranslation("input");

  return (
    <div data-testid="users_isLoading">
      {isLoading ? (
        <SkeletonUsertsIsloading />
      ) : (
        <Input
          type="text"
          placeholder={t("search")}
          value={search}
          onChange={searchHandle}
        />
      )}
    </div>
  );
});
