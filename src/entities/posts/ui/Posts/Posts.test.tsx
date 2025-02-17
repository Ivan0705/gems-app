import { getByTestId, render, screen } from "@testing-library/react";
import { Posts } from "./Posts";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";

describe("Posts", () => {
  test("Posts test", () => {
    const wrapperPosts = wrapperRouterProviderForTest(<Posts />);
    render(wrapperPosts);
    expect(screen.getByTestId("posts")).toBeInTheDocument();
  });

  test("Posts test with i18next", () => {
    const wrapperPosts = wrapperRouterProviderForTest(<Posts />);
    render(wrapperPosts);
    const { container } = renderWithi18next(wrapperPosts);
    expect(getByTestId(container, "posts")).toBeInTheDocument();
  });
});
