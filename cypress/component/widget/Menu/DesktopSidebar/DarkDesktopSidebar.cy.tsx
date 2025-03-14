import { mount } from "cypress/react18";
import { CustomRouter } from "../../../helper/customRouter/CustomRouter";
import { DarkWrapper } from "../../../helper/themeWrapper/DarkWrapper";
import { sidebar_menu } from "../../../../consts";
import { desktopSidebarByTestId } from "../../../../data-testid";
import {
  primary_color_dark,
  inverted_primary_color_light,
} from "../../../../consts/colors/rgdColors";
import { DesktopSidebar } from "@/widget/menu/desktop_sidebar/ui/DesktopSidebar";

describe("DarkDesktopSidebar.cy.jsx", () => {
  it("Dark sidebar", () => {
    mount(
      <CustomRouter>
        <DarkWrapper>
          <DesktopSidebar />
        </DarkWrapper>
      </CustomRouter>,
    );
    const arr = [];
    cy.get("div").each(($div) => {
      console.log("INDEX:", arr.push($div) - 1, "DIV: ", $div);
    });

    cy.get(desktopSidebarByTestId)
      .should("exist")
      .and("have.css", "display", "none")
      .and("have.css", "height", "75px")
      .and("have.css", "color", primary_color_dark)
      .and("not.have.attr", "p");

    cy.get("div")
      .should("exist")
      .eq(2)
      .and("have.class", sidebar_menu)
      .and("have.css", "background-color", inverted_primary_color_light)
      .and("have.css", "display", "flex")
      .and("have.css", "height", "0px")
      .and("have.css", "width", "100%")
      .and("have.css", "min-width", "0px")
      .and("have.css", "flex-direction", "row")
      .and("have.css", "color", primary_color_dark);
  });
});
