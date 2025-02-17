import {
  buttonCypress,
  clearButtonCypress,
  iconCypress,
  sizeMButtonCypress,
} from "../../component/helper/cypressTests";
import {
  navbar_btns,
  navbar_logo,
  btn,
  navbar_logoPicture,
  burgerBtn,
  switherLanguage,
  gearBtn,
} from "../../consts";
import {
  black,
  black_icon,
  primary_text_color_dark,
  primary_text_color_light,
} from "../../consts/colors/rgdColors";
import { main } from "../url";

describe("Navbar.cy.ts", () => {
  Cypress.on("uncaught:exception", () => {
    return false;
  });

  it("Testing component Navbar", () => {
    cy.visit(main);

    cy.get('[data-testid="navbar"]')
      .should("exist")
      .and("have.not.class")
      .and("have.css", "background-color", black);

    iconCypress(0, black_icon);

    cy.get("svg").eq(0).should("exist").and("have.class", navbar_logoPicture);

    cy.get("h4").eq(0).should("exist").and("have.text", "Gems");

    cy.get("div")
      .eq(4)
      .and("have.class", navbar_logo)
      .and("have.css", "margin-left", "3px")
      .and("have.css", "display", "flex")
      .and("have.css", "font-size", "45px")
      .and("have.css", "justify-content", "center")
      .and("have.css", "align-items", "center");

    cy.get("div")
      .eq(5)
      .and("have.class", navbar_btns)
      .and("have.css", "margin-right", "12px")
      .and("have.css", "display", "flex")
      .and("have.css", "justify-content", "center")
      .and("have.css", "align-items", "center");

    cy.get("div")
      .eq(6)
      .and("have.class", btn)
      .and("have.css", "margin-left", "20px")
      .and("have.css", "text-align", "center")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px");

    cy.get("div")
      .eq(7)
      .and("have.class", btn)
      .and("have.css", "margin-left", "20px")
      .and("have.css", "text-align", "center")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px");
    cy.get("div").eq(7).and("have.not.class", "unknow");

    cy.get("div").eq(9).and("have.not.class");

    buttonCypress(0, primary_text_color_light, "0px");
    clearButtonCypress(0, primary_text_color_light);
    sizeMButtonCypress(0);

    cy.get("button").eq(0).should("exist").click();

    buttonCypress(1, primary_text_color_dark, "0px");
    clearButtonCypress(1, primary_text_color_dark);
    sizeMButtonCypress(1);

    cy.get("button")
      .eq(1)
      .should("exist")
      .and("have.class", switherLanguage)
      .and("have.css", "display", "grid")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px")
      .click();

    buttonCypress(2, primary_text_color_dark, "0px");
    clearButtonCypress(2, primary_text_color_dark);

    cy.get("button")
      .eq(2)
      .should("exist")
      .and("have.class", gearBtn)
      .and("have.css", "width", "40px")
      .and("have.css", "height", "47px");

    buttonCypress(3, primary_text_color_dark, "0px");
    clearButtonCypress(3, primary_text_color_dark);
    sizeMButtonCypress(3);

    cy.get("button")
      .eq(3)
      .should("exist")
      .and("have.class", burgerBtn)
      .and("have.css", "width", "40px")
      .and("have.css", "height", "47px");
  });
});
