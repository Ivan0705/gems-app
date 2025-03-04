import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { getByTestId, render } from "@testing-library/react";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { SignoutBtn } from "./SignoutBtn";

describe("SignoutBtn", () => {
  it("Render windth i18next", async () => {
    const wrappSigoutBtn = wrapperRouterProviderForTest(<SignoutBtn />);
    render(wrappSigoutBtn);
    const { container } = renderWithi18next(wrappSigoutBtn);
    expect(getByTestId(container, "signoutBtn")).toBeInTheDocument();
  });
});
