import { getByTestId, render } from "@testing-library/react";
import App from "./App";
import renderWithi18next from "@/shared/i18next/ui/renderWithi18next";
import { wrapperRouterProviderForTest } from "@/shared/libs/wrapperRouterProviderForTest/wrapperRouterProviderForTest";

describe("App", () => {
  it("Render windth i18next", async () => {
    const wrappApp = wrapperRouterProviderForTest(<App />);
    render(wrappApp);
    const { container } = renderWithi18next(wrappApp);
    expect(getByTestId(container, "app")).toBeInTheDocument();
  });
});
