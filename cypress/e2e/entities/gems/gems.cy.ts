import {
  buttonCypress,
  clearButtonCypress,
  iconCypress,
  sizeMButtonCypress,
} from "../../../component/helper/cypressTests";
import {
  card,
  gem_wrapper,
  gemCard,
  gemCard_text,
  gemCard_wrapper_side,
  title,
} from "../../../consts/classes/gemsConst";
import { gemCardByTestId } from "../../../data-testid";
import {
  black,
  black_icon,
  primary_text_color_light,
} from "../../../consts/colors/rgdColors";
import { font_family1 } from "../../../consts/fonts/fonts";
import { btnSidebar } from "../../../consts";
import { main } from "../../url";

describe("Gems.cy.ts", () => {
  it("Testing component AboutGemsPage", () => {
    cy.visit(main);

    cy.get(gemCardByTestId)
      .should("exist")
      .and("have.class", gemCard)
      .and("have.css", "color", primary_text_color_light)
      .and("have.css", "background-color", black);

    cy.get("div").eq(19).and("have.class", gem_wrapper);

    cy.get("div")
      .eq(35)
      .and("have.class", gemCard_wrapper_side)
      .and("have.css", "display", "grid")
      .and("have.css", "align-items", "start")
      .and("have.css", "min-height", "220px")
      .and("have.css", "justify-content", "center")
      .and("have.css", "color", primary_text_color_light)
      .and("have.css", "background-color", black);

    cy.get("div")
      .eq(36)
      .and("have.class", card)
      .and("have.css", "display", "grid")
      .and("have.css", "align-items", "center")
      .and("have.css", "justify-content", "center");

    cy.get("div").eq(36).and("have.not.class", "unknow");

    cy.get("div")
      .eq(38)
      .and("have.class", gemCard_text)
      .and("have.css", "margin-left", "12px");

    cy.get("div")
      .eq(38)
      .and("have.not.class")
      .and("have.css", "margin", "0px 0px 0px 12px");

    cy.get("b")
      .eq(0)
      .should("have.class", title)
      .and("have.css", "font-size", "20px")
      .and("have.css", "font-family", font_family1)
      .and(
        "have.css",
        "text-decoration",
        `underline solid ${primary_text_color_light}`,
      )
      .and("have.css", "align-items", "center")
      .and("have.css", "text-align", "center")
      .and("have.css", "justify-content", "center")
      .and("have.css", "margin-bottom", "10px")
      .and("have.text", "Алмаз");

    buttonCypress(4, primary_text_color_light, "0px");
    clearButtonCypress(4, primary_text_color_light);
    sizeMButtonCypress(4);

    cy.get("button").should("exist").eq(4).click();

    iconCypress(5, black_icon, "65px", "5px", "0px");
    cy.get("svg")
      .should("exist")
      .eq(5)
      //btn class
      .should("have.class", btnSidebar)
      .and("have.css", "width", "45px")
      .and("have.css", "height", "65px")
      .and("have.css", "margin-right", "5px")
      //undefined class
      .should("have.class", undefined)
      .click();
  });
});
