module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:vue/vue3-recommended',
    'plugin:md/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
    },
    {
      files: ['*.vue'],
      extends: ['plugin:prettier-vue/recommended', 'prettier'],
    },
  ],
}
