const path = require("path");

module.exports = {
  setupFilesAfterEnv: [path.resolve(__dirname, "./src/setupTests.ts")],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@@/(.*)$": "<rootDir>/src/.umi/$1",
    "^@@/core/umiExports$":
      "<rootDir>/src/fixtures/.umi-test/core/umiExports.ts",
  },
  coveragePathIgnorePatterns: ["/node_modules/", "/.umi/", "src/_tests_"],
};
