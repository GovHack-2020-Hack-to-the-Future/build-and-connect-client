const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    runtimeCaching,
    dest: 'public',
  },
  target: 'serverless',
  webpack: (config) => {
    config.module.rules.push({
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
      test: /\.graphql$/,
    });

    return config;
  },
});
