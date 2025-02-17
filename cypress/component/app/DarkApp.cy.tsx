import App from "@/app/App";
import { ErrorBoundary } from "@/app/providers/error_boundary";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { ThemeProvider } from "@/app/providers/theme_provider/ui/ThemeProvider";
import i18n from "@/shared/i18next/config/i18nextForTest";
import { mount } from "cypress/react18";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { DarkWrapper } from "../helper/themeWrapper/DarkWrapper";
import {
  app,
  btn,
  navbar_btns,
  navbar_logo,
  navbar_mobile,
  navbar_wrapper,
  notFoundPage,
  sidebar_menu,
  sidebar_menu_item,
  switherLanguage_title,
} from "../../consts";
import { appByTestId } from "../../data-testid";
import { bg_color_dark } from "../../consts/colors/rgdColors";

describe("DarkApp.cy.jsx", () => {
  it("Render dark app", () => {
    mount(
      <BrowserRouter>
        <ThemeProvider>
          <StoreProvider>
            <ErrorBoundary>
              <I18nextProvider i18n={i18n}>
                <DarkWrapper>
                  <App />
                </DarkWrapper>
              </I18nextProvider>
            </ErrorBoundary>
          </StoreProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );
    const arr = [];
    cy.get("div").each(($div) => {
      console.log("DIV: ", $div, " INDEX: ", arr.push($div) - 1);
    });

    cy.get(appByTestId)
      .should("exist")
      .and("have.class", app)
      .and("have.css", "font-size", "16px")
      .and(
        "have.css",
        "background",
        `${bg_color_dark} none repeat scroll 0% 0% / auto padding-box border-box`,
      )
      .and("have.css", "min-height", "500px")
      .and("have.css", "width", "500px");

    cy.get("div")
      .should("exist")
      .eq(1)
      .and("have.class", app)
      .and("have.css", "font-size", "16px")
      .and(
        "have.css",
        "background",
        `${bg_color_dark} none repeat scroll 0% 0% / auto padding-box border-box`,
      )
      .and("have.css", "min-height", "500px")
      .and("have.css", "width", "500px");

    cy.get("div").should("exist").eq(2).and("have.class", app);

    cy.get("div").should("exist").eq(4).and("have.class", navbar_wrapper);

    cy.get("div").should("exist").eq(5).and("have.class", navbar_logo);

    cy.get("div").should("exist").eq(6).and("have.class", navbar_btns).click();

    cy.get("div").should("exist").eq(7).and("have.class", btn);

    cy.get("div").should("exist").eq(8).and("have.class", btn);

    cy.get("div")
      .should("exist")
      .eq(10)
      .and("have.class", switherLanguage_title);

    cy.get("div")
      .should("exist")
      .eq(11)
      .and("have.class", navbar_mobile)
      .click();

    cy.get("div").should("exist").eq(12).and("have.class", sidebar_menu);

    cy.get("div")
      .should("exist")
      .eq(14)
      .and("have.class", sidebar_menu_item)
      .and("have.text", "Home");

    cy.get("div")
      .should("exist")
      .eq(15)
      .and("have.class", sidebar_menu_item)
      .and("have.text", "Users");

    cy.get("div")
      .should("exist")
      .eq(17)
      .and("have.class", notFoundPage)
      .and("have.text", "not found");
  });
});
