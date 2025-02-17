import { notFoundPageByTestId } from "../../../data-testid";
import { error } from "../../url";

describe("AboutErrorPage.cy.tsx", () => {
  it("Страница не найдена", () => {
    cy.visit(error);

    cy.get(notFoundPageByTestId).should("exist");
  });
});
