/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  // Values generated or recommended by ts-jest
  preset: "ts-jest",
  testEnvironment: "node",

  // All imported modules in your tests should be mocked automatically
  // automock: false,

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  collectCoverage: false,

  // A path to a module which exports an async function that is triggered once before all test suites
  globalSetup: "<rootDir>/global-test-setup.ts",

  // The paths to modules that run some code to configure or set up the testing environment before each test
  // setupFiles: [],

  displayName: { name: "api-utils-core", color: "magenta" },

  // The root directory that Jest should scan for tests and modules within
  rootDir: "./tests",

  // https://huafu.github.io/ts-jest/user/config/tsConfig
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
}

// module.exports = config
export default config
