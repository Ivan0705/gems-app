import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { getByTestId, render } from "@testing-library/react";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { SigninBtn } from "./SigninBtn";

describe("SigninBtn", () => {
  it("Render windth i18next", async () => {
    const wrappSiginBtn = wrapperRouterProviderForTest(<SigninBtn />);
    render(wrappSiginBtn);
    const { container } = renderWithi18next(wrappSiginBtn);
    expect(getByTestId(container, "signinBtn")).toBeInTheDocument();
  });
});
