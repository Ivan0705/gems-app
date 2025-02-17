"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("../../../consts");
var data_testid_1 = require("../../../data-testid");
var url_1 = require("../../url");
describe("Posts.cy.ts", function () {
    it("Test component Posts", function () {
        cy.visit(url_1.posts);
        cy.get(data_testid_1.postsByTestId).should("exist");
        cy.get("div").eq(16).should("exist").and("have.class", consts_1.page);
        cy.get("div").eq(17).should("exist").and("have.not.class");
        cy.get("div").eq(20).should("exist").and("have.class", consts_1.InputWrapper);
        cy.get("div").eq(21).should("exist").and("have.class", consts_1.placeholder);
        cy.get("div").eq(22).should("exist").and("have.class", consts_1.caretWrapper);
    });
    it("Testing component IsLoadingPostsList", function () {
        cy.visit(url_1.posts);
        cy.get("div")
            .eq(22)
            .should("exist")
            .and("have.not.class")
            .and("have.css", "margin-top", "0px");
        cy.get("div")
            .eq(23)
            .should("exist")
            .and("have.css", "border-radius", "0px");
        cy.get("div").eq(24).should("exist").and("have.css", "margin-top", "0px");
        cy.get("div")
            .eq(25)
            .should("exist")
            .and("have.css", "border-radius", "0px");
    });
    it("Inputing text in page about posts", function () {
        cy.visit(url_1.posts);
        cy.get("div")
            .eq(21)
            .should("exist")
            .and("have.class", consts_1.placeholder)
            .contains("Поиск");
        cy.get("input")
            .should("exist")
            .type("sunt aut facere repellat provident occaecati excepturi optio reprehenderit")
            .type("{enter}");
    });
});
