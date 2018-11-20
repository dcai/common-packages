module.exports = {
  arrowParens: 'avoid',
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  overrides: [
    {
      files: ['*.json'],
      options: { parser: 'json' },
    },
    {
      files: ['*.yaml', '*.yml'],
      options: { parser: 'yaml' },
    },
  ],
};
