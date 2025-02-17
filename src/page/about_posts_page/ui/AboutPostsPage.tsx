import { Posts } from "@/entities/posts";
import { Page } from "@/shared/ui/Page";
import { memo } from "react";
import cls from "./AboutPostsPage.module.scss";

export const AboutPostsPage = memo(() => {
  return (
    <Page className={cls.aboutPostsPage}>
      <div data-testid="about_posts_page">
        <Posts />
      </div>
    </Page>
  );
});
