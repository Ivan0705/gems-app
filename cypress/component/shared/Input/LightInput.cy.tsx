import { Input } from "@/shared/ui/Input/Input";
import { mount } from "cypress/react18";
import { LightWrapper } from "../../helper/themeWrapper/LightWrapper";
import {
  caretWrapper,
  input,
  InputWrapper,
  placeholder,
} from "../../../consts";
import { inputByTestId } from "./../../../data-testid";
import { black } from "../../../consts/colors/rgdColors";

describe("LightInput.cy.jsx", () => {
  it("Light input displayed", () => {
    mount(
      <LightWrapper>
        <Input placeholder="Type text" value="Hello word!" />
      </LightWrapper>,
    );

    cy.get(inputByTestId).should("exist").and("have.class", InputWrapper);

    cy.get("div")
      .eq(2)
      .should("exist")
      .and("have.class", InputWrapper)
      .and("have.css", "display", "flex");

    cy.get("div")
      .eq(3)
      .should("exist")
      .and("have.class", placeholder)
      .and("have.css", "margin-right", "5px")
      .click();

    cy.get("div")
      .eq(4)
      .should("exist")
      .and("have.class", caretWrapper)
      .and("have.css", "flex-grow", "1")
      .and("have.css", "position", "relative");

    cy.get("input")
      .eq(0)
      .should("exist")
      .and("have.class", input)
      .and(
        "have.css",
        "background",
        `${black} none repeat scroll 0% 0% / auto padding-box border-box`,
      )
      .and("have.css", "border", `0px none ${black}`)
      .and("have.css", "outline", `${black} none 0px`)
      .and("have.css", "width", "402.03125px")
      .and("have.css", "position", "static")
      .and("have.css", "animation", "none 0s ease 0s 1 normal none running")
      .trigger("focus")
      .and("have.css", "outline", `${black} none 0px`);
  });
});
