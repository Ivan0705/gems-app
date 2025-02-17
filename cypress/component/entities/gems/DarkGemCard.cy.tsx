import ruby from "@/entities/gems/pictures/ruby/ruby1.jpg";
import { mount } from "cypress/react18";
import { GemCard } from "@/entities/gems/ui/GemCard/GemCard";
import { DarkWrapper } from "../../helper/themeWrapper/DarkWrapper";
import {
  card,
  gemCard,
  gemCard_text,
  gemCard_wrapper_side,
  title,
} from "../../../consts/classes/gemsConst";
import { avatar } from "../../../consts";
import { gemCardByTestId } from "../../../data-testid";
import {
  inverted_secondary_color_dark,
  primary_text_color_dark,
} from "../../../consts/colors/rgdColors";

describe("DarkGemCard.cy.tsx", () => {
  it("Test dark gemCard", () => {
    const args = {
      className: "",
      title: "Ruby",
      text: "Ruby (Latin: rubens, rubinus — red; obsolete terms include 'sardis, lal, red garnet') is a variety of corundum that comes in various shades of red, depending on the percentage of chromium in its composition. The chemical composition of the mineral is aluminum oxide (Al₂O₃). In terms of hardness, a true ruby ranks just below diamond.History. The earliest references to rubies date back to ancient times, around the 6th century BC. Initially, the mineral was mined in India, but as trade developed, the stone made its way to Greece, Rome, and Egypt. It is evident that this precious gem was found only in the jewelry of wealthy individuals, royal nobles, and members of the clergy. Interestingly, the stone was used to adorn not only jewelry but also clothing, books, household items, and special religious accessories.The main deposits of rubies are located in Myanmar, Sri Lanka, Thailand, Kenya, and Afghanistan. There are also very ancient deposits in the Pamir Mountains (a mountain range in Tajikistan). In Russia, the mineral is mined in the Ural Mountains, but it is not found there in large deposits; it occurs occasionally as a byproduct when extracting corundum.",
      avatar: ruby,
    };

    mount(
      <DarkWrapper>
        <GemCard {...args} />
      </DarkWrapper>,
    );

    const arr = [];
    cy.get("div").each(($div) => {
      console.log("INDEX:", arr.push($div) - 1, "DIV: ", $div);
    });

    cy.get(gemCardByTestId)
      .should("exist")
      .and("have.class", gemCard)
      .and("have.css", "display", "flex")
      .and("have.css", "margin-top", "10px")
      .and("have.css", "border", `2px solid ${inverted_secondary_color_dark}`)
      .and("have.css", "border-radius", "10px")
      .and("have.css", "padding", "5px")
      .and("have.css", "color", primary_text_color_dark)
      .and("have.css", "background-color", "rgba(0, 0, 0, 0)");

    cy.get("div")
      .eq(2)
      .should("have.class", gemCard_wrapper_side)
      .and("have.css", "display", "grid")
      .and("have.css", "align-items", "start")
      .and("have.css", "min-height", "220px")
      .and("have.css", "justify-content", "center");

    cy.get("div")
      .eq(3)
      .should("have.class", card)
      .and("have.css", "display", "grid")
      .and("have.css", "align-items", "center")
      .and("have.css", "justify-content", "center");

    cy.get("b")
      .eq(0)
      .should("have.class", title)
      .and("have.css", "font-size", "20px")
      .and(
        "have.css",
        "font-family",
        'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
      )
      .and(
        "have.css",
        "text-decoration",
        `underline solid ${primary_text_color_dark}`,
      )
      .and("have.css", "align-items", "center")
      .and("have.css", "text-align", "center")
      .and("have.css", "justify-content", "center")
      .and("have.css", "margin-bottom", "10px")
      .and("have.text", "Ruby");

    cy.get("div")
      .eq(4)
      .should("have.class", avatar)
      .and("have.css", "margin", "0px");

    cy.get("div")
      .eq(5)
      .should("have.class", gemCard_text)
      .and("have.css", "margin-left", "12px");
  });
});
