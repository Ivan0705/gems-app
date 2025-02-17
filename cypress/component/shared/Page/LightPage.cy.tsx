import { mount } from "cypress/react18";
import { LightWrapper } from "../../helper/themeWrapper/LightWrapper";
import { Page } from "@/shared/ui/Page";
import { page } from "../../../consts";
import { pageByTestId } from "./../../../data-testid";

describe("LightPage.cy.jsx", () => {
  it("Light page displayed", () => {
    mount(
      <LightWrapper>
        <Page>Hello word!</Page>
      </LightWrapper>,
    );

    cy.get(pageByTestId)
      .should("exist")
      .and("have.class", page)
      .and("have.css", "width", "500px")
      .and("have.css", "padding", "0px")
      .and("have.css", "margin", "0px")
      .and("not.have.attr", "button");

    cy.get("div")
      .should("exist")
      .eq(2)
      .and("have.class", page)
      .and("have.text", "Hello word!");
  });
});
