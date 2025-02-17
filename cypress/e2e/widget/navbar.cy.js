"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cypressTests_1 = require("../../component/helper/cypressTests");
var consts_1 = require("../../consts");
var rgdColors_1 = require("../../consts/colors/rgdColors");
var url_1 = require("../url");
describe("Navbar.cy.ts", function () {
  Cypress.on("uncaught:exception", function () {
    return false;
  });
  it("Testing component Navbar", function () {
    cy.visit(url_1.main);
    cy.get('[data-testid="navbar"]')
      .should("exist")
      .and("have.not.class")
      .and("have.css", "background-color", rgdColors_1.black);
    (0, cypressTests_1.iconCypress)(0, rgdColors_1.black_icon);
    cy.get("svg")
      .eq(0)
      .should("exist")
      .and("have.class", consts_1.navbar_logoPicture);
    cy.get("h4").eq(0).should("exist").and("have.text", "Gems");
    cy.get("div")
      .eq(4)
      .and("have.class", consts_1.navbar_logo)
      .and("have.css", "margin-left", "3px")
      .and("have.css", "display", "flex")
      .and("have.css", "font-size", "45px")
      .and("have.css", "justify-content", "center")
      .and("have.css", "align-items", "center");
    cy.get("div")
      .eq(5)
      .and("have.class", consts_1.navbar_btns)
      .and("have.css", "margin-right", "12px")
      .and("have.css", "display", "flex")
      .and("have.css", "justify-content", "center")
      .and("have.css", "align-items", "center");
    cy.get("div")
      .eq(6)
      .and("have.class", consts_1.btn)
      .and("have.css", "margin-left", "20px")
      .and("have.css", "text-align", "center")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px");
    cy.get("div")
      .eq(7)
      .and("have.class", consts_1.btn)
      .and("have.css", "margin-left", "20px")
      .and("have.css", "text-align", "center")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px");
    cy.get("div").eq(7).and("have.not.class", "unknow");
    cy.get("div").eq(9).and("have.not.class");
    (0, cypressTests_1.buttonCypress)(
      0,
      rgdColors_1.primary_text_color_light,
      "0px",
    );
    (0, cypressTests_1.clearButtonCypress)(
      0,
      rgdColors_1.primary_text_color_light,
    );
    (0, cypressTests_1.sizeMButtonCypress)(0);
    cy.get("button").eq(0).should("exist").click();
    (0, cypressTests_1.buttonCypress)(
      1,
      rgdColors_1.primary_text_color_dark,
      "0px",
    );
    (0, cypressTests_1.clearButtonCypress)(
      1,
      rgdColors_1.primary_text_color_dark,
    );
    (0, cypressTests_1.sizeMButtonCypress)(1);
    cy.get("button")
      .eq(1)
      .should("exist")
      .and("have.class", consts_1.switherLanguage)
      .and("have.css", "display", "grid")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px")
      .click();
    (0, cypressTests_1.buttonCypress)(
      2,
      rgdColors_1.primary_text_color_dark,
      "0px",
    );
    (0, cypressTests_1.clearButtonCypress)(
      2,
      rgdColors_1.primary_text_color_dark,
    );
    cy.get("button")
      .eq(2)
      .should("exist")
      .and("have.class", consts_1.gearBtn)
      .and("have.css", "width", "40px")
      .and("have.css", "height", "47px");
    (0, cypressTests_1.buttonCypress)(
      3,
      rgdColors_1.primary_text_color_dark,
      "0px",
    );
    (0, cypressTests_1.clearButtonCypress)(
      3,
      rgdColors_1.primary_text_color_dark,
    );
    (0, cypressTests_1.sizeMButtonCypress)(3);
    cy.get("button")
      .eq(3)
      .should("exist")
      .and("have.class", consts_1.burgerBtn)
      .and("have.css", "width", "40px")
      .and("have.css", "height", "47px");
  });
});
