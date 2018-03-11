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
const absoluteElements = `(__${camelCase})`;
const elements = `(_${camelCase})`;
const successorBlocks = '([A-Z][a-z0-9]{1,11})';

module.exports = {
  'order/order': [
    'custom-properties',
    'dollar-variables',
    'declarations',
    'at-rules',
    {
      type: 'rule',
      selector: new RegExp(`^${type}&$`), // div& = 11
    },
    {
      type: 'rule',
      selector: new RegExp(`^&${pseudoClassesModifiers}+(${line}&${pseudoClassesModifiers}+)+$`), // &:hover\n&.-modifier = 20
    },
    {
      type: 'rule',
      selector: new RegExp(`^&${modifiers}+$`), // &.-modifier = 20
    },
    {
      type: 'rule',
      selector: new RegExp(`^&${pseudoClasses}+$`), // &:hover = 20
    },
    {
      type: 'rule',
      selector: new RegExp(`^&:matches\\(${pseudoClassesModifiers}+(${comma}${pseudoClassesModifiers})*\\)$`), // &:matches(:first-child, .-modifier) = 30
    },
    {
      type: 'rule',
      selector: new RegExp(`^&:not\\(${pseudoClassesModifiers}+(${comma}${pseudoClassesModifiers})*\\)$`), // &:not(:first-child, .-modifier) = 30
    },
    {
      type: 'rule',
      selector: new RegExp(`^&${pseudoClassesModifiers}*${sibling}&${pseudoClassesModifiers}*$`), // &.-modifier + &:hover = 40
    },
    {
      type: 'rule',
      selector: new RegExp(`^${type}${child}&$`), // div > & = 11
    },
    {
      type: 'rule',
      selector: new RegExp(`^${classes}+${child}&$`), // .block > & = 20
    },
    {
      type: 'rule',
      selector: new RegExp(`^${type}${classes}+${child}&$`), // div.block > & = 21
    },
    {
      type: 'rule',
      selector: new RegExp(`^${classes}${pseudoClassesModifiers}${child}&`), // .block.-modifier > & = 30
    },
    {
      type: 'rule',
      selector: new RegExp(`^${classes}:matches\\(${pseudoClassesModifiers}+(${comma}${pseudoClassesModifiers})*\\)${child}&`), // .block:matches(:first-child, .-modifier) > & = 40
    },
    {
      type: 'rule',
      selector: new RegExp(`^${classes}:not\\(${pseudoClassesModifiers}+(${comma}${pseudoClassesModifiers})*\\)${child}&`), // .block:not(:first-child, .-modifier) > & = 40
    },
    {
      type: 'rule',
      selector: new RegExp(`^${type}${ancestor}+${child}&$`), // div^& > & = 21
    },
    {
      type: 'rule',
      selector: new RegExp(`^${ancestor}${pseudoClassesModifiers}${child}&`), // ^&.-modifier > & = 30
    },
    {
      type: 'rule',
      selector: new RegExp(`^${ancestor}:matches\\(${pseudoClassesModifiers}+(${comma}${pseudoClassesModifiers})*\\)${child}&`), // ^&:matches(:first-child, .-modifier) > & = 40
    },
    {
      type: 'rule',
      selector: new RegExp(`^${ancestor}:not\\(${pseudoClassesModifiers}+(${comma}${pseudoClassesModifiers})*\\)${child}&`), // ^&:not(:first-child, .-modifier) > & = 40
    },
    {
      type: 'rule',
      selector: new RegExp(`^&${pseudoElements}(${line}&${pseudoElements})+$`), // &::before,\n&::after = 11
    },
    {
      type: 'rule',
      selector: new RegExp(`^&${pseudoElements}+$`), // &::before = 11
    },
    {
      type: 'rule',
      selector: new RegExp(`^${type}$`), // div = 11
    },
    {
      type: 'rule',
      selector: new RegExp(`^&${child}${type}$`), // & > div = 11
    },
    {
      type: 'rule',
      selector: new RegExp(`^&${absoluteElements}$`), // &__element = 10
    },
    {
      type: 'rule',
      selector: new RegExp(`^&${elements}$`), // &_element = 10
    },
    {
      type: 'rule',
      selector: new RegExp(`^&${successorBlocks}$`), // &Block = 10
    },
    'rules',
  ],
  'order/properties-order': [
    'position',
    'top',
    'right',
    'bottom',
    'left',
    'z-index',
    'display',
    'visibility',
    'flex',
    'flex-grow',
    'flex-shrink',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-wrap',
    'align-content',
    'align-items',
    'align-self',
    'justify-content',
    'order',
    'float',
    'clear',
    'overflow',
    'overflow-x',
    'overflow-y',
    'overflow-scrolling',
    'clip',
    'box-sizing',
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'min-width',
    'min-height',
    'max-width',
    'max-height',
    'width',
    'height',
    'outline',
    'outline-width',
    'outline-style',
    'outline-color',
    'outline-offset',
    'border',
    'border-spacing',
    'border-collapse',
    'border-width',
    'border-style',
    'border-color',
    'border-top',
    'border-top-width',
    'border-top-style',
    'border-top-color',
    'border-right',
    'border-right-width',
    'border-right-style',
    'border-right-color',
    'border-bottom',
    'border-bottom-width',
    'border-bottom-style',
    'border-bottom-color',
    'border-left',
    'border-left-width',
    'border-left-style',
    'border-left-color',
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',
    'border-image',
    'border-image-source',
    'border-image-slice',
    'border-image-width',
    'border-image-outset',
    'border-image-repeat',
    'border-top-image',
    'border-right-image',
    'border-bottom-image',
    'border-left-image',
    'border-corner-image',
    'border-top-left-image',
    'border-top-right-image',
    'border-bottom-right-image',
    'border-bottom-left-image',
    'background',
    'background-color',
    'background-image',
    'background-attachment',
    'background-position',
    'background-position-x',
    'background-position-y',
    'background-clip',
    'background-origin',
    'background-size',
    'background-repeat',
    'box-decoration-break',
    'box-shadow',
    'color',
    'table-layout',
    'caption-side',
    'empty-cells',
    'list-style',
    'list-style-position',
    'list-style-type',
    'list-style-image',
    'quotes',
    'content',
    'font-icon',
    'counter-increment',
    'counter-reset',
    'writing-mode',
    'vertical-align',
    'text-align',
    'text-align-last',
    'text-decoration',
    'text-emphasis',
    'text-emphasis-position',
    'text-emphasis-style',
    'text-emphasis-color',
    'text-indent',
    'text-justify',
    'text-outline',
    'text-transform',
    'text-wrap',
    'text-overflow',
    'text-overflow-ellipsis',
    'text-overflow-mode',
    'text-shadow',
    'white-space',
    'word-spacing',
    'word-wrap',
    'word-break',
    'tab-size',
    'hyphens',
    'letter-spacing',
    'font',
    'font-weight',
    'font-style',
    'font-variant',
    'font-size-adjust',
    'font-stretch',
    'font-size',
    'font-family',
    'src',
    'line-height',
    'opacity',
    'interpolation-mode',
    'filter',
    'resize',
    'cursor',
    'nav-index',
    'nav-up',
    'nav-right',
    'nav-down',
    'nav-left',
    'transition',
    'transition-delay',
    'transition-timing-function',
    'transition-duration',
    'transition-property',
    'transform',
    'transform-origin',
    'animation',
    'animation-name',
    'animation-duration',
    'animation-play-state',
    'animation-timing-function',
    'animation-delay',
    'animation-iteration-count',
    'animation-direction',
    'animation-fill-mode',
    'pointer-events',
    'unicode-bidi',
    'direction',
    'columns',
    'column-span',
    'column-width',
    'column-count',
    'column-fill',
    'column-gap',
    'column-rule',
    'column-rule-width',
    'column-rule-style',
    'column-rule-color',
    'break-before',
    'break-inside',
    'break-after',
    'page-break-before',
    'page-break-inside',
    'page-break-after',
    'orphans',
    'widows',
    'zoom',
    'max-zoom',
    'min-zoom',
    'user-zoom',
    'orientation',
    'user-select',
    'fill',
    'stroke',
  ],
};
