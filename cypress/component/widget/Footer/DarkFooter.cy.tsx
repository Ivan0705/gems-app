import { Footer } from "@/widget/footer/Footer";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { footer } from "../../../consts";
import { mount } from "cypress/react18";
import { primary_color_dark } from "../../../consts/colors/rgdColors";

describe("DarkFooter.cy.tsx", () => {
  it("Mount footer", () => {
    mount(
      <DarkWrapper>
        <Footer />
      </DarkWrapper>,
    );

    cy.get("footer")
      .should("exist")
      .and("have.class", footer)
      .and("have.css", "color", primary_color_dark)
      .and("have.css", "height", "20px")
      .and("have.text", "Ⓒ 2024-2025 Gems ");
  });
});
