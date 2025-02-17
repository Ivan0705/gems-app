import {
  buttonCypress,
  sizeMButtonCypress,
} from "../../../../component/helper/cypressTests";
import {
  userCard,
  userCard_avatar,
  user,
  userCard_userInfo,
  name,
  userCard_companyInfo,
} from "../../../../consts/classes/userInfoById";
import { page } from "../../../../consts";
import { primary_text_color_light } from "../../../../consts/colors/rgdColors";
import { font_family2 } from "../../../../consts/fonts/fonts";
import { userByID } from "../../../url";
import { userCardByTestId } from "../../../../data-testid";

describe("UserInfo.cy.ts", () => {
  const id = 1;
  it(`Testing component UserCard by id=${id}`, () => {
    cy.visit(userByID(id));

    cy.get(userCardByTestId).should("exist");

    const arr = [];
    cy.get("div").each(($div) => {
      console.log("DIV: ", $div, ", ", arr.push($div) - 1);
    });

    cy.get("div").eq(18).and("have.class", userCard);

    cy.get("div")
      .eq(20)
      .and("have.class", userCard_avatar)
      .and("have.css", "display", "grid")
      .and("have.css", "margin", "0px 15px 0px 0px")
      .and("have.css", "padding", "0px")
      .and("have.css", "align-items", "normal")
      .and("have.css", "font-size", "25px");

    cy.get("div").should("exist").eq(16).and("have.class", page);

    cy.get("div")
      .eq(19)
      .and("have.class", user)
      .and("have.css", "display", "flex");

    cy.get("figure")
      .eq(0)
      .and("have.class", userCard_avatar)
      .and("have.css", "margin-right", "15px");

    cy.get("div")
      .eq(21)
      .and("have.class", userCard_userInfo)
      .and("have.css", "font-family", font_family2);

    cy.get("div")
      .eq(22)
      .and("have.class", name)
      .and("have.css", "display", "flex")
      .and("have.css", "justify-content", "space-between")
      .and("have.text", "Имя пользователя:Leanne Graham");

    cy.get("div")
      .eq(27)
      .and("have.class", userCard_companyInfo)
      .and("have.css", "margin-top", "15px")
      .and("have.css", "font-family", font_family2);

    buttonCypress(4, primary_text_color_light, "6px 15px");
    sizeMButtonCypress(4);

    cy.get("button").should("exist").eq(4).and("have.text", "Назад").click();
  });
});
