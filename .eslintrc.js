module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    globalThis: false,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './.babelrc',
    },
    ecmaVersion: 6,
  },
  plugins: ['react', 'react-hooks', 'sort-keys-fix'],
  root: true,
  rules: {
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.js', '**/*.spec.js'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            group: 'external',
            pattern: 'react',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-shadow': 'off',

    'no-use-before-define': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',

    'react/no-array-index-key': 'off',
    'react/no-danger': 'off',
    'react/prop-types': 'off',
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 4, natural: true },
    ],
    'sort-keys-fix/sort-keys-fix': 'warn',
  },
  settings: {
    'import/resolver': {
      alias: [
        ['assets', './src/assets'],
        ['components', './src/components'],
        ['contexts', './src/contexts'],
        ['helpers', './src/helpers'],
        ['layouts', './src/layouts'],
        ['sections', './src/sections'],
        ['theme', './src/theme.js'],
        ['GlobalStyle', './src/GlobalStyle.js'],
      ],
      node: {
        extensions: ['.js'],
        paths: ['src'],
      },
    },
  },
}
