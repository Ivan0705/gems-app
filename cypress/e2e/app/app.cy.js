"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("../../consts");
var data_testid_1 = require("../../data-testid");
var url_1 = require("../url");
describe("App.cy.ts", function () {
    Cypress.on("uncaught:exception", function () {
        return false;
    });
    it("Testing component App", function () {
        cy.visit(url_1.main);
        cy.get(data_testid_1.appByTestId).should("exist");
        /*Main */
        cy.get("div").eq(0).and("have.id", consts_1.root);
        cy.get("div").eq(1).and("have.class", consts_1.app);
        cy.get("div").eq(2).and("have.not.class");
    });
});
