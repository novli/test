const color = require('color'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  parser: 'sugarss',
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-each': {},
    'postcss-for': {},
    'postcss-simple-vars': {},
    'postcss-conditionals': {},
    'postcss-easy-media-query': {},

    'postcss-functions': {
      functions: {
        darken: (value, percent) => color(value).darken(percent),
        alpha: (value, percent) => color(value).alpha(percent),
        floor: value => Math.floor(value),
        ceil: value => Math.ceil(value),
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
