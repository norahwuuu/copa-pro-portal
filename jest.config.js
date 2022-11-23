module.exports = {
  setupFiles: ["<rootDir>/src/_tests_/setup.js"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@@/(.*)$": "<rootDir>/src/.umi/$1",
    "^@@/core/umiExports$":
      "<rootDir>/src/fixtures/.umi-test/core/umiExports.ts",
  },
};
