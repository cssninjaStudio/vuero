module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],

  rules: {
    /** Font icons */
    'font-family-no-missing-generic-family-keyword': null,

    /** SCSS **/
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,

    /** Bulma **/
    'function-name-case': null,
    'no-duplicate-selectors': null, // TODO
    'no-duplicate-selectors': null, // TODO

    /** Vuejs **/
    'value-keyword-case': null,
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
  },
}
