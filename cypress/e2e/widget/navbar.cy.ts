import { sizeMButtonCypress } from "../../component/helper/cypressTests";
import { btn, switherLanguage } from "../../consts";
import { black } from "../../consts/colors/rgdColors";
import { main } from "../url";

describe("Navbar.cy.ts", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  it("Testing component Navbar", () => {
    cy.visit(main);

    cy.get('[data-testid="navbar"]')
      .should("exist")
      .and("have.not.class")
      .and("have.css", "background-color", black);

    cy.get("h4").eq(0).should("exist").and("have.text", "Gems");

    cy.get("div")
      .eq(6)
      .and("have.class", btn)
      .and("have.css", "margin-left", "20px")
      .and("have.css", "text-align", "center")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px");

    cy.get("div")
      .eq(7)
      .and("have.class", btn)
      .and("have.css", "margin-left", "20px")
      .and("have.css", "text-align", "center")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px");
    cy.get("div").eq(7).and("have.not.class", "unknow");

    cy.get("div").eq(9).and("have.not.class");

    sizeMButtonCypress(0);

    cy.get("button").eq(0).should("exist").click();

    sizeMButtonCypress(1);

    cy.get("button")
      .eq(1)
      .should("exist")
      .and("have.class", switherLanguage)
      .and("have.css", "display", "grid")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px")
      .click();

    sizeMButtonCypress(3);
  });
});
