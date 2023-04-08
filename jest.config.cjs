module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: [
        "/node_modules/(?!.*\\.js$)",
        "/assets/"
      ],
    setupFilesAfterEnv: ['./src/tests/setupTests.ts'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.ts"
      }
  };
