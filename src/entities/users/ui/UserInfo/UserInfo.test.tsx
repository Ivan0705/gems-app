import { getByTestId, render } from "@testing-library/react";
import { UserInfo } from "./UserInfo";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";

describe("UserInfo", () => {
  test("Should be displayed", () => {
    const wrapperUserInfo = wrapperRouterProviderForTest(<UserInfo />);
    render(wrapperUserInfo);
    const { container } = renderWithi18next(wrapperUserInfo);
    expect(getByTestId(container, "user_info")).toBeInTheDocument();
  });
});
