const path = require('path');

module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  testMatch: ['**/__tests__/**/*.*(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'esbuild-jest',
      {
        sourcemap: 'both',
      },
    ],
  },
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^@www/(.+)': '<rootDir>/$1',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/file_mock.js',
  },
  globals: {
    'esbuild-jest': {
      tsconfig: path.join(__dirname, 'jest.tsconfig.json'),
      diagnostics: false,
    },
  },
  collectCoverageFrom: ['**/*.{ts|tsx}', '!**/node_modules/**'],
};
