module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/script-setup-uses-vars': 'error',

    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/anchor-has-content': 'off',
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
    $ref: 'writable',
    $computed: 'writable',
    $raw: 'readonly',
    withDefaults: 'readonly',
    $fromRefs: 'readonly',
  },
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      extends: ['plugin:md/recommended', 'prettier'],
    },
  ],
}
