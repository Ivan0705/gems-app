import {
  aboutPostsPageByTestId,
  postItemByTestId,
  postsByTestId,
} from "../../../data-testid";
import { posts } from "../../url";

describe("Пользователь заходит на страницу постов", () => {
  it("Testing component AboutPostsPage", () => {
    cy.visit(posts);

    cy.get(aboutPostsPageByTestId).should("exist");

    cy.get(postsByTestId).should("exist");

    cy.get(postItemByTestId);
  });
});
