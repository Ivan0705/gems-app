import { getByTestId, render } from "@testing-library/react";
import { Loader } from "./Loader";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("Loader", () => {
  test("Should be displayed", () => {
    const wrappedComponentLoader = wrapperRouterProviderForTest(<Loader />);
    render(wrappedComponentLoader);
    const { container } = renderWithi18next(wrappedComponentLoader);
    expect(getByTestId(container, "loader")).not.toBeNull();
    expect(getByTestId(container, "loader")).toBeInTheDocument();
  });
});
