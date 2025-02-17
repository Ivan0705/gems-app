import { mount } from "cypress/react18";
import { LightWrapper } from "../../helper/themeWrapper/LightWrapper";
import { SwitcherLanguage } from "@/widget/switcher_language";
import { I18nextProvider } from "react-i18next";
import i18n from "@/shared/i18next/config/i18nextForTest";
import {
  switherLanguage,
  switherLanguage_flag,
  switherLanguage_title,
} from "../../../consts";
import {
  buttonCypress,
  clearButtonCypress,
  sizeMButtonCypress,
} from "../../helper/cypressTests";
import { switcher_languageByTestId } from "./../../../data-testid";
import { primary_text_color_light } from "../../../consts/colors/rgdColors";

describe("LightSwitcherLanguage.cy.jsx", () => {
  it("Light switcher language", () => {
    mount(
      <I18nextProvider i18n={i18n}>
        <LightWrapper>
          <SwitcherLanguage />
        </LightWrapper>
      </I18nextProvider>,
    );

    cy.get(switcher_languageByTestId).should("exist");

    buttonCypress(0, primary_text_color_light, "0px");
    clearButtonCypress(0, primary_text_color_light);
    sizeMButtonCypress(0);

    cy.get("button")
      .should("exist")
      .eq(0)
      //switherLanguage class
      .and("have.class", switherLanguage)
      .and("have.css", "display", "grid")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px")
      .click();

    cy.get("svg")
      .should("exist")
      .eq(0)
      .and("have.class", switherLanguage_flag)
      .and("have.css", "height", "50px")
      .click();

    cy.get("div")
      .should("exist")
      .eq(3)
      .and("have.class", switherLanguage_title)
      .and("have.css", "top", "0px")
      .and("have.css", "text-align", "center")
      .and("have.text", "language")
      .click();
  });
});
