// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import unusedImports from 'eslint-plugin-unused-imports';

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
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@stylistic/quotes': 'off',
      '@stylistic/semi': 'off',
      'no-console': 'error',
      '@stylistic/indent': 'off',
      'vue/multi-word-component-names': 'off',
      'unused-imports/no-unused-imports': 'error',
    },
  },
]);
