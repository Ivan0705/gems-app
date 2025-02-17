import { DarkWrapper } from "../../../helper/themeWrapper/DarkWrapper";
import { mount } from "cypress/react18";
import { UserInfo } from "@/entities/users";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import { userInfo } from "../../../../consts/classes/userInfoById";
import { userInfoByTestId } from "../../../../data-testid";
import { black, primary_color_dark } from "../../../../consts/colors/rgdColors";

describe("DarkUserInfoOops.cy.tsx", () => {
  it("Test component dark UserInfo", () => {
    mount(
      <BrowserRouter>
        <StoreProvider>
          <DarkWrapper>
            <UserInfo />
          </DarkWrapper>
        </StoreProvider>
      </BrowserRouter>,
    );

    cy.get(userInfoByTestId)
      .should("exist")
      .and("have.class", userInfo)
      .and("have.css", "margin", "0px 0px 0px 5px")
      .and("have.css", "color", primary_color_dark)
      .and("have.css", "background-color", black)
      .and("have.text", "oops");

    cy.get("h1").should("have.text", "oops");
  });
});
