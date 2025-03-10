import { footer, footer_title } from "../../consts";
import { footerByTestId } from "../../data-testid";

describe("Footer.cy.ts", () => {
  it("Testing component Footer.tsx", () => {
    cy.visit("/");
    cy.get(footerByTestId).should("exist");
    const arr = [];
    cy.get("div").each(($div) => {
      console.log("DIV: ", $div, " INDEX: ", arr.push($div) - 1);
    });
    cy.get("footer").should("exist").and("have.class", footer);
    cy.get("div").eq(46).and("have.class", footer_title);
  });
});
