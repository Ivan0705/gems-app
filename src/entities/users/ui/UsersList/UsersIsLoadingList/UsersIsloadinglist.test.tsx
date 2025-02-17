import { getByTestId, render } from "@testing-library/react";
import { UsersIsLoadingList } from "./UsersIsLoading";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("UsersIsLoadingList", () => {
  const argsForTest = { search: "string", searchHandle: () => {} };
  test("Test component UsersIsLoadingList", () => {
    const wrappedComponent = wrapperRouterProviderForTest(
      <UsersIsLoadingList {...argsForTest} />,
    );
    render(wrappedComponent);
    const { container } = renderWithi18next(wrappedComponent);
    expect(getByTestId(container, "users_isLoading")).not.toBeNull();
    expect(getByTestId(container, "users_isLoading")).toBeInTheDocument();
  });
});
