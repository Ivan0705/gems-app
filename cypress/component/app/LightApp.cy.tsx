import App from "@/app/App";
import { ErrorBoundary } from "@/app/providers/error_boundary";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { ThemeProvider } from "@/app/providers/theme_provider/ui/ThemeProvider";
import i18n from "@/shared/i18next/config/i18nextForTest";
import { mount } from "cypress/react18";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { app, navbar_logo, navbar_wrapper } from "../../consts";
import { appByTestId } from "../../data-testid";
import { bg_сolor_light } from "../../consts/colors/rgdColors";

describe("LightApp.cy.jsx", () => {
  it("Render light app", () => {
    mount(
      <BrowserRouter>
        <ThemeProvider>
          <StoreProvider>
            <ErrorBoundary>
              <I18nextProvider i18n={i18n}>
                <App />
              </I18nextProvider>
            </ErrorBoundary>
          </StoreProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );

    cy.get(appByTestId)
      .should("exist")
      .and("have.class", app)
      .and("have.css", "font-size", "16px")
      .and(
        "have.css",
        "background",
        `${bg_сolor_light} none repeat scroll 0% 0% / auto padding-box border-box`,
      )
      .and("have.css", "min-height", "500px")
      .and("have.css", "width", "495px");

    cy.get("div")
      .should("exist")
      .eq(1)
      .and("have.class", app)
      .and("have.css", "font-size", "16px")
      .and(
        "have.css",
        "background",
        `${bg_сolor_light} none repeat scroll 0% 0% / auto padding-box border-box`,
      )
      .and("have.css", "min-height", "500px")
      .and("have.css", "width", "495px");

    cy.get("div").should("exist").eq(1).and("have.class", app);

    cy.get("div").should("exist").eq(3).and("have.class", navbar_wrapper);

    cy.get("div").should("exist").eq(4).and("have.class", navbar_logo);
  });
});
