import { Gems } from "@/entities/gems";
import { Page } from "./Page";
import { getByTestId, render } from "@testing-library/react";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("Page", () => {
  const argsFortesting = {
    children: <Gems />,
    className: "page",
  };
  test("Should be displayed", () => {
    const newPage = <Page {...argsFortesting} />;
    const wrappedPageComponent = wrapperRouterProviderForTest(newPage);
    render(wrappedPageComponent);
    const { container } = renderWithi18next(wrappedPageComponent);
    expect(getByTestId(container, "page")).toBeInTheDocument();
  });
});
