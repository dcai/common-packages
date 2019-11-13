const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const dIContainer = require('./dependency-injection-container')();
const { router: subscribeRoute } = require('./routes/subscribe');

const app = express();

dIContainer.register('api', process.env.API_ENDPOINT);

app.locals.container = dIContainer;

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', subscribeRoute);

module.exports = app;
