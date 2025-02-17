"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fonts_1 = require("../../../consts/fonts/fonts");
var consts_1 = require("../../../consts");
var url_1 = require("../../../e2e/url");
var data_testid_1 = require("../../../data-testid");
describe("NotFound", function () {
    it("Testing component NotFoundPage", function () {
        cy.visit(url_1.error);
        cy.get(data_testid_1.notFoundPageByTestId).should("exist");
        cy.get("div", { timeout: 10000 })
            .eq(16)
            .and("have.class", consts_1.notFoundPage)
            .and("have.css", "margin", "15px")
            .and("have.css", "font-size", "25px")
            .and("have.css", "font-family", fonts_1.font_family_main)
            .contains("Страница не найдена 404");
    });
});
