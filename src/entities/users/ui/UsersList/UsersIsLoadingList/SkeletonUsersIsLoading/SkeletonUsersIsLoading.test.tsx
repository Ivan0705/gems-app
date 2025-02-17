import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { SkeletonUsertsIsloading } from "./SkeletonUsersIsLoading";
import { render, screen } from "@testing-library/react";

describe("SkeletonUsertsIsloading", () => {
  test("Test component SkeletonUsertsIsloading", () => {
    const wrapperUserInfo = wrapperRouterProviderForTest(
      <SkeletonUsertsIsloading />,
    );
    render(wrapperUserInfo);
    expect(screen.getByTestId("skeleton_users_isLoading")).toBeInTheDocument();
  });
});
