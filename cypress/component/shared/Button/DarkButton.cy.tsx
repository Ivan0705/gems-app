import { mount } from "cypress/react18";
import { ButtonTheme } from "@/shared/ui/Button/consts/enums";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { button } from "../../../consts";
import {
  buttonCypress,
  outLineButtonCypress,
  sizeMButtonCypress,
} from "../../helper/cypressTests";
import { buttonByTestId } from "../../../data-testid";
import { primary_text_color_dark } from "../../../consts/colors/rgdColors";
import { Button } from "@/shared/ui/Button/Button";

describe("DarkButton.cy.jsx", () => {
  it("Dark button", () => {
    mount(
      <DarkWrapper>
        <Button theme={ButtonTheme.OUTLINE}>Text7</Button>
      </DarkWrapper>,
    );

    cy.get(buttonByTestId).should("exist").and("have.class", button).click();

    buttonCypress(0, primary_text_color_dark, "6px 15px");
    outLineButtonCypress(0, primary_text_color_dark);
    sizeMButtonCypress(0);

    cy.get("button").eq(0).should("exist").and("have.text", "Text7").click();
  });
});
