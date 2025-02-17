import { render, screen } from "@testing-library/react";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  const argsForTest = {
    border: "50%",
    width: 200,
    height: 200,
  };
  test("Shold be displayed", () => {
    render(<Skeleton {...argsForTest} />);
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });
});
