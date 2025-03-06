import {
  postItem,
  postItem_line,
  postItem_title,
} from "../../../consts/classes/postsConsts";
import {
  black,
  inverted_secondary_color_light,
  primary_text_color_light,
} from "../../../consts/colors/rgdColors";
import { postItemByTestId } from "../../../data-testid";
import { login, posts } from "../../url";

describe("Posts.cy.ts", () => {
  it("Inputing text in page about posts", () => {
    cy.visit(login);

    cy.get("[type='email']").type("user@.com{enter}");
    cy.get("[type='password']").type("123{enter}");
    cy.get("div").eq(43).click({ force: true });
    cy.get("div").eq(14).click({ force: true });

    cy.visit(posts);

    cy.get(postItemByTestId)
      .should("exist")
      .and("have.class", postItem)
      .and("have.css", "margin", "10px 0px 0px")
      .and("have.css", "border", `2px solid ${inverted_secondary_color_light}`)
      .and("have.css", "padding", "4px")
      .and("have.css", "border-radius", "10px")
      .and("have.css", "color", primary_text_color_light)
      .and("have.css", "background-color", black);

    cy.get("i").should("exist").eq(0).and("have.text", "1");

    cy.get("b")
      .should("exist")
      .eq(0)
      .and(
        "have.text",
        " sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      );

    cy.get("p")
      .should("exist")
      .eq(0)
      .and(
        "have.text",
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      );

    cy.get("b")
      .should("have.class", postItem_title)
      .and("have.css", "font-size", "20px")
      .and("have.css", "margin-left", "-5px");

    cy.get("hr")
      .should("have.class", postItem_line)
      .and("have.css", "width", "938.515625px")
      .and("have.css", "margin-left", "2px")
      .and("have.css", "margin-bottom", "2px")
      .and("have.css", "border", `2px solid ${inverted_secondary_color_light}`);
  });
});
