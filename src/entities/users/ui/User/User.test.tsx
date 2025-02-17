import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { User } from "./User";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { vi } from "vitest";

describe("User", () => {
  const argsForTest = {
    user: { id: 1, name: "Ivan Cherry" },
    openUser: vi.fn(),
  };
  test("Test element User", async () => {
    const wrapperUser = wrapperRouterProviderForTest(<User {...argsForTest} />);
    render(wrapperUser);
    const { container } = renderWithi18next(wrapperUser);
    expect(getByTestId(container, "user")).toBeInTheDocument();
    expect(getByTestId(container, "user")).toHaveTextContent("read more");
  });

  test("Test params", () => {
    const id = argsForTest.user.id;
    const name = argsForTest.user.name;

    expect(id).toBe(1);
    expect(name).toBe("Ivan Cherry");
  });

  test("Click on button 'Open Me'", () => {
    render(<button onClick={argsForTest.openUser}>Open Me</button>);
    fireEvent.click(screen.getByText(/Open Me/i));
    expect(argsForTest.openUser).toHaveBeenCalledTimes(1);
  });
});
