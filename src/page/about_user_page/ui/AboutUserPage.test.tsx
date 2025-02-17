import { getByTestId, render } from "@testing-library/react";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { AboutUserPage } from "./AboutUserPage";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("AboutUserPage", () => {
  test("The data-testid 'about_user_page' in the document", () => {
    const wrappedAboutPageUser = wrapperRouterProviderForTest(
      <AboutUserPage />,
    );
    render(wrappedAboutPageUser);
    const { container } = renderWithi18next(wrappedAboutPageUser);
    expect(getByTestId(container, "about_user_page")).toBeInTheDocument();
  });
});
