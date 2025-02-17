import { render, screen } from "@testing-library/react";
import { GemCard } from "./GemCard";

describe("GemCard test", () => {
  test("render gemcard", () => {
    const argsTest = {
      className: "Ruby",
      title: "title",
      text: "string",
      avatar: "string",
    };

    render(<GemCard {...argsTest} />);
    expect(screen.getByTestId("gemcard")).toBeInTheDocument();
  });

  test("Should be not displayed", async () => {
    const argsTest = {
      className: "Ruby",
      title: "title",
      text: "string",
      avatar: "string",
    };

    render(<GemCard {...argsTest} />);
    expect(screen.queryByTestId("gemcard2")).not.toBeInTheDocument();
  });
});
