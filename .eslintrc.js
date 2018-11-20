module.exports = {
  root: true,
  extends: ['@friendlyrobot/eslint-config'],
  rules: {
    'consistent-return': 'warn',
    'import/extensions': 'off',
    'import/no-unresolved': 'warn',
    'no-plusplus': 'warn',
    'react/forbid-prop-types': 'warn',
    'react/jsx-filename-extension': 'warn',
    'react/prefer-stateless-function': 'warn',
  },
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-unused-vars': 'warn',
        'global-require': 'off',
        'jsx-a11y/label-has-for': 'off',
      },
    },
  ],
};
