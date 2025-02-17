/* eslint-disable max-lines */
import { mount } from "cypress/react18";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import { Navbar } from "@/widget/navbar";
import { CustomRouter } from "../../helper/customRouter/CustomRouter";
import {
  buttonCypress,
  clearButtonCypress,
  sizeMButtonCypress,
} from "../../helper/cypressTests";
import {
  btn,
  burgerBtn,
  gearBtn,
  navbar,
  navbar_btns,
  navbar_burgerMenu,
  navbar_gearSetting,
  navbar_logo,
  navbar_logoPicture,
  navbar_mobile,
  navbar_wrapper,
  switherLanguage_flag,
  switherLanguage_title,
  themeSwitcher_btn,
} from "../../../consts";
import { navbarByTestId } from "./../../../data-testid";
import {
  primary_text_color_dark,
  black,
} from "../../../consts/colors/rgdColors";

describe("DarkNavbar.cy.jsx", () => {
  it("Dark navbar", () => {
    mount(
      <CustomRouter>
        <DarkWrapper>
          <Navbar />
        </DarkWrapper>
      </CustomRouter>,
    );

    cy.get(navbarByTestId)
      .should("exist")
      .and("have.class", navbar)
      .and("have.css", "background-color", black);

    cy.get("div")
      .should("exist")
      .eq(2)
      .and("have.class", navbar_wrapper)
      .and("have.css", "justify-content", "space-between")
      .and("have.css", "display", "flex")
      .and("have.css", "height", "113.828125px")
      .and("have.css", "width", "500px");

    cy.get("div")
      .should("exist")
      .eq(3)
      .and("have.class", navbar_logo)
      .and("have.css", "margin-left", "3px")
      .and("have.css", "display", "flex")
      .and("have.css", "font-size", "45px")
      .and("have.css", "justify-content", "center")
      .and("have.css", "align-items", "center");

    cy.get("div")
      .should("exist")
      .eq(4)
      .and("have.class", navbar_btns)
      .and("have.css", "margin-right", "12px")
      .and("have.css", "display", "flex")
      .and("have.css", "justify-content", "center")
      .and("have.css", "align-items", "center");

    cy.get("div")
      .should("exist")
      .eq(5)
      .and("have.class", btn)
      .and("have.css", "margin-left", "20px")
      .and("have.css", "text-align", "center")
      .and("have.css", "width", "75px")
      .and("have.css", "height", "75px");

    cy.get("div").should("exist").eq(6).and("have.class", btn);

    cy.get("div").should("exist").eq(7).and("have.not.class", "_btn_e5qy6_43");

    cy.get("div")
      .should("exist")
      .eq(8)
      .and("have.class", switherLanguage_title);

    cy.get("div")
      .should("exist")
      .eq(9)
      .and("have.class", navbar_mobile)
      .and("have.css", "display", "flex")
      .and("have.css", "margin-right", "5px");

    buttonCypress(0, primary_text_color_dark, "0px");
    clearButtonCypress(0, primary_text_color_dark);
    sizeMButtonCypress(0);

    cy.get("button").eq(0).should("exist");

    cy.get("button").eq(1).should("exist");

    buttonCypress(2, primary_text_color_dark, "0px");
    clearButtonCypress(2, primary_text_color_dark);
    sizeMButtonCypress(2);

    cy.get("button")
      .eq(2)
      .should("exist")
      //gearBtn class
      .and("have.class", gearBtn)
      .and("have.css", "display", "flex")
      .and("have.css", "width", "40px")
      .and("have.css", "height", "40px")
      .click();

    buttonCypress(3, primary_text_color_dark, "0px");
    clearButtonCypress(3, primary_text_color_dark);
    sizeMButtonCypress(3);

    cy.get("button")
      .eq(3)
      .should("exist")
      //burgerBtn class
      .and("have.class", burgerBtn)
      .and("have.css", "display", "flex")
      .and("have.css", "width", "40px")
      .and("have.css", "height", "40px")
      .click();

    cy.get("svg")
      .eq(0)
      .should("exist")
      .and("have.class", navbar_logoPicture)
      .and("have.css", "width", "45px")
      .and("have.css", "height", "45px")
      .and("have.css", "margin-right", "25px")
      .and("have.css", "margin-left", "5px");

    cy.get("svg").eq(1).should("exist").and("have.class", themeSwitcher_btn);

    cy.get("svg").eq(2).should("exist").and("have.class", switherLanguage_flag);

    cy.get("svg")
      .eq(3)
      .should("exist")
      .and("have.class", navbar_gearSetting)
      .and("have.css", "width", "40px")
      .and("have.css", "height", "40px")
      .click();

    cy.get("svg")
      .eq(4)
      .should("exist")
      .and("have.class", navbar_burgerMenu)
      .and("have.css", "width", "40px")
      .and("have.css", "height", "40px")
      .click();
  });
});
