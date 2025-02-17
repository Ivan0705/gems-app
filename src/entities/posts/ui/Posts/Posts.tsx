import { memo } from "react";
import { IsLoadingPostsList } from "../PostsList/IsLoadingPostList/IsLoadingPostsList";
import { ErrorPostsList } from "../PostsList/ErrorPostsList/ErrorPostsList";
import { usePosts } from "../../hooks/usePosts";
import cls from "./Posts.module.scss";
import { PostsList } from "@/entities/posts/ui/PostsList/PostsList";

export const Posts = memo(() => {
  const { posts, search, searchHandleDebounced, error, isLoading } = usePosts();

  return (
    <section className={cls.posts} data-testid="posts">
      <div>
        <IsLoadingPostsList searchHandleDebounced={searchHandleDebounced} />
        <ErrorPostsList />
        <PostsList
          posts={posts}
          search={search}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
});
