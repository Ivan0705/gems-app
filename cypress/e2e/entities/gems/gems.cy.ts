import { gems_wrapper, gemCard } from "../../../consts/classes/gemsConst";
import { gemCardByTestId } from "../../../data-testid";
import { main } from "../../url";

describe("Gems.cy.ts", () => {
  it("Testing component AboutGemsPage", () => {
    cy.visit(main);

    cy.get(gemCardByTestId).should("exist").and("have.class", gemCard);

    cy.get("div").eq(25).and("have.class", gems_wrapper);
  });
});
