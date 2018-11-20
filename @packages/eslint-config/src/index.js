const OFF = 0;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel', 'import', 'react', 'prettier'],
  extends: ['prettier'],

  globals: {
    $: true,
    browser: true,
    spyOn: true,
  },

  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jest: true,
  },

  rules: {
    'prettier/prettier': 'error',

    // import
    'import/no-dynamic-require': OFF,
    'import/no-extraneous-dependencies': OFF,
    'import/prefer-default-export': OFF,

    // react
    'react/no-danger': ERROR,
    'react/no-direct-mutation-state': ERROR,
  },
};