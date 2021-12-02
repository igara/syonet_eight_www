const path = require('path');

module.exports = {
  stories: ['../../**/components/**/*.stories.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-postcss',
    'storybook-addon-performance/register',
  ],
  typescript: {
    reactDocgen: false,
  },
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
