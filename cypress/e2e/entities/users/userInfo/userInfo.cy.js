"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cypressTests_1 = require("../../../../component/helper/cypressTests");
var userInfoById_1 = require("../../../../consts/classes/userInfoById");
var consts_1 = require("../../../../consts");
var rgdColors_1 = require("../../../../consts/colors/rgdColors");
var fonts_1 = require("../../../../consts/fonts/fonts");
var url_1 = require("../../../url");
var data_testid_1 = require("../../../../data-testid");
describe("UserInfo.cy.ts", function () {
    var id = 1;
    it("Testing component UserCard by id=".concat(id), function () {
        cy.visit((0, url_1.userByID)(id));
        cy.get(data_testid_1.userCardByTestId).should("exist");
        var arr = [];
        cy.get("div").each(function ($div) {
            console.log("DIV: ", $div, ", ", arr.push($div) - 1);
        });
        cy.get("div").eq(18).and("have.class", userInfoById_1.userCard);
        cy.get("div")
            .eq(20)
            .and("have.class", userInfoById_1.userCard_avatar)
            .and("have.css", "display", "grid")
            .and("have.css", "margin", "0px 15px 0px 0px")
            .and("have.css", "padding", "0px")
            .and("have.css", "align-items", "normal")
            .and("have.css", "font-size", "25px");
        cy.get("div").should("exist").eq(16).and("have.class", consts_1.page);
        cy.get("div")
            .eq(19)
            .and("have.class", userInfoById_1.user)
            .and("have.css", "display", "flex");
        cy.get("figure")
            .eq(0)
            .and("have.class", userInfoById_1.userCard_avatar)
            .and("have.css", "margin-right", "15px");
        cy.get("div")
            .eq(21)
            .and("have.class", userInfoById_1.userCard_userInfo)
            .and("have.css", "font-family", fonts_1.font_family2);
        cy.get("div")
            .eq(22)
            .and("have.class", userInfoById_1.name)
            .and("have.css", "display", "flex")
            .and("have.css", "justify-content", "space-between")
            .and("have.text", "Имя пользователя:Leanne Graham");
        cy.get("div")
            .eq(27)
            .and("have.class", userInfoById_1.userCard_companyInfo)
            .and("have.css", "margin-top", "15px")
            .and("have.css", "font-family", fonts_1.font_family2);
        (0, cypressTests_1.buttonCypress)(4, rgdColors_1.primary_text_color_light, "6px 15px");
        (0, cypressTests_1.sizeMButtonCypress)(4);
        cy.get("button").should("exist").eq(4).and("have.text", "Назад").click();
    });
});
