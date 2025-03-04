import { memo } from "react";
import { IPost } from "../../model/types/types";
import { PostItem } from "../PostItem/PostItem";
import { useTranslation } from "react-i18next";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import cls from "./PostsList.module.scss";

interface PostsListProps {
  posts: IPost[] | undefined;
  search: string;
  error?: FetchBaseQueryError | SerializedError | undefined;
  isLoading?: boolean;
}

export const PostsList = memo((props: PostsListProps) => {
  const { posts, search, error, isLoading } = props;
  const { t } = useTranslation("notFoundPost");
  const empty = "";

  const filtrationPosts = (posts: IPost[]) =>
    posts &&
    posts.filter((post: IPost) => {
      return search.toLowerCase() === empty
        ? post
        : post.body.toLowerCase().includes(search) ||
            search.toLowerCase() === empty
          ? post
          : post.title.toLowerCase().includes(search);
    });

  const arrayFilterPosts = posts && [...filtrationPosts(posts)];
  const validate = error ? (
    empty
  ) : arrayFilterPosts?.length ? (
    empty
  ) : (
    <div className={cls.postsList_error}>{t("not_found_post")}</div>
  );

  return (
    <div data-testid="postslist" className={cls.postsList}>
      {isLoading === false ? validate : empty}
      {posts &&
        filtrationPosts(posts).map((post: IPost) => (
          <PostItem key={post.id} post={post} />
        ))}
    </div>
  );
});
