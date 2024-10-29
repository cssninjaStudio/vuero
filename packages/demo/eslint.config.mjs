import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      'documentation',
      'build',
      'dist',
      'coverage',
      'node_modules',
      'public',
      'README.md',
      'CHANGELOG.md',
      '**/bulma-generated',
      '**/bulma-colors.js',
      '**/types/components.d.ts',
      '**/types/router.d.ts',
      '**/types/imports.d.ts',
      '**/components-meta.ts',
    ],
  },
  {
    files: [
      '**/*.vue',
    ],
    rules: {
      'ts/no-use-before-define': 'off',
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.vue',
    ],
    rules: {
      'no-console': 'off',
      'no-alert': 'off',
    },
  },
  {
    files: [
      '**/scripts/**/*.ts',
      '**/server/**/*.ts',
      '**/vite-plugin/**/*.ts',
      '**/vite.config.ts',
    ],
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
)
