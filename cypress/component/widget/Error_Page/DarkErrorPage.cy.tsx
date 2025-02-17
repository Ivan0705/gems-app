import { mount } from "cypress/react18";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { ErrorPage } from "@/widget/error_page";
import { app, dark, error_page } from "../../../consts";
import { outLineButtonCypress } from "../../helper/cypressTests";
import { errorPageByTestId } from "./../../../data-testid";
import { primary_text_color_dark } from "../../../consts/colors/rgdColors";

describe("DarkErrorPage.cy.jsx", () => {
  it("Dark error page", () => {
    mount(
      <DarkWrapper>
        <ErrorPage />
      </DarkWrapper>,
    );

    cy.get(errorPageByTestId).should("exist").and("have.class", app);

    cy.get("section").eq(0).and("have.class", app);

    cy.get("div").should("exist").eq(1).and("have.class", dark);

    cy.get("div")
      .should("exist")
      .eq(2)
      .and("have.class", error_page)
      .and("have.css", "width", "500px")
      .and("have.css", "height", "500px")
      .and("have.css", "display", "flex")
      .and("have.css", "flex-direction", "column")
      .and("have.css", "align-items", "center")
      .and("have.css", "justify-content", "center");

    outLineButtonCypress(0, primary_text_color_dark);
    cy.get("button").should("exist").eq(0).contains("reload page");
  });
});
