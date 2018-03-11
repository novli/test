const lowerCase = '([a-z][a-z0-9]{1,11})';
const camelCase = `(${lowerCase}([A-Z][a-z0-9]{1,11}){0,2})`;
const type = '([a-z]+)';
const line = '(,\\n\\s*)';
const comma = '(,\\s*)';
const sibling = '(\\s(\\+|~)\\s)';
const child = '(\\s|(\\s>\\s))';
const ancestor = '(\\^+&)';
const localClasses = `(.${camelCase})`;
const globalClasses = `(:global\\(${localClasses}\\))`;
const classes = `(${localClasses}|${globalClasses})`;
const pseudoClasses = '(:[a-z-]+)';
const localModifiers = `(\\.-{1,2}${camelCase})`;
const globalModifiers = `(:global\\(${localModifiers}\\))`;
const modifiers = `(${localModifiers}|${globalModifiers})`;
const pseudoElements = '(::[a-z-]+)';
const pseudoClassesModifiers = `(${pseudoClasses}|${modifiers})`;
const elements = `(_{1,2}${camelCase})`;
const successorBlocks = '([A-Z][a-z0-9]{1,11})';

const selectors = [
  `${type}&`,
  `&${pseudoClassesModifiers}+(${line}&${pseudoClassesModifiers}+)*`,
  `&:matches\\(${pseudoClassesModifiers}+(${comma}${pseudoClassesModifiers})*\\)`,
  `&:not\\(${pseudoClassesModifiers}+(${comma}${pseudoClassesModifiers})*\\)`,
  `&${pseudoClassesModifiers}*${sibling}&${pseudoClassesModifiers}*`,
  `${type}${child}&`,
  `.${classes}+${child}&`,
  `${type}(${classes}+|${ancestor})${child}&`,
  `(${classes}+|${ancestor})${pseudoClassesModifiers}${child}&`,
  `(${classes}+|${ancestor}):matches\\(${pseudoClassesModifiers}+(${comma}${pseudoClassesModifiers})*\\)${child}&`,
  `(${classes}+|${ancestor}):not\\(${pseudoClassesModifiers}+(${comma}${pseudoClassesModifiers})*\\)${child}&`,
  `&${pseudoElements}(${line}&${pseudoElements})*`,
  `${type}`,
  `&${child}${type}`,
  `&${elements}`,
  `&${successorBlocks}`,
];

module.exports = {
  'max-nesting-depth': 5,
  'no-descending-specificity': null,
  'no-duplicate-selectors': true,
  'selector-attribute-brackets-space-inside': 'never',
  'selector-attribute-operator-blacklist': null,
  'selector-attribute-operator-space-after': 'always',
  'selector-attribute-operator-space-before': 'always',
  'selector-attribute-operator-whitelist': null,
  'selector-attribute-quotes': 'always',
  'selector-class-pattern': [
    new RegExp(`^(${camelCase}(_{1,2}${camelCase})?|-${camelCase})$`),
    {
      resolveNestedSelectors: true,
    },
  ],
  'selector-combinator-space-after': 'always',
  'selector-combinator-space-before': 'always',
  'selector-descendant-combinator-no-non-space': true,
  'selector-id-pattern': new RegExp(`^${camelCase}$`),
  'selector-list-comma-newline-after': 'always-multi-line',
  'selector-list-comma-newline-before': null,
  'selector-list-comma-space-after': 'always-single-line',
  'selector-list-comma-space-before': 'never',
  'selector-max-attribute': 1,
  'selector-max-class': null,
  'selector-max-combinators': null,
  'selector-max-compound-selectors': 5,
  'selector-max-empty-lines': 0,
  'selector-max-id': 0,
  'selector-max-specificity': [
    '1,2,1',
    {
      ignoreSelectors: [
        '/::/',
        '/:/',
        '/._/',
      ],
    },
  ],
  'selector-max-type': [
    1,
    {
      ignoreTypes: [
        '/^^+$/',
      ],
    },
  ],
  'selector-max-universal': 1,
  'selector-nested-pattern': new RegExp(`^(${selectors.join('|')})$`),
  'selector-no-qualifying-type': [
    true,
    {
      ignore: [
        'class',
      ],
    },
  ],
  'selector-no-vendor-prefix': true,
  'selector-pseudo-class-blacklist': null,
  'selector-pseudo-class-case': 'lower',
  'selector-pseudo-class-no-unknown': [
    true,
    {
      ignorePseudoClasses: [
        'at-least',
        'at-most',
        'between',
        'exactly',
        'global',
        'local',
      ],
    },
  ],
  'selector-pseudo-class-parentheses-space-inside': 'never',
  'selector-pseudo-class-whitelist': null,
  'selector-pseudo-element-case': 'lower',
  'selector-pseudo-element-colon-notation': 'double',
  'selector-pseudo-element-no-unknown': [
    true,
    {
      ignorePseudoElements: [],
    },
  ],
  'selector-type-case': 'lower',
  'selector-type-no-unknown': [
    true,
    {
      ignoreTypes: [
        '/^^+$/',
      ],
    },
  ],
};
