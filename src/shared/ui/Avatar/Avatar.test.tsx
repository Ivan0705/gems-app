import { render, screen } from "@testing-library/react";
import { Avatar } from "./Avatar";
import AvatarImg from "./picture/storybook.jpg";
describe("Avatar", () => {
  const argsForTest = {
    src: AvatarImg,
    size: 50,
  };
  test("Resolves to avatar", () => {
    render(<Avatar {...argsForTest} />);
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
  });
});
