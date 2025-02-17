"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersConsts_1 = require("../../../../consts/classes/usersConsts");
var cypressTests_1 = require("../../../../component/helper/cypressTests");
var rgdColors_1 = require("../../../../consts/colors/rgdColors");
var url_1 = require("../../../url");
var data_testid_1 = require("../../../../data-testid");
describe("User.cy.ts", function () {
  it("Testing component User", function () {
    cy.visit(url_1.users);
    cy.get(data_testid_1.userByTestId)
      .should("exist")
      .and("have.class", usersConsts_1.user)
      .and("have.css", "font-size", "20px")
      .and(
        "have.css",
        "text-decoration",
        "underline solid ".concat(rgdColors_1.primary_text_color_light),
      )
      .and("have.css", "margin", "6px 0px 0px")
      .and("have.css", "color", rgdColors_1.primary_text_color_light);
    cy.get("div")
      .eq(25)
      .should("have.class", usersConsts_1.user_title)
      .and("have.css", "margin", "10px 0px 0px")
      .and("have.text", "Leanne Graham");
    (0, cypressTests_1.buttonCypress)(
      4,
      rgdColors_1.primary_text_color_light,
      "6px 15px",
    );
    (0, cypressTests_1.sizeMButtonCypress)(4);
    cy.get("button")
      .eq(4)
      .should("exist")
      .and("have.text", "Читать далее")
      .click({ force: true });
  });
});
