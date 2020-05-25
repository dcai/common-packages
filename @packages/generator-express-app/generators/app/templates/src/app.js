const express = require('express');
const cors = require('cors');
const fg = require('fast-glob');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.info(__dirname, process.cwd());
const controllers = fg.sync('controllers/**', {
  onlyFiles: true,
  cwd: __dirname,
  deep: 1,
});

console.info(controllers);
controllers.forEach((c) => {
  const controller = require(path.join(__dirname, c));
  app.use(controller);
});

// app.use('/', (req, res) => {
// res.status(200).json({
// status: 'ok',
// });
// });

module.exports = app;
