const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: 'babel-eslint',
  plugins: ['babel', 'import', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/standard',
  ],

  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },

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
    commonjs: true,
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
    'react/prop-types': WARN,

    'no-undef': 'error',
    'no-unused-vars': 'warn',
  },
};
