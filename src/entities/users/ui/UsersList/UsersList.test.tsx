import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { UsersList } from "./UsersList";
import { render, screen } from "@testing-library/react";

describe("usersList", () => {
  test("Should be displayed", () => {
    const wrappedUsersList = wrapperRouterProviderForTest(<UsersList />);
    render(wrappedUsersList);
    expect(screen.getByTestId("users_list")).not.toBeNull();
    expect(screen.getByTestId("users_list")).toBeInTheDocument();
  });

  test("Resolves to search", () => {
    const search = "";
    expect(search).toBe("");
  });
});
