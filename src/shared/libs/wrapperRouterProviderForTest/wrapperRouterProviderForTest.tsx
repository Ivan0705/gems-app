import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "../../../app/providers/store_provider/ui/StoreProvider";

export const wrapperRouterProviderForTest = (Component: ReactNode) => {
  return (
    <BrowserRouter>
      <StoreProvider>{Component}</StoreProvider>
    </BrowserRouter>
  );
};
