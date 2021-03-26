const { spawn } = require('child_process');
const { last } = require('lodash');
const yargs = require('yargs/yargs');
const path = require('path');
const { log } = require('@friendlyrobot/cli-logger');
const fs = require('fs');

const argv = yargs(process.argv)
  .option('component', {
    alias: 'c',
    type: 'string',
    describe: 'component name',
  })
  .requiresArg('component').argv;

let componentName = argv.component;

if (!componentName) {
  componentName = last(process.cwd().split('/').filter(Boolean));

  if (!componentName) {
    log.error(
      'No component name provided, specify with --component <name> or call build from component folder',
    );
    process.exit(1);
  }
}
const packagePath = `${__dirname}/../packages/${componentName}`;

// now we build the package
log.info(path.resolve(packagePath));
if (!fs.existsSync(packagePath)) {
  log.error(`invalid component path: ${packagePath}`);
  process.exit(1);
} else {
  const p = spawn('node', [path.resolve(__dirname, './buildPackage.js')], {
    cwd: packagePath,
    stdio: [0, 1, 2],
  });

  p.on('exit', (code) => process.exit(code));
}
