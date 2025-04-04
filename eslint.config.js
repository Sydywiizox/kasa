import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import path from "path";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [
            ["@src", path.resolve(__dirname, "./src")],
            ["@assets", path.resolve(__dirname, "./src/assets")],
            ["@components", path.resolve(__dirname, "./src/components")],
            ["@pages", path.resolve(__dirname, "./src/pages")],
            ["@data", path.resolve(__dirname, "./src/data")],
            ["@hooks", path.resolve(__dirname, "./src/hooks")],
            ["@variables", path.resolve(__dirname, "./src/variables")],
          ],
          extensions: [".js", ".jsx", ".json"],
        },
      },
    },
  },
];
