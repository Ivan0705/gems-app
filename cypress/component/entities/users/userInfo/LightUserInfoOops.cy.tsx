import { mount } from "cypress/react18";
import { UserInfo } from "@/entities/users";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import { LightWrapper } from "../../../helper/themeWrapper/LightWrapper";
import { userInfo } from "../../../../consts/classes/userInfoById";
import { userInfoByTestId } from "../../../../data-testid";
import {
  black,
  primary_color_light,
} from "../../../../consts/colors/rgdColors";

describe("LightUserInfoOops.cy.tsx", () => {
  it("Test component light UserInfo", () => {
    mount(
      <BrowserRouter>
        <StoreProvider>
          <LightWrapper>
            <UserInfo />
          </LightWrapper>
        </StoreProvider>
      </BrowserRouter>,
    );

    cy.get(userInfoByTestId)
      .should("exist")
      .and("have.class", userInfo)
      .and("have.css", "margin", "0px 0px 0px 5px")
      .and("have.css", "color", primary_color_light)
      .and("have.css", "background-color", black)
      .and("have.text", "oops");

    cy.get("h1").should("have.text", "oops");
  });
});
