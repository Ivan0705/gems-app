import {
  aboutPostsPageByTestId,
  postItemByTestId,
  postsByTestId,
} from "../../../data-testid";
import { posts } from "../../url";

describe("Пользователь заходит на страницу постов", () => {
  it("Testing component AboutPostsPage", () => {
    cy.visit("/login");

    cy.get("[type='email']").type("user@.com{enter}");
    cy.get("[type='password']").type("123{enter}");
    cy.get("div").eq(43).click();

    cy.get("div").eq(14).click({ force: true });

    cy.visit(posts);

    cy.get(aboutPostsPageByTestId).should("exist");

    cy.get(postsByTestId).should("exist");

    cy.get(postItemByTestId);
  });
});
