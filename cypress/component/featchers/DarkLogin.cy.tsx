import { mount } from "cypress/react18";
import { AdminForm } from "@/features/admin/ui/adminForm/AdminForm";
import { AuthProvider } from "@/app/providers/auth_provider";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "@/app/providers/store_provider/ui/StoreProvider";
import { adminFormByTestId } from "cypress/data-testid";
import { DarkWrapper } from "../helper/themeWrapper/DarkWrapper";

describe("DarkSignIn.cy.jsx", () => {
  it("Testing sign component", () => {
    mount(
      <BrowserRouter>
        <StoreProvider>
          <AuthProvider>
            <DarkWrapper>
              <AdminForm />
            </DarkWrapper>
          </AuthProvider>
        </StoreProvider>
      </BrowserRouter>,
    );
    cy.get(adminFormByTestId).should("exist");
  });
});
