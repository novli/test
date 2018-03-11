module.exports = {
  'at-rule-blacklist': null,
  'at-rule-empty-line-before': [
    'always',
    {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested',
      ],
      ignore: [
        'after-comment',
      ],
    },
  ],
  'at-rule-no-unknown': [
    true,
    {
      ignoreAtRules: [
        'above',
        'below',
        'between-from',
        'between-to',
        'between',
        'define-mixin',
        'each',
        'else',
        'for',
        'from-width',
        'if',
        'mixin-content',
        'mixin',
        'to-width',
      ],
    },
  ],
  'at-rule-no-vendor-prefix': true,
  'at-rule-whitelist': null,
  'custom-media-pattern': null,
  'keyframe-declaration-no-important': true,
  'media-feature-name-blacklist': null,
  'media-feature-name-no-unknown': true,
  'media-feature-name-no-vendor-prefix': true,
  'media-feature-name-whitelist': [
    'max-width',
    'min-width',
    'screen',
  ],
  'no-duplicate-at-import-rules': true,
};
