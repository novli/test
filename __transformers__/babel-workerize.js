/*
  Трансформер является оберткой вокруг babel-jest, добавляя обход workerize-loader.
  Оборачивает модуль .worker.js в обычный конструктор.
*/

const babelJest = require('babel-jest'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  process(src, filename, config, options) {
    let text = src;
    if (filename.match(/\.worker\.js/)) {
      text = text.replace(/export\sconst\s/g, 'this.');
      const position = text.indexOf('this.');
      text = [
        text.substr(0, position),
        'export default class {constructor() {',
        text.substr(position),
        '}}',
      ].join('');
    }
    return babelJest.process(text, filename, config, options);
  },
};
