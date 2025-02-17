import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./shared/i18next/config/i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "./shared/i18next/config/i18next";
import App from "./app/App";
import { ThemeProvider } from "./app/providers/theme_provider/ui/ThemeProvider";
import { StoreProvider } from "./app/providers/store_provider/ui/StoreProvider";
import { ErrorBoundary } from "./app/providers/error_boundary";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter
      basename={process.env.NODE_ENV === "production" ? "/gems-app" : "/"}
    >
      <ThemeProvider>
        <StoreProvider>
          <ErrorBoundary>
            <I18nextProvider i18n={i18n}>
              <App />
            </I18nextProvider>
          </ErrorBoundary>
        </StoreProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
