const path = require('path');
const { defaults } = require('jest-config');
const packages = '\\@packages';
const ignorePatterns = [
  `<rootDir>/${packages}/(?:.+?)/dist/`,
  `<rootDir>/${packages}/(?:.+?)/node_modules/`,
];

module.exports = {
  verbose: false,
  rootDir: path.join(__dirname),
  reporters: ['jest-dot-reporter'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  // reporters: ['jest-junit'],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/@packages/**/*.test.{js,jsx}'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testPathIgnorePatterns: ignorePatterns,
  coveragePathIgnorePatterns: ignorePatterns,
  collectCoverageFrom: [
    `${packages}/**/*.{js,jsx}`,
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  // coverageDirectory: '.coverage/',
};
