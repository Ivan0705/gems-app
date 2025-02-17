import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
    {
        settings: {
            react: {
                version: "detect",
            },
        },
    },
    {
        plugins: {
            "@typescript-eslint": tseslint.plugin,
            react: eslintReact,
            "react-hooks": eslintReactHooks,
            "react-refresh": eslintReactRefresh,
            prettier: prettierPlugin,
        },
    },
    {
        ignores: ["dist", "storybook-static", "docs", "node_modules", "cypress"],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,

    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2022,
                it: "readonly",
                describe: "readonly",
                cy: "readonly",
            },
            parserOptions: eslintReact.configs.recommended.parserOptions,
        },
    },
    {
        files: ["**/*.{ts,tsx, js, jsx}"],
        rules: {
            ...prettierPlugin.configs.recommended.rules,
            ...eslintConfigPrettier.rules,
            "prettier/prettier": 0,
            "react-refresh/only-export-components": [
                "warn",
                {allowConstantExport: true},
            ],
            "prefer-const": "error",
            "react/jsx-curly-brace-presence": [
                "warn",
                {props: "never", children: "never"},
            ],
            "react/self-closing-comp": ["error", {component: true, html: true}],
            "max-lines": ["warn", {max: 124}],
            "max-params": ["error", 3],
            "@typescript-eslint/no-explicit-any": ["off"],
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                    caughtErrorsIgnorePattern: "^_",
                },
            ],
            "react/function-component-definition": [
                2,
                {
                    namedComponents: "arrow-function",
                    unnamedComponents: "arrow-function",
                },
            ],
        },
    },
);
