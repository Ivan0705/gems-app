import { getByTestId, render } from "@testing-library/react";
import { IsLoadingPostsList } from "./IsLoadingPostsList";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("IsLoadingPostsList", () => {
  const argsForTesting = {
    searchHandleDebounced: () => {},
  };
  test("Test component IsLoadingPostsList", () => {
    const wrappedComponent = wrapperRouterProviderForTest(
      <IsLoadingPostsList {...argsForTesting} />,
    );
    render(wrappedComponent);
    const { container } = renderWithi18next(wrappedComponent);
    expect(getByTestId(container, "isLoadind_posts")).not.toBeNull();
  });
});
