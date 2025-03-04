import { mount } from "cypress/react18";
import { ErrorPage } from "@/widget/error_page";
import { LightWrapper } from "../../helper/themeWrapper/LightWrapper";
import { app, error_page, light } from "../../../consts";
import { outLineButtonCypress } from "../../helper/cypressTests";
import { errorPageByTestId } from "./../../../data-testid";
import { primary_text_color_light } from "../../../consts/colors/rgdColors";

describe("LightErrorPage.cy.jsx", () => {
  it("Light error page", () => {
    mount(
      <LightWrapper>
        <ErrorPage />
      </LightWrapper>,
    );

    cy.get(errorPageByTestId).should("exist").and("have.class", app);

    cy.get("section").eq(0).and("have.class", app);

    cy.get("div").eq(1).and("have.class", light);

    cy.get("div")
      .should("exist")
      .eq(2)
      .and("have.class", error_page)
      .and("have.css", "width", "495px")
      .and("have.css", "height", "500px")
      .and("have.css", "display", "flex")
      .and("have.css", "flex-direction", "column")
      .and("have.css", "align-items", "center")
      .and("have.css", "justify-content", "center");

    outLineButtonCypress(0, primary_text_color_light);
    cy.get("button").should("exist").eq(0).contains("reload page");
  });
});
