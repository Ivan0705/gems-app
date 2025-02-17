import { aboutUsersPageByTestId, userByTestId } from "../../../data-testid";
import { users } from "../../url";

describe("Пользователь заходит на страницу пользователей", () => {
  it("visit to users", () => {
    cy.visit(users);

    cy.get(aboutUsersPageByTestId).should("exist");

    cy.get(userByTestId);
  });
});
