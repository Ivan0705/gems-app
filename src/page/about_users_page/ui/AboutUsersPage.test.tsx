import { getByTestId, render } from "@testing-library/react";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";

import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { AboutUsersPage } from "./AboutUsersPage";

describe("AboutUsersPage", () => {
  test("The data-testid 'about_users_page' in the document", () => {
    const wrappedAboutPageUsers = wrapperRouterProviderForTest(
      <AboutUsersPage />,
    );
    const { container } = renderWithi18next(wrappedAboutPageUsers);
    render(wrappedAboutPageUsers);
    expect(getByTestId(container, "about_users_page")).toBeInTheDocument();
  });
});
