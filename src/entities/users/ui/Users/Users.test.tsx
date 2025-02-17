import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { Users } from "./Users";
import { getByTestId, render } from "@testing-library/react";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("Users", () => {
  test("Resolves to Users", () => {
    const wrappedUsers = wrapperRouterProviderForTest(<Users />);
    render(wrappedUsers);
    const { container } = renderWithi18next(wrappedUsers);
    expect(getByTestId(container, "users")).toBeInTheDocument();
  });
});
