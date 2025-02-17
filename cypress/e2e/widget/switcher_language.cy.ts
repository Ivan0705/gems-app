import {
  clearButtonCypress,
  sizeMButtonCypress,
} from "../../component/helper/cypressTests";
import {
  switherLanguage,
  switherLanguage_flag,
  switherLanguage_title,
} from "../../consts";
import { primary_text_color_light } from "../../consts/colors/rgdColors";
import { main } from "../url";

describe("Switcher_Language.cy.ts", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  it("Testing component Switcher_Language", () => {
    cy.visit(main);

    cy.get('[data-testid="switcher_language"]').should("exist");

    cy.get("div")
      .eq(9)
      .and("have.class", switherLanguage_title)
      .and("have.css", "display", "block")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "24px")
      .click({ force: true });

    cy.get("svg")
      .should("exist")
      .eq(2)
      .and("have.class", switherLanguage_flag)
      .and("have.css", "height", "50px");

    clearButtonCypress(0, primary_text_color_light);

    sizeMButtonCypress(1);
    cy.get("button")
      .should("exist")
      .eq(1)
      .and("have.class", switherLanguage)
      .and("have.css", "display", "grid")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px")
      .click();
  });
});
