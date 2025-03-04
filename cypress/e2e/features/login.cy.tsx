import { login } from "../url";

describe("Login component", () => {
  it("Entering email & password", () => {
    cy.visit(login);

    cy.get("[type='email']").type("user@.com{enter}");
    cy.get("[type='password']").type("123{enter}");
    cy.get("div").eq(43).click();
  });
});
