import { render, screen } from "@testing-library/react";
import { SkeletonPosts } from "./SkeletonPosts";

describe("SkeletonPosts", () => {
  test("Test element", () => {
    render(<SkeletonPosts />);
    expect(screen.getByTestId("skeletonposts")).toBeInTheDocument();
  });
});
