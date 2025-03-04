import { Input } from "@/shared/ui/Input/Input";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { mount } from "cypress/react18";
import {
  caretWrapper,
  input,
  InputWrapper,
  placeholder,
} from "../../../consts";
import { inputByTestId } from "./../../../data-testid";
import { black } from "../../../consts/colors/rgdColors";

describe("DarkInput.cy.jsx", () => {
  it("Dark input displayed", () => {
    mount(
      <DarkWrapper>
        <Input placeholder="Type text" value="" />
      </DarkWrapper>,
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
        "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
      )
      .and("have.css", "border", `0px none ${black}`)
      .and("have.css", "outline", `${black} none 0px`)
      .and("have.css", "width", "402.03125px")
      .and("have.css", "position", "static")
      .and("have.css", "animation", "none 0s ease 0s 1 normal none running")
      .trigger("focus")
      .and("have.css", "outline", `${black} none 0px`)
      .type(`Leanne Graham`)
      .type("{enter}");
  });
});
