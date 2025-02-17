"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_testid_1 = require("../../../data-testid");
var url_1 = require("../../url");
describe("Пользователь заходит на страницу пользователя", function () {
  var id = 1;
  it("Testing component UserInfo by id=".concat(id), function () {
    cy.visit((0, url_1.userByID)(id));
    cy.get(data_testid_1.aboutUser_IDPageByTestId).should("exist");
    cy.get(data_testid_1.userInfoByTestId).should("exist");
    cy.get(data_testid_1.userCardByTestId).should("exist");
  });
});
