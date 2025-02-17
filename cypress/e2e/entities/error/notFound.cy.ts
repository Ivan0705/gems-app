import { font_family_main } from "../../../consts/fonts/fonts";
import { notFoundPage } from "../../../consts";
import { error } from "../../../e2e/url";
import { notFoundPageByTestId } from "../../../data-testid";

describe("NotFound", () => {
  it("Testing component NotFoundPage", () => {
    cy.visit(error);

    cy.get(notFoundPageByTestId).should("exist");

    cy.get("div", { timeout: 10000 })
      .eq(16)
      .and("have.class", notFoundPage)
      .and("have.css", "margin", "15px")
      .and("have.css", "font-size", "25px")
      .and("have.css", "font-family", font_family_main)
      .contains("Страница не найдена 404");
  });
});
