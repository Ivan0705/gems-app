import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { NotFoundPage } from "./NotFoundPage";
import { getByTestId, render } from "@testing-library/react";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("NotFoundPage", () => {
  test("Test data-testid='not_found_page' in the document", () => {
    const wrappedNotFoundPage = wrapperRouterProviderForTest(<NotFoundPage />);
    render(wrappedNotFoundPage);
    const { container } = renderWithi18next(wrappedNotFoundPage);
    expect(getByTestId(container, "not_found_page")).toBeInTheDocument();
  });
});
