import { getByTestId, render, screen } from "@testing-library/react";
import { Gems } from "./Gems";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { arrayGems } from "../consts/arrayGems";

describe("Gems test", () => {
  test("should be not text='title' in component <Gems/>", () => {
    render(<Gems />);
    expect(screen.queryByText("title")).not.toBeInTheDocument();
  });

  test("should be displayed", () => {
    render(<Gems />);
    const { container } = renderWithi18next(<Gems />);
    expect(getByTestId(container, "gems")).toBeInTheDocument();
  });

  test("The gems list contains ruby", () => {
    const gems_text = arrayGems.map((el) => el.text);
    expect(gems_text).toContain("ruby");
    expect(gems_text).toContainEqual("ruby");
  });
});
