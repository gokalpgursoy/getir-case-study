const express = require('express');

const router = express.Router();
const logger = require('../util/logger');

router.use('/api', router);
router.use('/records', require('./records'));

// Error Handling
router.use((err, req, res, next) => { // eslint-disable-line
  logger.error(err.message);
  const errorObject = {};
  errorObject.success = false;
  errorObject.code = 1; // 1 means fail
  errorObject.msg = 'Fail';
  errorObject.internalMessage = err.message;
  if (err.response && err.response.data) {
    errorObject.exception = err.response.data.message;
  }
  const statusCode = err.status ? err.status : 500;
  res.status(statusCode).json(errorObject);
});

module.exports = router;
