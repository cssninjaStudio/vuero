module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  rules: {
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-no-unknown': null,
    'no-duplicate-selectors': null,
    'block-no-empty': null,
    'custom-property-empty-line-before': null,
  },
}
