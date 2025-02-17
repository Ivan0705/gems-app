import { render, screen } from "@testing-library/react";
import { SkeletonUserInfo } from "./SkeletonUserInfo";

describe("SkeletonUserInfo", () => {
  test("Shoulb be displayed", () => {
    render(<SkeletonUserInfo />);
    expect(screen.getByTestId("skeleton_user_info")).toBeInTheDocument();
  });

  test("Shoulb be not displayed", () => {
    render(<SkeletonUserInfo />);
    expect(screen.queryByTestId("skeleton_user_info2")).not.toBeInTheDocument();
  });
});
