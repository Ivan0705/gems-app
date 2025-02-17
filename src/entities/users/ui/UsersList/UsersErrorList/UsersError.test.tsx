import { getByTestId, render } from "@testing-library/react";
import { ErrorUsersList } from "./UsersErrorList";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("UsersErrorList", () => {
  test("Test component UsersErrorList", () => {
    const wrapperError = wrapperRouterProviderForTest(<ErrorUsersList />);
    render(wrapperError);
    const { container } = renderWithi18next(wrapperError);
    expect(getByTestId(container, "text-trans")).toBeDefined();
  });
});
