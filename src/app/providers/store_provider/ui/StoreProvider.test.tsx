import { render, screen } from "@testing-library/react";
import { StoreProvider } from "./StoreProvider";

describe("StoreProvider", () => {
  test("Role `element` wpapped in StoreProvider in the document", () => {
    render(
      <StoreProvider>
        <div role="element">Element</div>
      </StoreProvider>,
    );
    expect(screen.getByRole("element")).toBeInTheDocument();
  });
});
