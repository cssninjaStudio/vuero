const { hsl } = require('bulma-css-vars')

const appColors = {
  white: '#fff',
  primary: hsl(153, 48, 49), // '#41b883',
  dark: hsl(226, 34, 24), // '#283252',
  link: hsl(229, 53, 53), // '#485fc7',
  info: hsl(200, 97, 45), // '#039be5',
  success: hsl(164, 95, 43), // '#06d6a0',
  warning: hsl(35, 95, 62), // '#faae42',
  danger: hsl(341, 79, 53), // '#e62965',
}

module.exports = {
  jsOutputFile: 'src/scss/bulma-generated/bulma-colors.ts',
  sassOutputFile: 'src/scss/bulma-generated/generated-vars.sass',
  cssFallbackOutputFile: 'src/scss/bulma-generated/generated-fallback.css',
  colorDefs: appColors,
  sassEntryFile: 'src/scss/main.scss',
  transition: null,
}
