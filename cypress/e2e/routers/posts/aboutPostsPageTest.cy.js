"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_testid_1 = require("../../../data-testid");
var url_1 = require("../../url");
describe("Пользователь заходит на страницу постов", function () {
    it("Testing component AboutPostsPage", function () {
        cy.visit(url_1.posts);
        cy.get(data_testid_1.aboutPostsPageByTestId).should("exist");
        cy.get(data_testid_1.postsByTestId).should("exist");
        cy.get(data_testid_1.postItemByTestId);
    });
});
