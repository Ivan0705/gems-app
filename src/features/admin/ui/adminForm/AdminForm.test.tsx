import { render, getByTestId } from "@testing-library/react";
import { AdminForm } from "./AdminForm";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";

describe("Testing AdminForm.test.tsx", () => {
  it("Rendering AdminForm", () => {
    const wrappAdminForm = wrapperRouterProviderForTest(<AdminForm />);
    render(wrappAdminForm);
    const { container } = renderWithi18next(wrappAdminForm);
    expect(getByTestId(container, "adminForm")).toBeInTheDocument();
  });
});
