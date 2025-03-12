"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_testid_1 = require("../../../data-testid");
var url_1 = require("../../url");
describe("Пользователь заходит на страницу пользователя", function () {
    var id = 1;
    it("Testing component UserInfo by id=".concat(id), function () {
        cy.visit("/login");
        cy.get("[type='email']").type("user@.com{enter}");
        cy.get("[type='password']").type("123{enter}");
        cy.get("div").eq(43).click();
        cy.get("div").eq(13).click({ force: true });
        cy.visit((0, url_1.userByID)(id));
        cy.get(data_testid_1.aboutUser_IDPageByTestId).should("exist");
        cy.get(data_testid_1.userInfoByTestId).should("exist");
        cy.get(data_testid_1.userCardByTestId).should("exist");
    });
});
