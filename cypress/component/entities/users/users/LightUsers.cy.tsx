import { mount } from "cypress/react18";
import { LightWrapper } from "../../../helper/themeWrapper/LightWrapper";
import { Users } from "@/entities/users";
import { ThemeProvider } from "@/app/providers/theme_provider/ui/ThemeProvider";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { BrowserRouter } from "react-router-dom";

describe("Users.cy.tsx", () => {
  it("Component Users testing...", () => {
    cy.intercept("GET", "/users*");
    mount(
      <BrowserRouter>
        <ThemeProvider>
          <StoreProvider>
            <LightWrapper>
              <Users />
            </LightWrapper>
          </StoreProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );
  });
});
