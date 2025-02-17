import { memo } from "react";
import { IPost } from "../../model/types/types";
import cls from "./PostItem.module.scss";
import { ObjectProperties } from "@/shared/consts/ObjectProperties/ObjectProperties";

interface PostItemProps {
  post: IPost;
}

type PostItemPropsType = Partial<PostItemProps> | ObjectProperties;

export const PostItem = memo((props: PostItemPropsType) => {
  const { post } = props;
  return (
    <article className={cls.postItem} data-testid="postitem">
      <div key={post.id}>
        <i>{post.id}</i>.<b className={cls.postItem_title}> {post.title}</b>
        <hr className={cls.postItem_line} />
        <p>{post.body}</p>
      </div>
    </article>
  );
});
