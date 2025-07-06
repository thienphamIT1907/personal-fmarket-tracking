// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  { ignores: ['**/node_modules', '**/dist', '**/out'] },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-console': 'error',
    },
  },
  {
    files: ['**/*.vue', '**/*.vue'],
    rules: {
      '@stylistic/quotes': 'off',
      '@stylistic/semi': 'off',
      'no-console': 'error',
      '@stylistic/indent': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
])
