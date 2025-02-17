import { getByTestId, render } from "@testing-library/react";

import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { AboutPostsPage } from "./AboutPostsPage";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("AboutPostsPage", () => {
  test("The data-testid 'about_posts_page' in the document", () => {
    const wrappedAboutPagePosts = wrapperRouterProviderForTest(
      <AboutPostsPage />,
    );
    const { container } = renderWithi18next(wrappedAboutPagePosts);
    render(wrappedAboutPagePosts);
    expect(getByTestId(container, "about_posts_page")).toBeInTheDocument();
  });
});
