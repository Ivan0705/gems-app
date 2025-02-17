import { memo } from "react";
import { IsLoadingPostsList } from "../PostsList/IsLoadingPostList/IsLoadingPostsList";
import { ErrorPostsList } from "../PostsList/ErrorPostsList/ErrorPostsList";
import { PostsList } from "../PostsList/PostsList";
import { usePosts } from "../../hooks/usePosts";
import cls from "./Posts.module.scss";

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
