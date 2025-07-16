import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Your existing Next.js + TypeScript rules
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add Prettier plugin
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "off", // Show Prettier issues as ESLint errors
    },
  },

  // Disable rules that conflict with Prettier
  eslintConfigPrettier,
];

export default eslintConfig;
