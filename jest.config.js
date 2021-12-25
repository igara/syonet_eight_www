const config = require('../../jest.config.js');

module.exports = {
  ...config,
  moduleNameMapper: {
    '^@www/(.+)': '<rootDir>/$1',
    ...config.moduleNameMapper,
  },
};
