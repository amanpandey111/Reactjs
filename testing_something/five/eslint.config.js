import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser },
rules: {
      // ...other rules...
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }]
    }
},
  pluginReact.configs.flat.recommended,
]);
