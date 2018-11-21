const path = require('path');
const { log } = require('@friendlyrobot/cli-logger');
const yargs = require('yargs');
const { generate } = require('@friendlyrobot/code-generator');
const camelCase = require('camelcase');

const create = componentName => {
  const templateFolder = path.join(__dirname, './templates');
  const packagesFolder = path.join(__dirname, '../@packages');
  const targetFolder = path.join(packagesFolder, componentName);
  const data = {
    name: componentName,
    camelName: camelCase(componentName),
  };
  return generate(templateFolder, targetFolder, data);
};

const argv = yargs.argv;

yargs
  .usage('Usage: $0 [name] -v')
  .command(
    '$0 [name]',
    'Create new component with component name',
    y => {
      y.positional('name', {
        describe: 'Component name to be created',
      });
    },
    a => {
      const options = {
        logLevel: a.verbose ? 'verbose' : 'warn',
      };
      if (a.name) {
        create(a.name);
      }
    },
  )
  .option('verbose', {
    alias: 'v',
    default: false,
  }).argv;
