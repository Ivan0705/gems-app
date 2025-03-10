"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("../../../consts");
var url_1 = require("../../url");
describe("Inputing text in page about users", function () {
    it("Testing component Users", function () {
        cy.visit(url_1.login);
        cy.get("[type='email']").type("user@.com{enter}");
        cy.get("[type='password']").type("123{enter}");
        cy.get("div").eq(43).click();
        cy.get("div").eq(13).click({ force: true });
        cy.visit(url_1.users);
        cy.get("div")
            .eq(25)
            .should("have.text", " Поиск>Leanne GrahamЧитать далее...Ervin HowellЧитать далее...Clementine BauchЧитать далее...Patricia LebsackЧитать далее...Chelsey DietrichЧитать далее...Mrs. Dennis SchulistЧитать далее...Kurtis WeissnatЧитать далее...Nicholas Runolfsdottir VЧитать далее...Glenna ReichertЧитать далее...Clementina DuBuqueЧитать далее...");
        cy.get("div").eq(29).should("exist").and("have.class", consts_1.InputWrapper);
        cy.get("div").eq(30).should("exist").and("have.class", consts_1.placeholder);
        cy.get("div").eq(31).should("exist").and("have.class", consts_1.caretWrapper);
        cy.get("div")
            .eq(30)
            .should("exist")
            .and("have.class", consts_1.placeholder)
            .contains("Поиск");
        cy.get("input").eq(0).should("exist").type("Leanne Graham{enter}");
    });
});
