"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_testid_1 = require("../../../data-testid");
var url_1 = require("../../url");
describe("Пользователь заходит на страницу пользователей", function () {
    it("visit to users", function () {
        cy.visit(url_1.users);
        cy.get(data_testid_1.aboutUsersPageByTestId).should("exist");
        cy.get(data_testid_1.userByTestId);
    });
});
