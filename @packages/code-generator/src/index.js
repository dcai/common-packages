const fs = require('fs');
const fse = require('fs-extra');
const glob = require('glob');
const mustache = require('mustache');
const path = require('path');
const prettier = require('prettier');
const { find, includes } = require('lodash');
const { log } = require('@friendlyrobot/cli-logger');

const prettierConfig = {
  arrowParens: 'avoid',
  printWidth: 80,
  useTabs: false,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
};

const handleGenericTemplate = (filePath, templatePath, data) => {
  const targetPath = path.dirname(filePath);
  const fileData = fs.readFileSync(templatePath, 'utf8');
  const newFilePath = filePath.replace('.mustache', '');
  log.info(`Writing to ${newFilePath}`);
  const rendered = mustache.render(fileData, data);
  const ext = path.extname(newFilePath);
  const mapping = [
    ['babylon', ['.js', '.jsx']],
    ['typescript', ['.ts', '.tsx']],
    ['json', ['.json']],
    ['yaml', ['.yaml', '.yml']],
  ];
  const parser = find(mapping, item => includes(item[1], ext))[0] || false;

  const f = fs.writeFileSync(
    newFilePath,
    parser
      ? prettier.format(rendered, { ...prettierConfig, parser })
      : rendered,
  );
};

const generate = (templateFolder, targetFolder, data) =>
  glob('**/*.mustache', { cwd: templateFolder, dot: true }, (err, files) => {
    if (err) {
      throw err;
    } else {
      files.forEach(f => {
        const templateFilePath = path.join(templateFolder, f);
        const targetFilePath = path.join(targetFolder, f);
        const dirName = path.dirname(targetFilePath);
        fse.ensureDirSync(dirName);
        const filePath = handleGenericTemplate(
          targetFilePath,
          templateFilePath,
          data,
        );
      });
      log.info(`Create component success`);
    }
  });

module.exports = {
  handleGenericTemplate,
  generate,
};
