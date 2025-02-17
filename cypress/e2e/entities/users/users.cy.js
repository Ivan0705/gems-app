"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("../../../consts");
var url_1 = require("../../url");
describe("Users.cy.ts", function () {
  it("Testing component Users", function () {
    cy.visit(url_1.users);
    cy.get("div")
      .eq(16)
      .should(
        "have.text",
        " Поиск>Leanne GrahamЧитать далееErvin HowellЧитать далееClementine BauchЧитать далееPatricia LebsackЧитать далееChelsey DietrichЧитать далееMrs. Dennis SchulistЧитать далееKurtis WeissnatЧитать далееNicholas Runolfsdottir VЧитать далееGlenna ReichertЧитать далееClementina DuBuqueЧитать далее",
      );
    cy.get("div")
      .eq(20)
      .should("exist")
      .and("have.class", consts_1.InputWrapper);
    cy.get("div")
      .eq(21)
      .should("exist")
      .and("have.class", consts_1.placeholder);
    cy.get("div")
      .eq(22)
      .should("exist")
      .and("have.class", consts_1.caretWrapper);
  });
  it("Inputing text in page about users", function () {
    cy.visit(url_1.users);
    cy.get("div")
      .eq(21)
      .should("exist")
      .and("have.class", consts_1.placeholder)
      .contains("Поиск");
    cy.get("input").eq(0).should("exist").type("Leanne Graham").type("{enter}");
  });
});
