/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-vue/scss'],
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-scss'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    /** Font icons */
    'font-family-no-missing-generic-family-keyword': null,

    /** SCSS **/
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'scss/at-mixin-pattern': null,
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'custom-property-pattern': null,
    'annotation-no-unknown': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'import-notation': 'string',

    /** Bulma **/
    'function-name-case': null,
    'scss/dollar-variable-pattern': null,
    'no-duplicate-selectors': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['findColorInvert', 'nth', 'v-bind'],
      },
    ],

    /** Vuejs **/
    'custom-property-empty-line-before': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['/^v-deep/'],
      },
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['/^deep/', '/^slotted/', '/^global/'],
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        ignoreFunctions: ['v-bind'],
      },
    ],
  },
}
