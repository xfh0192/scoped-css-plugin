// https://github.com/webpack-contrib/mini-css-extract-plugin/blob/master/babel.config.js

const MIN_BABEL_VERSION = 7;

module.exports = function(api) {
  api.assertVersion(MIN_BABEL_VERSION);
  api.cache(true);
  
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: true,
          },
        },
      ],
    ],
    plugins: [],
    overrides: [],
  }
};