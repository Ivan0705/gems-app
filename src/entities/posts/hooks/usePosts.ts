import { useState } from "react";
import { postAPI } from "../model/service/PostService";
import { useDebounce } from "@/shared/hooks/debounce/useDebounce";
import { useThrottle } from "@/shared/hooks/throttle/usethrottle";

export const usePosts = () => {
  const { data: posts, isLoading, error } = postAPI.useFetchAllPostsQuery(5);

  const [search, setSearch] = useState("");

  const searchHandle = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const searchHandleDebounced = useDebounce(searchHandle, 500);

  const searchHandleThrottled = useThrottle(searchHandle, 500);

  return {
    posts,
    isLoading,
    error,
    search,
    searchHandle,
    searchHandleDebounced,
    searchHandleThrottled,
  };
};
