import {
  aboutUser_IDPageByTestId,
  userCardByTestId,
  userInfoByTestId,
} from "../../../data-testid";
import { userByID } from "../../url";

describe("Пользователь заходит на страницу пользователя", () => {
  const id = 1;

  it(`Testing component UserInfo by id=${id}`, () => {
    cy.visit("/login");

    cy.get("[type='email']").type("user@.com{enter}");
    cy.get("[type='password']").type("123{enter}");
    cy.get("div").eq(43).click();

    cy.get("div").eq(13).click({ force: true });
    cy.visit(userByID(id));

    cy.get(aboutUser_IDPageByTestId).should("exist");

    cy.get(userInfoByTestId).should("exist");

    cy.get(userCardByTestId).should("exist");
  });
});
