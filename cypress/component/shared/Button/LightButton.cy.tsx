import { Button } from "@/shared/ui/Button/Button";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";
import { mount } from "cypress/react18";
import { LightWrapper } from "../../helper/themeWrapper/LightWrapper";
import { buttonCypress, sizeMButtonCypress } from "../../helper/cypressTests";
import { buttonByTestId } from "../../../data-testid";
import { primary_text_color_light } from "../../../consts/colors/rgdColors";

describe("LightButton.cy.jsx", () => {
  it("Light clear inverted button", () => {
    mount(
      <LightWrapper>
        <Button theme={ButtonTheme.CLEAR_INVERTED}>Clear</Button>
      </LightWrapper>,
    );

    cy.get(buttonByTestId).should("exist").click();

    buttonCypress(0, primary_text_color_light, "6px 15px");
    sizeMButtonCypress(0);

    cy.get("button")
      .eq(0)
      .should("exist")
      .and("have.class", undefined)
      .and("have.text", "Clear")
      .click();
  });
});
