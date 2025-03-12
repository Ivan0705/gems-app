"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_testid_1 = require("../../../data-testid");
var url_1 = require("../../url");
describe("Пользователь заходит на страницу постов", function () {
    it("Testing component AboutPostsPage", function () {
        cy.visit("/login");
        cy.get("[type='email']").type("user@.com{enter}");
        cy.get("[type='password']").type("123{enter}");
        cy.get("div").eq(43).click();
        cy.get("div").eq(14).click({ force: true });
        cy.visit(url_1.posts);
        cy.get(data_testid_1.aboutPostsPageByTestId).should("exist");
        cy.get(data_testid_1.postsByTestId).should("exist");
        cy.get(data_testid_1.postItemByTestId);
    });
});
