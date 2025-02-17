"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("../../consts");
var rgdColors_1 = require("../../consts/colors/rgdColors");
var url_1 = require("../url");
describe("Sidebar.cy.ts", function () {
    it("Testing component Sidebar", function () {
        cy.visit(url_1.main);
        cy.get('[data-testid="desktop-sidebar"]')
            .should("exist")
            .and("have.css", "display", "block")
            .and("have.css", "height", "50px")
            .and("have.css", "color", rgdColors_1.primary_color_light);
        cy.get("div")
            .eq(11)
            .and("have.class", consts_1.sidebar_menu)
            .and("have.css", "background-color", rgdColors_1.inverted_primary_color_light)
            .and("have.css", "display", "flex")
            .and("have.css", "height", "50px")
            .and("have.css", "width", "1000px")
            .and("have.css", "min-width", "0px")
            .and("have.css", "flex-direction", "row")
            .and("have.css", "color", rgdColors_1.primary_color_light);
        cy.get("div")
            .eq(13)
            .and("have.class", consts_1.sidebar_menu_item)
            .and("have.css", "height", "50px")
            .click({ force: true })
            .and("have.css", "background-color", rgdColors_1.black)
            .and("have.css", "border-radius", "10px")
            .trigger("active")
            .and("have.css", "color", rgdColors_1.primary_color_light)
            .and("have.css", "text-decoration", "none solid ".concat(rgdColors_1.primary_color_light))
            .and("have.text", "Главная");
        cy.get("div")
            .eq(14)
            .and("have.class", consts_1.sidebar_menu_item)
            .and("have.css", "height", "50px")
            .click()
            .and("have.css", "background-color", rgdColors_1.black)
            .and("have.css", "border-radius", "10px")
            .trigger("active")
            .and("have.css", "color", rgdColors_1.primary_color_light)
            .and("have.css", "text-decoration", "none solid ".concat(rgdColors_1.primary_color_light))
            .and("have.text", "Пользователи");
        cy.get("div")
            .eq(15)
            .and("have.class", consts_1.sidebar_menu_item)
            .click()
            .trigger("hover")
            .trigger("active")
            .and("have.text", "Посты");
        cy.get("div").eq(16).and("have.class", consts_1.page);
        cy.get("div").eq(17).and("have.not.class");
        cy.get("div").eq(18).and("have.not.class", consts_1.switch_h);
    });
});
