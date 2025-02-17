import { usePosts } from "@/entities/posts/hooks/usePosts";
import { memo } from "react";
import { SkeletonPosts } from "./SkeletonPosts/SkeletonPosts";
import { Input } from "@/shared/ui/Input/Input";
import { useTranslation } from "react-i18next";

interface IsLoadingPostsListProps {
  searchHandleDebounced: () => void;
}

export const IsLoadingPostsList = memo((props: IsLoadingPostsListProps) => {
  const { searchHandleDebounced } = props;
  const { isLoading } = usePosts();
  const { t } = useTranslation("input");

  return (
    <div data-testid="isLoadind_posts">
      {isLoading ? (
        <SkeletonPosts />
      ) : (
        <Input
          type="text"
          onChange={searchHandleDebounced}
          placeholder={t("search")}
          data-testid="input"
        />
      )}
    </div>
  );
});
