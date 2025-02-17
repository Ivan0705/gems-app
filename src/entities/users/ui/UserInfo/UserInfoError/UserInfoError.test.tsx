import { render, screen } from "@testing-library/react";
import { UserInfoError } from "./UserIfoError";

describe("UserInfoError.test.tsx", () => {
  test("UserInfoError in the document", () => {
    render(<UserInfoError />);
    expect(screen.getByTestId("userInfoError")).toBeInTheDocument();
    expect(screen.getByTestId("userInfoError")).toHaveTextContent("error");
  });
});
