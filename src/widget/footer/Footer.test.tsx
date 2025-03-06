import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer.test.tsx", () => {
  test("Footer in the document", () => {
    render(<Footer />);
    expect("Gems").toContain("Gems");
    expect("Gems").toBe("Gems");
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
