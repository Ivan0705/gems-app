import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { getByTestId, render } from "@testing-library/react";
import { DesktopSidebar } from "./DesktopSidebar";

describe("Sidebar: ", () => {
  it("Should be displayed ...", async () => {
    const wrappMobileSidebar = wrapperRouterProviderForTest(<DesktopSidebar />);
    render(wrappMobileSidebar);
    const { container } = renderWithi18next(wrappMobileSidebar);
    expect(getByTestId(container, "desktop-sidebar")).toBeInTheDocument();
  });
});
