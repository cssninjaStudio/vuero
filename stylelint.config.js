module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-scss'],
  
  rules: {
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-no-unknown': null,
    'no-descending-specificity': null, // TODO
    'no-duplicate-selectors': null, // TODO
    'function-name-case': null, // bulma
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ["/^v-deep/"]
      }
    ],
  },
}
