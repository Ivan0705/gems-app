"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_testid_1 = require("../../../data-testid");
var url_1 = require("../../url");
describe("AboutErrorPage.cy.tsx", function () {
  it("Страница не найдена", function () {
    cy.visit(url_1.error);
    cy.get(data_testid_1.notFoundPageByTestId).should("exist");
  });
});
