import { mount } from "cypress/react18";
import { UserInfo } from "@/entities/users";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import { LightWrapper } from "../../../helper/themeWrapper/LightWrapper";

describe("LightUserInfoOops.cy.tsx", () => {
  it("Test component light UserInfo", () => {
    cy.intercept("GET", "**/users*", {
      id: 1,
      fixture: "user.json",
      delay: 500,
    });

    mount(
      <BrowserRouter>
        <StoreProvider>
          <LightWrapper>
            <UserInfo />
          </LightWrapper>
        </StoreProvider>
      </BrowserRouter>,
    );

    cy.get("button").should("exist").click();
    cy.should("have.text", "back");
  });
});
