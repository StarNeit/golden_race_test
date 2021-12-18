const nxPreset = require('@nrwl/jest/preset');
const path = require('path');

module.exports = {
  ...nxPreset,
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.js$': 'jest-esm-transformer',
    '^.+\\.(ts|js|html)$': 'jest-preset-angular'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!@cds)(.*)'],
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageReporters: ['html', 'json', 'lcov', 'text', 'clover'],
  passWithNoTests: true,
  reporters: [
    'default',
    path.join(__dirname, 'reporters', 'ticket-number-reporter.js')
  ],
  restoreMocks: true,
  testRunner: 'jest-jasmine2' //TODO: To remove when resolved https://github.com/facebook/jest/issues/11483
};
