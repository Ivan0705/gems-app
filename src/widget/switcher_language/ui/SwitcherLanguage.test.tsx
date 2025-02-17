import { SwitcherLanguage } from "./SwitcherLanguage";
import { getByTestId, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

const wrappApp = wrapperRouterProviderForTest(<SwitcherLanguage />);
describe("Switchelanguage", () => {
  test("Render winth i18next", () => {
    render(<SwitcherLanguage />);
    const { container } = renderWithi18next(wrappApp);
    expect(getByTestId(container, "switcher_language")).toHaveTextContent(
      "language",
    );
  });
  test("click on flag button ", () => {
    render(<SwitcherLanguage />);
    userEvent.click(screen.getByTestId("switcher_language"));
    expect(screen.getByTestId("switcher_language")).toBeInTheDocument();
  });
});
