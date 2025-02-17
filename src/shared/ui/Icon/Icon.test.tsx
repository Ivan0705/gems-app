import { ReactComponent as BurgerMenu } from "@/shared/assets/icons/burger-menu.svg?react";
import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";
import { IconSize } from "./consts";
describe("Icon", () => {
  const argsForTesting = {
    Svg: BurgerMenu,
    size: IconSize.NORMAL,
  };
  test("Test Icon with BurgerMenu", () => {
    render(<Icon {...argsForTesting} />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
