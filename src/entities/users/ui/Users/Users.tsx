import { memo } from "react";
import { ErrorUsersList } from "../UsersList/UsersErrorList/UsersErrorList";
import { UsersIsLoadingList } from "../UsersList/UsersIsLoadingList/UsersIsLoading";
import { UsersList } from "../UsersList/UsersList";
import { useUsers } from "../../hooks/useUsers";
import cls from "./Users.module.scss";

export const Users = memo(() => {
  const { search, searchHandle, error, isLoading } = useUsers();

  return (
    <section className={cls.users} data-testid="users">
      <div>
        <UsersIsLoadingList search={search} searchHandle={searchHandle} />
        <ErrorUsersList />
        <UsersList search={search} error={error} isLoading={isLoading} />
      </div>
    </section>
  );
});
