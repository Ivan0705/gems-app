import { userAPI } from "../models/slice/UserService";
import { useThrottle } from "../../../shared/hooks/throttle/usethrottle";
import { useDebounce } from "../../../shared/hooks/debounce/useDebounce";
import { useState } from "react";

export const useUsers = () => {
  const [search, setSearch] = useState("");

  const { data: users, isLoading, error } = userAPI.useFetchAllUsersQuery(10);

  const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const searchHandleThottled = useThrottle(
    (e: React.ChangeEvent<HTMLInputElement>) => searchHandle(e),
    1000,
  );

  const searchHandleDebounced = useDebounce(
    (e: React.ChangeEvent<HTMLInputElement>) => searchHandle(e),
    1000,
  );

  return {
    search,
    searchHandle,
    searchHandleThottled,
    searchHandleDebounced,
    users,
    isLoading,
    error,
  };
};
