import { User } from "@/entities/users/ui/User/User";
import { DarkWrapper } from "../../../helper/themeWrapper/DarkWrapper";
import { mount } from "cypress/react18";
import { user_title, user, btn } from "../../../../consts/classes/usersConsts";
import { outline, size_m } from "../../../../consts";
import { buttonCypress } from "../../../helper/cypressTests";
import { userByTestId } from "../../../../data-testid";
import {
  primary_text_color_dark,
  black,
} from "../../../../consts/colors/rgdColors";

describe("DarkUser.cy.tsx", () => {
  it("Test component User", () => {
    const openUser = cy.spy().as("openUser");
    const argsForTest = {
      user: { id: 1, name: "Marry Blood" },
      openUser: openUser,
    };
    mount(
      <DarkWrapper>
        <User {...argsForTest} />
      </DarkWrapper>,
    );

    const arr = [];
    cy.get("div").each(($div) => {
      console.log("INDEX:", arr.push($div) - 1, "DIV: ", $div);
    });

    cy.get(userByTestId)
      .should("exist")
      .and("have.class", user)
      .and("have.css", "font-size", "20px")
      .and(
        "have.css",
        "text-decoration",
        `underline solid ${primary_text_color_dark}`,
      )
      .and("have.css", "margin", "6px 0px 0px")
      .and("have.css", "color", primary_text_color_dark);

    cy.get("div")
      .eq(2)
      .should("have.class", user_title)
      .and("have.css", "margin", "10px 0px 0px")
      .and("have.text", "Marry Blood");

    buttonCypress(0, primary_text_color_dark, "6px 15px");
    cy.get("button")
      .eq(0)
      /* btn class */
      .should("have.class", btn)
      .and("have.css", "margin", "5px 0px 0px")
      /*outline class */
      .should("have.class", outline)
      .and("have.css", "border", `1px solid ${primary_text_color_dark}`)
      .and("have.css", "color", primary_text_color_dark)
      .and(
        "have.css",
        "background",
        `${black} none repeat scroll 0% 0% / auto padding-box border-box`,
      )
      /*size-m class */
      .should("have.class", size_m)
      .and("have.css", "font", '16px / 24px consolas, "Times New Roman", serif')
      .and("have.text", "read more")
      .click();
  });
});
