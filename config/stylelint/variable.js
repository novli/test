module.exports = {
  'scss/dollar-variable-colon-newline-after': null,
  'scss/dollar-variable-colon-space-after': 'always',
  'scss/dollar-variable-colon-space-before': 'never',
  'scss/dollar-variable-empty-line-before': [
    'always',
    {
      except: [
        'first-nested',
        'after-dollar-variable',
      ],
      ignore: [
        'after-comment',
      ],
    },
  ],
  'scss/dollar-variable-pattern': [
    /g-.+/,
    {
      ignore: 'local',
    },
  ],
};
