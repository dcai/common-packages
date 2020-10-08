const path = require('path');
const { defaults } = require('jest-config');
const packages = 'packages';
const ignorePatterns = [
  `<rootDir>/${packages}/(?:.+?)/dist/`,
  `<rootDir>/${packages}/(?:.+?)/webpack.config.js`,
  `<rootDir>/${packages}/(?:.+?)/node_modules/`,
  `<rootDir>/${packages}/(?:.+?)/templates/`,
];

module.exports = {
  verbose: false,
  rootDir: path.join(__dirname),
  reporters: ['jest-dot-reporter'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // reporters: ['jest-junit'],
  // snapshotSerializers: ['enzyme-to-json/serializer'],
  testMatch: ['**/packages/**/*.test.{js,jsx,ts,tsx}'],
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
