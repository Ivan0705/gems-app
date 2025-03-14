import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents() {},
    baseUrl: "http://localhost:5173",
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      webpackConfig: (config) => ({
        ...config,
        resolve: {
          alias: {
            "@": "src",
          },
        },
      }),
    },
  },
});
