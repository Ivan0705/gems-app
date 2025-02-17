import { caretWrapper, InputWrapper, page, placeholder } from "../../../consts";
import { postsByTestId } from "../../../data-testid";
import { posts } from "../../url";

describe("Posts.cy.ts", () => {
  it("Test component Posts", () => {
    cy.visit(posts);

    cy.get(postsByTestId).should("exist");

    cy.get("div").eq(16).should("exist").and("have.class", page);
    cy.get("div").eq(17).should("exist").and("have.not.class");

    cy.get("div").eq(20).should("exist").and("have.class", InputWrapper);
    cy.get("div").eq(21).should("exist").and("have.class", placeholder);
    cy.get("div").eq(22).should("exist").and("have.class", caretWrapper);
  });

  it("Testing component IsLoadingPostsList", () => {
    cy.visit(posts);

    cy.get("div")
      .eq(22)
      .should("exist")
      .and("have.not.class")
      .and("have.css", "margin-top", "0px");

    cy.get("div")
      .eq(23)
      .should("exist")
      .and("have.css", "border-radius", "0px");

    cy.get("div").eq(24).should("exist").and("have.css", "margin-top", "0px");

    cy.get("div")
      .eq(25)
      .should("exist")
      .and("have.css", "border-radius", "0px");
  });

  it("Inputing text in page about posts", () => {
    cy.visit(posts);

    cy.get("div")
      .eq(21)
      .should("exist")
      .and("have.class", placeholder)
      .contains("Поиск");

    cy.get("input")
      .should("exist")
      .type(
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      )
      .type("{enter}");
  });
});
