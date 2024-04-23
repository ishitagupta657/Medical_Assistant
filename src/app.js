const express = require('express');
const cors = require('cors');
const httpStatus = require('http-status');
const routes = require('./routes/v1');
const ApiError = require('./utils/ApiError');
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use('/v1', routes);

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

module.exports = app;
