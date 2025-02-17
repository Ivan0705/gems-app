import { Counter } from "@/entities/counter";
import { LightWrapper } from "../../helper/themeWrapper/LightWrapper";
import { mount } from "cypress/react18";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import {
  btn,
  counter,
  counter_btns,
  counter_title,
} from "../../../consts/classes/counterConsts";

import { buttonCypress, sizeMButtonCypress } from "../../helper/cypressTests";
import { counterByTestId } from "../../../data-testid";
import {
  black,
  primary_text_color_light,
} from "../../../consts/colors/rgdColors";
import { font_family2 } from "../../../consts/fonts/fonts";

describe("LightCounter.cy.tsx", () => {
  it("Test light counter", () => {
    mount(
      <StoreProvider>
        <LightWrapper>
          <Counter />
        </LightWrapper>
      </StoreProvider>,
    );

    const arr = [];
    cy.get("div").each(($div) => {
      console.log("INDEX:", arr.push($div) - 1, "DIV: ", $div);
    });

    cy.get(counterByTestId)
      .should("exist")
      .and("have.class", counter)
      .and("have.css", "color", primary_text_color_light)
      .and("have.css", "background-color", black)
      .and("have.css", "display", "grid")
      .and("have.css", "font-family", font_family2);

    cy.get("div")
      .eq(2)
      .should("have.class", counter_title)
      .and("have.css", "font-size", "45px")
      .and("have.css", "margin-left", "25px");

    cy.get("div")
      .eq(3)
      .should("have.class", counter_btns)
      .and("have.css", "display", "flex");

    cy.get("Button").eq(0).contains("+").click();
    cy.get("Button").eq(1).contains("-").click();

    cy.get("Button").eq(0).should("have.class", btn).click();

    buttonCypress(1, primary_text_color_light, "6px 15px");
    sizeMButtonCypress(1);

    cy.get("Button")
      .eq(1)
      /* btn class */
      .should("have.class", btn)
      .and("have.css", "height", "35px")
      .and("have.css", "width", "45px")
      .click();
  });
});
