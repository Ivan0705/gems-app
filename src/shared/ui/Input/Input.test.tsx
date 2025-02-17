import { screen, render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";

describe("Input", () => {
  const argsForTest = {
    placeholder: "Type text",
    value: "Hello word!",
    readonly: false,
    onChange: () => {},
  };
  const setup = () => {
    const input = screen.getByLabelText<HTMLInputElement>("const-input");
    return {
      input,
    };
  };
  test("Should be inputed", () => {
    const wrappedInput = wrapperRouterProviderForTest(
      <Input {...argsForTest} />,
    );
    render(wrappedInput);
    const val = argsForTest.value;
    const { input } = setup();
    fireEvent.change(input, { target: { value: val } });
    expect(input.value).toBe("Hello word!");
  });

  test("Should be displayed", () => {
    render(<Input {...argsForTest} />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });
});
