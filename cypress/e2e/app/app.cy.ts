import { app, root } from "../../consts";
import { appByTestId } from "../../data-testid";
import { main } from "../url";

describe("App.cy.ts", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  it("Testing component App", () => {
    cy.visit(main);
    cy.get(appByTestId).should("exist");

    /*Main */
    cy.get("div").eq(0).and("have.id", root);
    cy.get("div").eq(1).and("have.class", app);
    cy.get("div").eq(2).and("have.not.class");
  });
});
