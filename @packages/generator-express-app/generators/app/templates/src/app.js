const express = require('express');
const cors = require('cors');
const fg = require('fast-glob');
const path = require('path');

const app = express();
const currentDir = __dirname;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const controllers = fg.sync('controllers/**', {
  onlyFiles: true,
  cwd: currentDir,
  deep: 1,
});
controllers.forEach((file) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const fn = require(path.join(currentDir, file));
  app.use(fn);
});

// middlewares must be loaded after controllers
const middlewares = fg.sync('middlewares/**', {
  onlyFiles: true,
  cwd: currentDir,
  deep: 1,
});

middlewares.forEach((file) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const fn = require(path.join(currentDir, file));
  app.use(fn);
});

module.exports = app;
