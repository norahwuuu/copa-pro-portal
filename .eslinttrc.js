// .eslintrc.js
module.exports = {
  extends: [require.resolve("@umijs/fabric/dist/eslint")],
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
};
