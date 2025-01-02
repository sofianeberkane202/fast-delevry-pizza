export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off", // Disable the rule for React 17+
    "react/jsx-uses-react": "off", // Also, disable this for React 17+
    "react/jsx-uses-vars": "warn", // Keep the vars rule to catch unused variables
  },
  settings: {
    react: {
      version: "detect", // Automatically detect React version
    },
  },
};
