import { MobileSidebar } from "./MobileSidebar";
import { getByTestId, render } from "@testing-library/react";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
describe("MobileSidebar: ", () => {
  it("Should be displayed ...", async () => {
    const argsTest = {
      show: true,
      onClose: () => {},
    };
    const wrappMobileSidebar = wrapperRouterProviderForTest(
      <MobileSidebar {...argsTest} />,
    );
    render(wrappMobileSidebar);
    const { container } = renderWithi18next(wrappMobileSidebar);
    expect(getByTestId(container, "mobile-sidebar")).toBeInTheDocument();
  });
});
