import { getByTestId, render } from "@testing-library/react";
import { LoginPage } from "./LoginPage";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";

describe("LoginPage test", async () => {
  it("Render loginPage", () => {
    const wrapperLoginPage = wrapperRouterProviderForTest(<LoginPage />);
    render(wrapperLoginPage);
    const { container } = renderWithi18next(wrapperLoginPage);
    expect(getByTestId(container, "about_login_page")).toBeInTheDocument();
  });
});
