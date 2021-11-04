module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'max-len': ['warn', 160],
    'no-plus-plus': 'off',
    'no-underscore-dangle': 'off',
    'max-classes-per-file': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'consistent-return': 'warn',
    camelcase: 'off',
    'arrow-parens': 'off',
    'no-nested-ternary': 'off',
    'object-curly-newline': ['error', { // allow more than 4 https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L396
      ObjectExpression: { minProperties: 6, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 6, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 6, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 6, multiline: true, consistent: true },
    }],
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'react/prop-types': 'off',
    'react/require-default-props': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/static-property-placement': 'off',
    'react/state-in-constructor': 'off',
    'react/destructuring-assignment': 'warn',
    'react/jsx-max-props-per-line': ['error', { maximum: 6 }],
    'react/jsx-one-expression-per-line': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
};
