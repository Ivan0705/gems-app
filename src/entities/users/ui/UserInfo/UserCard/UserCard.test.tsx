import {
  fireEvent,
  getByTestId,
  queryByTestId,
  render,
  screen,
} from "@testing-library/react";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { vi } from "vitest";
import { UserCard } from "./UserCard";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
describe("UserCard", () => {
  const argsForTest = {
    id: 1,
    name: "Cat",
    username: "Bob",
    email: "cat456@.com",
    address: {
      street: "Mur",
      city: "No",
      suite: "suite",
      zipcode: "zipcode",
      geo: { lat: "geo.lat", lng: "geo.lng" },
    },
    phone: "+9999",
    website: "website",
    company: { name: "Favorite cat", catchPhrase: "catchPhrase", bs: "bs" },
    goToBack: vi.fn(),
    btn_title: "back",
    disabled: false,
  };

  test("Should by displayed", async () => {
    const wrapperUserInfo = wrapperRouterProviderForTest(
      <UserCard {...argsForTest} />,
    );
    render(wrapperUserInfo);
    const { container } = renderWithi18next(wrapperUserInfo);
    expect(getByTestId(container, "user_card")).toBeInTheDocument();
  });
  test("Should by not displayed", async () => {
    const wrapperUserInfo = wrapperRouterProviderForTest(
      <UserCard {...argsForTest} />,
    );
    render(wrapperUserInfo);
    const { container } = renderWithi18next(wrapperUserInfo);
    expect(queryByTestId(container, "user_card1")).not.toBeInTheDocument();
  });

  test("Resolves to UserCard", () => {
    const id = argsForTest.id;
    const name = argsForTest.name;
    const lastName = argsForTest.username;

    expect(id).toBe(1);
    expect(name).toBe("Cat");
    expect(lastName).toBe("Bob");
  });

  test("Click on button 'Back'", () => {
    render(<button onClick={argsForTest.goToBack}>Back</button>);
    fireEvent.click(screen.getByText(/Back/i));
    expect(argsForTest.goToBack).toHaveBeenCalledTimes(1);
  });
});
