import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { ButtonTheme } from "./consts/enums";

describe("Button", () => {
  test("Test render", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText("TEST")).toBeInTheDocument();
  });

  test("Test clear theme", () => {
    render(
      <Button theme={ButtonTheme.CLEAR} className="clear">
        TEST_CLEAR
      </Button>,
    );
    expect(screen.getByText("TEST_CLEAR")).toHaveClass("clear");
  });

  test("Should be displayed", () => {
    render(<Button>TEST</Button>);
    expect(screen.getByTestId("button")).toBeInTheDocument();
  });
});
