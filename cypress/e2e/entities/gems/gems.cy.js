"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cypressTests_1 = require("../../../component/helper/cypressTests");
var gemsConst_1 = require("../../../consts/classes/gemsConst");
var data_testid_1 = require("../../../data-testid");
var rgdColors_1 = require("../../../consts/colors/rgdColors");
var fonts_1 = require("../../../consts/fonts/fonts");
var consts_1 = require("../../../consts");
var url_1 = require("../../url");
describe("Gems.cy.ts", function () {
    it("Testing component AboutGemsPage", function () {
        cy.visit(url_1.main);
        cy.get(data_testid_1.gemCardByTestId)
            .should("exist")
            .and("have.class", gemsConst_1.gemCard)
            .and("have.css", "color", rgdColors_1.primary_text_color_light)
            .and("have.css", "background-color", rgdColors_1.black);
        cy.get("div").eq(19).and("have.class", gemsConst_1.gem_wrapper);
        cy.get("div")
            .eq(35)
            .and("have.class", gemsConst_1.gemCard_wrapper_side)
            .and("have.css", "display", "grid")
            .and("have.css", "align-items", "start")
            .and("have.css", "min-height", "220px")
            .and("have.css", "justify-content", "center")
            .and("have.css", "color", rgdColors_1.primary_text_color_light)
            .and("have.css", "background-color", rgdColors_1.black);
        cy.get("div")
            .eq(36)
            .and("have.class", gemsConst_1.card)
            .and("have.css", "display", "grid")
            .and("have.css", "align-items", "center")
            .and("have.css", "justify-content", "center");
        cy.get("div").eq(36).and("have.not.class", "unknow");
        cy.get("div")
            .eq(38)
            .and("have.class", gemsConst_1.gemCard_text)
            .and("have.css", "margin-left", "12px");
        cy.get("div")
            .eq(38)
            .and("have.not.class")
            .and("have.css", "margin", "0px 0px 0px 12px");
        cy.get("b")
            .eq(0)
            .should("have.class", gemsConst_1.title)
            .and("have.css", "font-size", "20px")
            .and("have.css", "font-family", fonts_1.font_family1)
            .and("have.css", "text-decoration", "underline solid ".concat(rgdColors_1.primary_text_color_light))
            .and("have.css", "align-items", "center")
            .and("have.css", "text-align", "center")
            .and("have.css", "justify-content", "center")
            .and("have.css", "margin-bottom", "10px")
            .and("have.text", "Алмаз");
        (0, cypressTests_1.buttonCypress)(4, rgdColors_1.primary_text_color_light, "0px");
        (0, cypressTests_1.clearButtonCypress)(4, rgdColors_1.primary_text_color_light);
        (0, cypressTests_1.sizeMButtonCypress)(4);
        cy.get("button").should("exist").eq(4).click();
        (0, cypressTests_1.iconCypress)(5, rgdColors_1.black_icon, "65px", "5px", "0px");
        cy.get("svg")
            .should("exist")
            .eq(5)
            //btn class
            .should("have.class", consts_1.btnSidebar)
            .and("have.css", "width", "45px")
            .and("have.css", "height", "65px")
            .and("have.css", "margin-right", "5px")
            //undefined class
            .should("have.class", undefined)
            .click();
    });
});
