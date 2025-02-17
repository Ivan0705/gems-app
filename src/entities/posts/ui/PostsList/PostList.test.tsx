import { getByTestId, render } from "@testing-library/react";
import { PostsList } from "./PostsList";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { postsForTesting } from "../../consts";

describe("PostsList with i18next", () => {
  const posts = postsForTesting;

  const arrayPostsAndSearch = { posts, search: "" };

  test("PostsList test", () => {
    const wrappedPostsList = wrapperRouterProviderForTest(
      <PostsList {...arrayPostsAndSearch} />,
    );

    render(wrappedPostsList);
    const { container } = renderWithi18next(wrappedPostsList);
    expect(getByTestId(container, "postslist")).toBeInTheDocument();
    expect(getByTestId(container, "postslist")).toHaveTextContent(
      "1. sunt aut facere repellat provident occaecati excepturi optio reprehenderitquia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto2. qui est esseest rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla",
    );
  });

  test("Test posts by id = 0", () => {
    const userId = posts[0].userId;
    const id = posts[0].id;
    const title = posts[0].title;
    const body = posts[0].body;

    const toBeTitle = posts.map((item) => item.title);
    const toBeBody = posts.map((item) => item.body);

    expect(userId).toBe(1);
    expect(id).toBe(1);
    expect(title).toBe(toBeTitle[0]);
    expect(body).toBe(toBeBody[0]);
  });

  test("To equals by id", () => {
    const userId = posts[1].userId;
    const id = posts[1].id;
    const title = posts[1].title;
    const body = posts[1].body;

    const toBeBody = posts.map((item) => item.body);
    const toBeTitle = posts.map((item) => item.title);

    expect(userId).toEqual(1);
    expect(id).toEqual(2);
    expect(title).not.toContainEqual(toBeTitle[1]);
    expect(body).toEqual(toBeBody[1]);
    expect(body).toEqual(toBeBody[1]);
  });
});
