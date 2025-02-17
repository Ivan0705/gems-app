"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("../../consts");
var data_testid_1 = require("../../data-testid");
describe("Footer.cy.ts", function () {
  it("Testing component Footer.tsx", function () {
    cy.visit("/");
    cy.get(data_testid_1.footerByTestId).should("exist");
    cy.get("footer").should("exist").and("have.class", consts_1.footer);
    cy.get("div").eq(40).and("have.class", consts_1.footer_title);
  });
});
