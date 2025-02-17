import { user_title, user } from "../../../../consts/classes/usersConsts";
import {
  buttonCypress,
  sizeMButtonCypress,
} from "../../../../component/helper/cypressTests";
import { primary_text_color_light } from "../../../../consts/colors/rgdColors";
import { users } from "../../../url";
import { userByTestId } from "../../../../data-testid";

describe("User.cy.ts", () => {
  it("Testing component User", () => {
    cy.visit(users);

    cy.get(userByTestId)
      .should("exist")
      .and("have.class", user)
      .and("have.css", "font-size", "20px")
      .and(
        "have.css",
        "text-decoration",
        `underline solid ${primary_text_color_light}`,
      )
      .and("have.css", "margin", "6px 0px 0px")
      .and("have.css", "color", primary_text_color_light);

    cy.get("div")
      .eq(25)
      .should("have.class", user_title)
      .and("have.css", "margin", "10px 0px 0px")
      .and("have.text", "Leanne Graham");

    buttonCypress(4, primary_text_color_light, "6px 15px");
    sizeMButtonCypress(4);

    cy.get("button")
      .eq(4)
      .should("exist")
      .and("have.text", "Читать далее")
      .click({ force: true });
  });
});
