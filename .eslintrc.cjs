const stylistic = require('@stylistic/eslint-plugin')

const customized = stylistic.configs.customize({
  indent: 2,
  quotes: 'single',
  semi: false,
})
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.md'],
      parser: 'markdown-eslint-parser',
      extends: ['plugin:md/recommended'],
      rules: {},
    },
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      plugins: ['@stylistic'],
      extends: [
        'eslint:recommended',
        // 'plugin:@typescript-eslint/eslint-recommended',
        // 'plugin:prettier-vue/recommended',
        // 'prettier',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
      },
      rules: {
        ...customized.rules,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off', // auto-imports are not recognized
      },
    },
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint', '@stylistic'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        // 'plugin:prettier-vue/recommended',
        // 'prettier',
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
      rules: {
        ...customized.rules,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off', // auto-imports are not recognized

        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.vue'],
      plugins: ['@typescript-eslint', '@stylistic'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vuejs-accessibility/recommended',
        // 'plugin:prettier-vue/recommended',
        // 'prettier',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
      rules: {
        ...customized.rules,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off', // auto-imports are not recognized

        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],

        'vue/script-setup-uses-vars': 'error',
        'vue/multi-word-component-names': 'off',
        // vue 3.3 allows setup props destructuring
        'vue/no-setup-props-destructure': 'off',
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: {
              max: 2,
            },
            multiline: {
              max: 1,
            },
          },
        ],

        'vuejs-accessibility/form-control-has-label': 'off',
        'vuejs-accessibility/label-has-for': 'off',
        'vuejs-accessibility/anchor-has-content': 'off',
      },
    },
    {
      files: ['*.md.vue'],
      plugins: ['@typescript-eslint', '@stylistic'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:vue/vue3-recommended',
        // 'plugin:vuejs-accessibility/recommended',
        // 'plugin:prettier-vue/recommended',
        // 'prettier',
      ],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        tsconfigRootDir: __dirname,
      },
      rules: {
        ...customized.rules,
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-unused-vars': 'off',
        'no-undef': 'off', // auto-imports are not recognized

        '@typescript-eslint/no-unused-vars': ['off'],
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
        ],

        'vue/script-setup-uses-vars': 'error',
        'vue/multi-word-component-names': 'off',
        // vue 3.3 allows setup props destructuring
        'vue/no-setup-props-destructure': 'off',
        'vue/max-attributes-per-line': [
          'error',
          {
            singleline: {
              max: 2,
            },
            multiline: {
              max: 1,
            },
          },
        ],

        'vuejs-accessibility/form-control-has-label': 'off',
        'vuejs-accessibility/label-has-for': 'off',
        'vuejs-accessibility/anchor-has-content': 'off',
      },
    },
  ],
}
