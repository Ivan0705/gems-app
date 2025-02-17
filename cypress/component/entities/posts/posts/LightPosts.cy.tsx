import { mount } from "cypress/react18";
import { LightWrapper } from "../../../helper/themeWrapper/LightWrapper";
import { ThemeProvider } from "@/app/providers/theme_provider/ui/ThemeProvider";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import { Posts } from "@/entities/posts";

describe("LightPosts.cy.tsx", () => {
  it("Component Posts testing...", () => {
    cy.intercept("GET", "/posts*");
    mount(
      <BrowserRouter>
        <ThemeProvider>
          <StoreProvider>
            <LightWrapper>
              <Posts />
            </LightWrapper>
          </StoreProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );
  });
});
