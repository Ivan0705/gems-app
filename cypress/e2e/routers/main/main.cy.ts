import {
  gemsByTestId,
  navbarByTestId,
  desktopSidebarByTestId,
  switcher_languageByTestId,
} from "../../../data-testid";
import { main } from "../../url";

describe("Пользователь заходит на главную страницу приложения Gems", () => {
  it("Testing component App", () => {
    cy.visit(main);

    cy.get(desktopSidebarByTestId).should("exist");

    cy.get(switcher_languageByTestId).should("exist");

    cy.get(navbarByTestId).should("exist");

    cy.get(gemsByTestId).should("exist");
  });
});
