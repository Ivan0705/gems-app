///<reference types="vitest"/>
///<reference types="vite/client"/>
/// <reference types="vite-plugin-svgr/client" />

import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";
import dotenv from "dotenv";

dotenv.config();
const url = process.env.VITE_REACT_API_URL;
const baseUrl = process.env.VITE_REACT_API_BASE_URL;

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? url : baseUrl,
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
        svgoConfig: {
          floatPrecision: 2,
        },
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: "**/*.svg?react",
    }),
  ],
  optimizeDeps: {
    entries: ["cypress/**/*"],
  },
  server: {
    warmup: {
      clientFiles: ["**/cypress/support/component.ts"],
    },
  },
  test: {
    deps: {
      optimizer: {
        web: {
          include: ["@react-leaflet/core"],
        },
      },
    },

    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setupTest.ts",
    mockReset: true,
    reporters: ["verbose"],
    testTimeout: 100,
    css: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
