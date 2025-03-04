import { mount } from "cypress/react18";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { Page } from "@/shared/ui/Page";
import { page } from "../../../consts";
import { pageByTestId } from "./../../../data-testid";

describe("DarkPage.cy.jsx", () => {
  it("Dark page displayed", () => {
    mount(
      <DarkWrapper>
        <Page>Hello word!</Page>
      </DarkWrapper>,
    );

    cy.get(pageByTestId)
      .should("exist")
      .and("have.class", page)
      .and("have.css", "width", "495px")
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
