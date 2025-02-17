import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { Counter } from "@/entities/counter";
import { mount } from "cypress/react18";
import {
  btn,
  counter,
  counter_btns,
  counter_title,
} from "../../../consts/classes/counterConsts";
import { size_m } from "../../../consts";
import { buttonCypress } from "../../helper/cypressTests";
import { counterByTestId } from "../../../data-testid";
import {
  black,
  primary_text_color_dark,
} from "../../../consts/colors/rgdColors";
import { font_family2 } from "../../../consts/fonts/fonts";

describe("DarkCounter.cy.tsx", () => {
  it("Test dark counter", () => {
    mount(
      <StoreProvider>
        <DarkWrapper>
          <Counter />
        </DarkWrapper>
      </StoreProvider>,
    );

    const arr = [];
    cy.get("div").each(($div) => {
      console.log("INDEX:", arr.push($div) - 1, "DIV: ", $div);
    });

    cy.get(counterByTestId)
      .should("exist")
      .and("have.class", counter)
      .and("have.css", "color", primary_text_color_dark)
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

    cy.get("button").eq(0).contains("+").click();
    cy.get("button").eq(1).contains("-").click();

    cy.get("button").eq(0).should("have.class", btn).click();

    buttonCypress(1, primary_text_color_dark, "6px 15px");
    // outLineButtonCypress(1, rgbLigthColorForDarkComponent);

    cy.get("button")
      .eq(1)
      /* btn class */
      .should("have.class", btn)
      .and("have.css", "height", "35px")
      .and("have.css", "width", "45px")
      /* size_m class */
      .should("have.class", size_m)
      .and("have.css", "font", '16px / 24px consolas, "Times New Roman", serif')
      .click();
  });
});
