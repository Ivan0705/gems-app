import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";

describe("Navbar", () => {
  test("Text Gems", () => {
    const wrappNavbar = wrapperRouterProviderForTest(<Navbar />);
    render(wrappNavbar);
    expect(screen.getByText("Gems")).toBeInTheDocument();
  });
  test("Logo diamond", () => {
    const wrappNavbar = wrapperRouterProviderForTest(<Navbar />);
    render(wrappNavbar);
    const { container } = renderWithi18next(wrappNavbar);
    expect(getByTestId(container, "diamond")).toBeInTheDocument();
  });
  test("Render <h4>Gems</h4>", () => {
    const wrappApp = wrapperRouterProviderForTest(<Navbar />);
    render(wrappApp);
    expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent("Gems");
  });

  test("Click on button 'ThemeSwitcher'", () => {
    const wrappNavbar = wrapperRouterProviderForTest(<Navbar />);
    const handleClick = vi.fn();
    render(wrappNavbar);
    fireEvent.click(screen.getByRole("theme_switcher"));
    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(screen.getByRole("theme_switcher").className).toEqual("_btn_3150d2");
  });
});
