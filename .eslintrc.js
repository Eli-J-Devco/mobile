module.exports = {
  root: true,
  files: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
    'src/**/*.js',
    'src/**/*.ts',
    'src/**/*.jsx',
    'src/**/*.tsx',
  ],
  parser: '@typescript-eslint/parser',
  // parserOptions: {
  //   ecmaVersion: 2024,
  //   sourceType: 'module',
  // },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/react',
    '@react-native',
  ],
  // rules: {
  //   '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
  //   '@typescript-eslint/no-explicit-any': 'error',
  //   '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
  //   'require-await': 'error',
  //   eqeqeq: ['error', 'always'],
  //   'prefer-const': [
  //     'error',
  //     {destructuring: 'all', ignoreReadBeforeAssign: true},
  //   ],
  //   '@typescript-eslint/no-inferrable-types': 'error',
  //   'padding-line-between-statements': [
  //     'error',
  //     {blankLine: 'always', prev: '*', next: 'return'},
  //     {blankLine: 'always', prev: ['const', 'let', 'var'], next: '*'},
  //     {
  //       blankLine: 'any',
  //       prev: ['const', 'let', 'var'],
  //       next: ['const', 'let', 'var'],
  //     },
  //   ],
  //   'no-extra-parens': ['error', 'all', {nestedBinaryExpressions: false}],
  // },
  // overrides: [
  //   {
  //     files: ['*.test.ts', '*.config.ts'],
  //     rules: {
  //       '@typescript-eslint/no-explicit-any': 'off',
  //     },
  //   },
  // ],
};
