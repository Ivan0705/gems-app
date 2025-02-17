import { footer, footer_title } from "../../consts";
import { footerByTestId } from "../../data-testid";

describe("Footer.cy.ts", () => {
  it("Testing component Footer.tsx", () => {
    cy.visit("/");
    cy.get(footerByTestId).should("exist");
    cy.get("footer").should("exist").and("have.class", footer);
    cy.get("div").eq(40).and("have.class", footer_title);
  });
});
