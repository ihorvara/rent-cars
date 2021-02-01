const ruleState = {
  off: 0,
  warn: 1,
  error: 2,
};

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jest/recommended",
  ],
  rules: {
    "no-alert": ruleState.error,
    "no-debugger": ruleState.error,
    "@typescript-eslint/no-var-requires": ruleState.off,
    "@typescript-eslint/no-explicit-any": ruleState.off,
    "@typescript-eslint/explicit-module-boundary-types": ruleState.off,
    "@typescript-eslint/triple-slash-reference": ruleState.off,
    "react/react-in-jsx-scope": ruleState.off,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
