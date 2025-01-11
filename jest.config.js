module.exports = {
    moduleNameMapper: {
      '^@components/(.*)$': '<rootDir>/src/components/$1',
    },
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    testMatch: [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
  };