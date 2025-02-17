import { getByTestId, render } from "@testing-library/react";
import { AboutGemsPage } from "./AboutGemsPage";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("AboutGemsPage", () => {
  test("The data-testid 'about_gems_page' in the document", () => {
    const wrappedAboutPageGems = wrapperRouterProviderForTest(
      <AboutGemsPage />,
    );
    render(wrappedAboutPageGems);
    const { container } = renderWithi18next(wrappedAboutPageGems);
    expect(getByTestId(container, "about_gems_page")).toBeInTheDocument();
  });
});
