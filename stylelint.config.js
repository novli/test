const atrule = require('./config/stylelint/atrule');
const block = require('./config/stylelint/block');
const color = require('./config/stylelint/color');
const comment = require('./config/stylelint/comment');
const font = require('./config/stylelint/font');
const func = require('./config/stylelint/func');
const general = require('./config/stylelint/general');
const order = require('./config/stylelint/order');
const property = require('./config/stylelint/property');
const selector = require('./config/stylelint/selector');
const sugarss = require('./config/stylelint/sugarss');
const value = require('./config/stylelint/value');
const variable = require('./config/stylelint/variable');

module.exports = {
  plugins: [
    'stylelint-order',
    'stylelint-scss',
  ],
  rules: Object.assign(
    {},
    atrule,
    block,
    color,
    comment,
    font,
    func,
    general,
    order,
    property,
    selector,
    value,
    variable,
    sugarss,
  ),
};
