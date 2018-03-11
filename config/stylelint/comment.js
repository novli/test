module.exports = {
  'comment-empty-line-before': [
    'always',
    {
      except: [
        'first-nested',
      ],
      ignore: [
        'stylelint-commands',
      ],
    },
  ],
  'comment-no-empty': true,
  'comment-whitespace-inside': 'always',
  'comment-word-blacklist': [
    '/fuck/g',
    '/shit/g',
  ],
  'no-invalid-double-slash-comments': true,
};
