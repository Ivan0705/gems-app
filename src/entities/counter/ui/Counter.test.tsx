import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";

describe("Counter", () => {
  test("To be not null value in component <Counter/>", () => {
    const initialState = { value: 10 };
    expect(initialState).not.toBeNull();
  });

  test("To be in the DOM in component <Counter/>", () => {
    const wrappedCounter = wrapperRouterProviderForTest(<Counter />);
    render(wrappedCounter);
    expect(screen.getByTestId("counter")).toBeInTheDocument();
  });

  test("To have `+` and `-` in component <Counter/>", () => {
    const wrappedCounter = wrapperRouterProviderForTest(<Counter />);
    render(wrappedCounter);
    expect(screen.getByTestId("counter")).toHaveTextContent("+");
    expect(screen.getByTestId("counter")).toHaveTextContent("-");
  });

  test("To equal className `counter` and display=`flex` in component <Counter/>", () => {
    const wrappedCounter = wrapperRouterProviderForTest(<Counter />);
    render(wrappedCounter);
    expect(screen.getByTestId("counter").className).toEqual("_counter_ff11dd");
    expect(getComputedStyle(screen.getByTestId("counter")).display).toEqual(
      "grid",
    );
  });
});
