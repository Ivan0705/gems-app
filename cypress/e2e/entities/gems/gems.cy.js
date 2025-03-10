"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gemsConst_1 = require("../../../consts/classes/gemsConst");
var data_testid_1 = require("../../../data-testid");
var url_1 = require("../../url");
describe("Gems.cy.ts", function () {
    it("Testing component AboutGemsPage", function () {
        cy.visit(url_1.main);
        cy.get(data_testid_1.gemCardByTestId).should("exist").and("have.class", gemsConst_1.gemCard);
        cy.get("div").eq(25).and("have.class", gemsConst_1.gems_wrapper);
    });
});
