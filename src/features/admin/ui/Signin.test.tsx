import { getByTestId, render } from "@testing-library/react";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";
import { SignIn } from "./SignIn";

describe("SignIn", () => {
  it("Render windth i18next", async () => {
    const wrappSigin = wrapperRouterProviderForTest(<SignIn />);
    render(wrappSigin);
    const { container } = renderWithi18next(wrappSigin);
    expect(getByTestId(container, "signin")).toBeInTheDocument();
  });
});
