import { queryByText, render, screen } from "@testing-library/react";
import { ErrorPostsList } from "./ErrorPostsList";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("ErrorPost", () => {
  test("Error element", async () => {
    const wrapperPosts = wrapperRouterProviderForTest(<ErrorPostsList />);
    render(wrapperPosts);
    expect(screen.queryByText("Error")).not.toBeInTheDocument();
  });

  test("Error element with i18next", async () => {
    const wrapperPosts = wrapperRouterProviderForTest(<ErrorPostsList />);
    render(wrapperPosts);
    const { container } = renderWithi18next(wrapperPosts);
    expect(queryByText(container, "Error")).not.toBeInTheDocument();
  });
});
