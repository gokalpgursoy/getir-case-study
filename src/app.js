const express = require('express');

const app = express();
const config = require('./config');
require('mongoose').connect(config.db.uri, {
  auth: { authdb: config.db.databaseName },
  user: config.db.username,
  pass: config.db.password,
  useNewUrlParser: true,
  useCreateIndex: true,
});
require('./middleware')(app);
const router = require('./routes');

app.use(router);

module.exports = app;
