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
        cy.get("h4").eq(0).should("exist").and("have.text", "Gems");
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
        (0, cypressTests_1.sizeMButtonCypress)(0);
        cy.get("button").eq(0).should("exist").click();
        (0, cypressTests_1.sizeMButtonCypress)(1);
        cy.get("button")
            .eq(1)
            .should("exist")
            .and("have.class", consts_1.switherLanguage)
            .and("have.css", "display", "grid")
            .and("have.css", "width", "75px")
            .and("have.css", "height", "75px")
            .click();
        (0, cypressTests_1.sizeMButtonCypress)(3);
    });
});
