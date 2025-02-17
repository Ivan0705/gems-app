"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_testid_1 = require("../../../data-testid");
var url_1 = require("../../url");
describe("Пользователь заходит на главную страницу приложения Gems", function () {
    it("Testing component App", function () {
        cy.visit(url_1.main);
        cy.get(data_testid_1.desktopSidebarByTestId).should("exist");
        cy.get(data_testid_1.switcher_languageByTestId).should("exist");
        cy.get(data_testid_1.navbarByTestId).should("exist");
        cy.get(data_testid_1.gemsByTestId).should("exist");
    });
});
