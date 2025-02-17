import { page, sidebar_menu, sidebar_menu_item, switch_h } from "../../consts";
import {
  black,
  inverted_primary_color_light,
  primary_color_light,
} from "../../consts/colors/rgdColors";
import { main } from "../url";

describe("Sidebar.cy.ts", () => {
  it("Testing component Sidebar", () => {
    cy.visit(main);

    cy.get('[data-testid="desktop-sidebar"]')
      .should("exist")
      .and("have.css", "display", "block")
      .and("have.css", "height", "50px")
      .and("have.css", "color", primary_color_light);

    cy.get("div")
      .eq(11)
      .and("have.class", sidebar_menu)
      .and("have.css", "background-color", inverted_primary_color_light)
      .and("have.css", "display", "flex")
      .and("have.css", "height", "50px")
      .and("have.css", "width", "1000px")
      .and("have.css", "min-width", "0px")
      .and("have.css", "flex-direction", "row")
      .and("have.css", "color", primary_color_light);

    cy.get("div")
      .eq(13)
      .and("have.class", sidebar_menu_item)
      .and("have.css", "height", "50px")
      .click({ force: true })
      .and("have.css", "background-color", black)
      .and("have.css", "border-radius", "10px")
      .trigger("active")
      .and("have.css", "color", primary_color_light)
      .and("have.css", "text-decoration", `none solid ${primary_color_light}`)
      .and("have.text", "Главная");

    cy.get("div")
      .eq(14)
      .and("have.class", sidebar_menu_item)
      .and("have.css", "height", "50px")
      .click()
      .and("have.css", "background-color", black)
      .and("have.css", "border-radius", "10px")
      .trigger("active")
      .and("have.css", "color", primary_color_light)
      .and("have.css", "text-decoration", `none solid ${primary_color_light}`)
      .and("have.text", "Пользователи");

    cy.get("div")
      .eq(15)
      .and("have.class", sidebar_menu_item)
      .click()
      .trigger("hover")
      .trigger("active")
      .and("have.text", "Посты");

    cy.get("div").eq(16).and("have.class", page);
    cy.get("div").eq(17).and("have.not.class");
    cy.get("div").eq(18).and("have.not.class", switch_h);
  });
});
