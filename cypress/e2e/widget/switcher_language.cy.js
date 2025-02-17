"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cypressTests_1 = require("../../component/helper/cypressTests");
var consts_1 = require("../../consts");
var rgdColors_1 = require("../../consts/colors/rgdColors");
var url_1 = require("../url");
describe("Switcher_Language.cy.ts", function () {
  Cypress.on("uncaught:exception", function () {
    return false;
  });
  it("Testing component Switcher_Language", function () {
    cy.visit(url_1.main);
    cy.get('[data-testid="switcher_language"]').should("exist");
    cy.get("div")
      .eq(9)
      .and("have.class", consts_1.switherLanguage_title)
      .and("have.css", "display", "block")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "24px")
      .click({ force: true });
    cy.get("svg")
      .should("exist")
      .eq(2)
      .and("have.class", consts_1.switherLanguage_flag)
      .and("have.css", "height", "50px");
    (0, cypressTests_1.clearButtonCypress)(
      0,
      rgdColors_1.primary_text_color_light,
    );
    (0, cypressTests_1.sizeMButtonCypress)(1);
    cy.get("button")
      .should("exist")
      .eq(1)
      .and("have.class", consts_1.switherLanguage)
      .and("have.css", "display", "grid")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px")
      .click();
  });
});
