/** @type {import('prettier').Config} */
const prettierConfig = {
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  plugins: [
    "prettier-plugin-sql",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss",
  ],
};

/** @type {import('prettier-plugin-sql').SqlBaseOptions} */
const prettierPluginSqlConfig = {
  language: "postgresql",
  keywordCase: "upper",
};

const config = {
  ...prettierConfig,
  ...prettierPluginSqlConfig,
};

export default config;
