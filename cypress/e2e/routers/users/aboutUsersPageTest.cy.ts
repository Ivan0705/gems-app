import { aboutUsersPageByTestId, userByTestId } from "../../../data-testid";
import { users } from "../../url";

describe("Пользователь заходит на страницу пользователей", () => {
  it("visit to users", () => {
    cy.visit("/login");

    cy.get("[type='email']").type("user@.com{enter}");
    cy.get("[type='password']").type("123{enter}");
    cy.get("div").eq(43).click();

    cy.get("div").eq(13).click({ force: true });

    cy.visit(users);

    cy.get(aboutUsersPageByTestId).should("exist");

    cy.get(userByTestId);
  });
});
