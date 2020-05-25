/* eslint-disable  import/no-dynamic-require,global-require */
const { log } = require('@friendlyrobot/cli-logger');
const fs = require('fs');
const cwd = process.cwd();
const webpack = require('webpack');

const pkg = require(`${cwd}/package.json`);

let config;
if (fs.existsSync(`${cwd}/webpack.config`)) {
  // a customized webpack.config is provided in a package
  config = require(`${cwd}/webpack.config`);
} else {
  config = require(`${__dirname}/../webpack.config`);
}

webpack(config, (err, stats) => {
  const hasError = err || stats.hasErrors();
  if (hasError) {
    log.error(`Build ${pkg.name} has failed.`);
    console.error('===== webpack stats output begin =====');
    console.error(
      stats.toString({
        color: true,
      }),
    );
    console.error('===== webpack stats output end =====');
  } else {
    log.info(`Build ${pkg.name} completed.`);
  }
});
