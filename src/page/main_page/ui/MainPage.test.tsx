import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { MainPage } from "./MainPage";
import { getByTestId, render } from "@testing-library/react";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("MainPage", () => {
  test("Test data-testid='main_page' in the document", () => {
    const wrappedMainPage = wrapperRouterProviderForTest(<MainPage />);
    render(wrappedMainPage);
    const { container } = renderWithi18next(wrappedMainPage);
    expect(getByTestId(container, "main_page")).toBeInTheDocument();
  });
});
