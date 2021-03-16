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

// middlewares loaded before controllers
const beforeMiddlewares = fg.sync('middlewares/before/**', {
  onlyFiles: true,
  cwd: currentDir,
  deep: 1,
});

beforeMiddlewares.forEach((file) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const router = require(path.join(currentDir, file));
  app.use(router);
});

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

// middlewares loaded after controllers
const afterMiddlewares = fg.sync('middlewares/after/**', {
  onlyFiles: true,
  cwd: currentDir,
  deep: 1,
});

afterMiddlewares.forEach((file) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const fn = require(path.join(currentDir, file));
  app.use(fn);
});

module.exports = app;
