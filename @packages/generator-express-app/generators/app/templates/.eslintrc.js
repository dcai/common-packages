module.exports = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],

  parserOptions: {
    ecmaVersion: 2017,
  },

  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-var': 'error',
  },
};
