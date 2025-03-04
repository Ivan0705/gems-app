import { memo } from "react";
import { useUsers } from "../../hooks/useUsers";
import { IUser } from "../../models/types/types";
import { User } from "../User/User";
import { useNavigate } from "react-router-dom";
import { ObjectProperties } from "@/shared/consts/ObjectProperties/ObjectProperties";
import { useTranslation } from "react-i18next";
import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { userId } from "@/shared/api/api";
import cls from "./UsersList.module.scss";

interface UsersListProps {
  search: string;
  error?: FetchBaseQueryError | SerializedError | undefined;
  isLoading?: boolean;
}

type UsersListPropsType = Partial<UsersListProps> | ObjectProperties;

export const UsersList = memo((props: UsersListPropsType) => {
  const { search, error, isLoading } = props;
  const navigate = useNavigate();
  const { users } = useUsers();
  const { t } = useTranslation("notFoundUser");

  const openUser = (id: number) => {
    navigate(userId(id));
  };

  const empty = "";

  const filtrationUsers = (users: IUser[]) => {
    return users.filter((user: IUser) =>
      search.toLowerCase() === empty
        ? user
        : user.name.toLocaleLowerCase().includes(search.toLowerCase()) ||
          search.toLowerCase() === empty,
    );
  };

  const isEmptyArr = users && [...filtrationUsers(users)];

  const validate = error ? (
    empty
  ) : isEmptyArr?.length ? (
    empty
  ) : (
    <div className={cls.error}>{t("not_found_user")}</div>
  );

  return (
    <div data-testid="users_list" className={cls.usersList}>
      {isLoading === false ? validate : empty}
      {users &&
        filtrationUsers(users).map((user: IUser) => (
          <User key={user.id} user={user} openUser={openUser} />
        ))}
    </div>
  );
});
