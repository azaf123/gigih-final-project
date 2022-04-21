module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",

  ],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "linebreak-style": 0,
    /* eslint-disable import/no-unresolved */
    "import/no-unresolved": 0,
    "arrow-body-style": ["error", "always"],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
  },
};
