import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { ErrorPage } from "./ErrorPage";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { getByTestId } from "@testing-library/react";

describe("ErrorPage test", () => {
  test("Should be displayed", () => {
    const wrappedErrorPage = wrapperRouterProviderForTest(<ErrorPage />);
    const { container } = renderWithi18next(wrappedErrorPage);
    expect(getByTestId(container, "error_page")).toBeInTheDocument();
  });
});
