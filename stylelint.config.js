module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
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
    'declaration-block-no-redundant-longhand-properties': null,

    /** Bulma **/
    'function-name-case': null,
    'scss/dollar-variable-pattern': null,
    'no-duplicate-selectors': null, // TODO

    /** Vuejs **/
    'value-keyword-case': null,
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
