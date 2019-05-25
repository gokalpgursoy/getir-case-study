require('dotenv').config();
const config = require('./src/config');
const app = require('./src/app');
const logger = require('./src/util/logger');

app.listen(config.port);
logger.log(`Listening on http://localhost:${config.port}`);
