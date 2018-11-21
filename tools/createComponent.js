const createComponent = require('./createComponentTool');
const path = require('path');
const { log } = require('@friendlyrobot/cli-logger');
const yargs = require('yargs');

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
        createComponent.create(a.name);
      }
    },
  )
  .option('verbose', {
    alias: 'v',
    default: false,
  }).argv;
