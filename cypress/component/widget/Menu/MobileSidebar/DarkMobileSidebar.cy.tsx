import { mount } from "cypress/react18";
import { MobileSidebar } from "@/widget/menu";
import { CustomRouter } from "../../../helper/customRouter/CustomRouter";
import { DarkWrapper } from "../../../helper/themeWrapper/DarkWrapper";
import { item, mobileSidebar, title } from "../../../../consts";
import { mobileSidebarByTestId } from "./../../../../data-testid";
import {
  primary_color_dark,
  inverted_primary_color_light,
  black,
} from "../../../../consts/colors/rgdColors";
import { font_family2 } from "../../../../consts/fonts/fonts";
describe("LightSidebar.cy.jsx", () => {
  it("Light sidebar", () => {
    const onClose = cy.spy().as("onClose");
    mount(
      <CustomRouter>
        <DarkWrapper>
          <MobileSidebar onClose={onClose} show={true} />
        </DarkWrapper>
      </CustomRouter>,
    );

    cy.get(mobileSidebarByTestId)
      .should("exist")
      .and("have.css", "display", "block")
      .and("have.css", "height", "0px")
      .and("have.css", "overflow", "visible")
      .and("not.have.attr", "p");

    cy.get("div")
      .should("exist")
      .eq(2)
      .and("have.class", mobileSidebar)
      .and("have.css", "position", "absolute")
      .and("have.css", "display", "grid")
      .and("have.css", "background-color", inverted_primary_color_light)
      .and("not.have.attr", "p");

    cy.get("div")
      .should("exist")
      .eq(4)
      .and("have.class", item)
      .and("have.css", "font-size", "28px")
      .and("have.css", "border-radius", "7px")
      .and("have.css", "margin", "12px")
      .and("have.css", "padding", "5px")
      .and("have.css", "font-family", font_family2)
      .and("have.css", "text-align", "center")
      .trigger("hover")
      .and(
        "have.css",
        "background",
        `${black} none repeat scroll 0% 0% / auto padding-box border-box`,
      )
      .trigger("active")
      .and("have.css", "color", primary_color_dark)
      .and("have.text", "Home")
      .click();

    cy.get("div")
      .should("exist")
      .eq(5)
      .and("have.class", title)
      .and("have.text", "Home")
      .click();

    cy.get("div")
      .should("exist")
      .eq(6)
      .and("have.class", item)
      .and("have.text", "Users")
      .click();

    cy.get("div")
      .should("exist")
      .eq(7)
      .and("have.class", title)
      .and("have.text", "Users")
      .click();

    cy.get("div")
      .should("exist")
      .eq(8)
      .and("have.class", item)
      .and("have.text", "Posts")
      .click();

    cy.get("div")
      .should("exist")
      .eq(9)
      .and("have.class", title)
      .and("have.text", "Posts")
      .click();
  });
});
