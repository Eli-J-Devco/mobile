/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
    'require-await': 'error',
    eqeqeq: ['error', 'always'],
    'prefer-const': [
      'error',
      {destructuring: 'all', ignoreReadBeforeAssign: true},
    ],
    '@typescript-eslint/no-inferrable-types': 'error',
    'padding-line-between-statements': [
      'error',
      {blankLine: 'always', prev: '*', next: 'return'},
      {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
    ],
    'no-extra-parens': ['error', 'all', {nestedBinaryExpressions: false}],
    'no-console': 'error',
  },
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      rules: {
        'react-native/no-color-literals': 'off',
        'react-native/sort-styles': 'off',
        'no-extra-parens': 'off',
        'react-native/no-raw-text': 'off',
      },
    },
  ],
};
