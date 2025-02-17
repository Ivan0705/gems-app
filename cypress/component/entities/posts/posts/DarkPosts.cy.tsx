import { mount } from "cypress/react18";
import { DarkWrapper } from "../../../helper/themeWrapper/DarkWrapper";
import { ThemeProvider } from "@/app/providers/theme_provider/ui/ThemeProvider";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { BrowserRouter } from "react-router-dom";
import { Posts } from "@/entities/posts";

describe("DarkPosts.cy.tsx", () => {
  it("Component Posts testing...", () => {
    cy.intercept("GET", "/posts*");

    mount(
      <BrowserRouter>
        <ThemeProvider>
          <StoreProvider>
            <DarkWrapper>
              <Posts />
            </DarkWrapper>
          </StoreProvider>
        </ThemeProvider>
      </BrowserRouter>,
    );
  });
});
