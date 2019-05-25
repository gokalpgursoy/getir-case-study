const express = require('express');

const router = express.Router();
const logger = require('../util/logger');

router.use('/api', router);

// Error Handling
router.use((err, req, res) => {
  logger.error(err.message);
  const errorObject = {};
  errorObject.success = false;
  errorObject.message = err.message;
  if (err.response && err.response.data) {
    errorObject.exception = err.response.data.message;
  }
  const statusCode = err.status ? err.status : 500;
  res.status(statusCode).json(errorObject);
});

module.exports = router;
