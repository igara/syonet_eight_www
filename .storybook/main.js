const path = require('path');
const mainConfig = require('../../../.storybook/main');

module.exports = {
  ...mainConfig,
  stories: ['../../**/components/**/*.stories.mdx'],
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@www': path.resolve(__dirname, '../'),
      '@design_system': path.resolve(__dirname, '../../syonet_eight_design_system'),
      '@emotion/core': path.resolve(__dirname, '../../../node_modules/@emotion/react'),
      'emotion-theming': path.resolve(__dirname, '../../../node_modules/@emotion/react'),
    };

    return config;
  },
};
