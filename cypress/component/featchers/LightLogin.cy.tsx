import { mount } from "cypress/react18";
import { LightWrapper } from "../helper/themeWrapper/LightWrapper";
import { AdminForm } from "@/features/admin/ui/adminForm/AdminForm";
import { AuthProvider } from "@/app/providers/auth_provider";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { adminFormByTestId } from "cypress/data-testid";

describe("LightSignIn.cy.jsx", () => {
  it("Testing sign component", () => {
    mount(
      <BrowserRouter>
        <StoreProvider>
          <AuthProvider>
            <LightWrapper>
              <AdminForm />
            </LightWrapper>
          </AuthProvider>
        </StoreProvider>
      </BrowserRouter>,
    );
    cy.get(adminFormByTestId).should("exist");
  });
});
