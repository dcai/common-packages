const { spawn } = require('child_process');
const { argv } = require('yargs').alias('c', 'component');
const path = require('path');
const { log } = require('@friendlyrobot/cli-logger');
const { isString } = require('lodash');

let componentName = argv.component;
if (!componentName) {
  const componentFromPath = process
    .cwd()
    .match(/@packages(?:\/|\\)(.*?)(?:(?:\/|\\)|$)/);

  if (!componentFromPath) {
    console.error(
      'No component name provided, specify with --component <name> or call build from component folder',
    );
    process.exit(1);
  } else {
    [, componentName] = componentFromPath;
  }
}
const packagePath = `${__dirname}/../@packages/${componentName}`;

// now we build the package
log.info(packagePath);
if (isString(packagePath)) {
  const webpack = spawn(
    'node',
    [path.resolve(__dirname, './buildPackage.js')],
    {
      cwd: packagePath,
      stdio: [0, 1, 2],
    },
  );

  webpack.on('exit', code => process.exit(code));
}
