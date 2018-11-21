const camelCase = require('camelcase');
const fs = require('fs');
const fse = require('fs-extra');
const glob = require('glob');
const mustache = require('mustache');
const path = require('path');
const { log } = require('@friendlyrobot/cli-logger');

const templateFolder = path.join(__dirname, './templates');
const packagesFolder = path.join(__dirname, '../../@packages');

const handleGenericTemplate = (filePath, templatePath, data) => {
  const targetPath = path.dirname(filePath);
  const fileData = fs.readFileSync(templatePath, 'utf8');
  const newFilePath = filePath.replace('.mustache', '');
  log.info(`Writing to ${newFilePath}`);
  const f = fs.writeFileSync(newFilePath, mustache.render(fileData, data));
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

const create = componentName => {
  log.info(`Creating: ${componentName}`);
  const targetFolder = path.join(packagesFolder, componentName);
  const data = {
    name: componentName,
    camelName: camelCase(componentName),
  };
  return generate(templateFolder, targetFolder, data);
};

module.exports = {
  create,
  generate,
};
