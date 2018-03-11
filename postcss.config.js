const color = require('color'); // eslint-disable-line import/no-extraneous-dependencies
const path = require('path');

module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-for': {},
    'postcss-each': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-conditionals': {},
    'postcss-easy-media-query': {},

    'postcss-functions': {
      functions: {
        alpha: (value, percent) => color(value).alpha(percent),
        ceil: value => Math.ceil(value),
        darken: (value, percent) => color(value).darken(percent),
        floor: value => Math.floor(value),
        round: value => Math.round(value),
      },
    },
    'postcss-calc': {
      precision: 2,
      mediaQueries: true,
    },
    'postcss-media-fn': {},
    'postcss-media-minmax': {},
    autoprefixer: {},

    'postcss-quantity-queries': {},
    'postcss-selector-not': {},
    'postcss-selector-matches': {},
    'postcss-nested-selectors': {},
    'postcss-nested': {},
  },
};
