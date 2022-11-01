// .eslintrc.js
module.exports = {
  extends: [require.resolve("@umijs/fabric/dist/eslint")],
  rules: {
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ], //should add ".ts" if typescript project
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
};
