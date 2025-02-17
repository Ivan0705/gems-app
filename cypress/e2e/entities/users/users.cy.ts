import { caretWrapper, InputWrapper, placeholder } from "../../../consts";
import { users } from "../../url";

describe("Users.cy.ts", () => {
  it("Testing component Users", () => {
    cy.visit(users);

    cy.get("div")
      .eq(16)
      .should(
        "have.text",
        " Поиск>Leanne GrahamЧитать далееErvin HowellЧитать далееClementine BauchЧитать далееPatricia LebsackЧитать далееChelsey DietrichЧитать далееMrs. Dennis SchulistЧитать далееKurtis WeissnatЧитать далееNicholas Runolfsdottir VЧитать далееGlenna ReichertЧитать далееClementina DuBuqueЧитать далее",
      );

    cy.get("div").eq(20).should("exist").and("have.class", InputWrapper);

    cy.get("div").eq(21).should("exist").and("have.class", placeholder);

    cy.get("div").eq(22).should("exist").and("have.class", caretWrapper);
  });

  it("Inputing text in page about users", () => {
    cy.visit(users);

    cy.get("div")
      .eq(21)
      .should("exist")
      .and("have.class", placeholder)
      .contains("Поиск");

    cy.get("input").eq(0).should("exist").type(`Leanne Graham`).type("{enter}");
  });
});
