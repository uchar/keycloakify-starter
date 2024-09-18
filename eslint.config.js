import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        plugins: {
            "react-refresh": reactRefresh
        },
        rules: {
            "react-refresh/only-export-components": "warn"
        }
    },
    {
        rules: {
            "react/react-in-jsx-scope": "off"
        }
    },
    {
        files: ["**/*.stories.*"],
        rules: {
            "import/no-anonymous-default-export": "off"
        }
    }
];
