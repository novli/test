module.exports = {
  'custom-property-empty-line-before': [
    'always',
    {
      except: [
        'first-nested',
        'after-custom-property',
      ],
      ignore: [
        'after-comment',
      ],
    },
  ],
  'custom-property-pattern': null,
  'declaration-block-no-duplicate-properties': true,
  'declaration-block-no-redundant-longhand-properties': [
    true,
    {
      ignoreShorthands: [
        'flex-flow',
      ],
    },
  ],
  'declaration-block-no-shorthand-property-overrides': true,
  'declaration-block-semicolon-newline-after': 'always',
  'declaration-block-semicolon-newline-before': null,
  'declaration-block-semicolon-space-after': null,
  'declaration-block-semicolon-space-before': 'never',
  'declaration-block-single-line-max-declarations': null,
  'declaration-block-trailing-semicolon': 'always',
  'declaration-colon-newline-after': null,
  'declaration-colon-space-after': 'always-single-line',
  'declaration-colon-space-before': 'never',
  'declaration-empty-line-before': [
    'always',
    {
      except: [
        'first-nested',
        'after-declaration',
      ],
      ignore: [
        'after-comment',
      ],
    },
  ],
  'declaration-property-unit-blacklist': null,
  'declaration-property-unit-whitelist': null,
  'declaration-property-value-blacklist': null,
  'declaration-property-value-whitelist': null,
  'no-unknown-animations': true,
  'property-blacklist': null,
  'property-case': 'lower',
  'property-no-unknown': [
    true,
    {
      ignoreProperties: [
        'font-icon',
      ],
    },
  ],
  'property-no-vendor-prefix': true,
  'property-whitelist': null,
};
