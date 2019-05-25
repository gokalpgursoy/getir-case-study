const router = require('express').Router();
const { getRecords } = require('../controllers/records');

router.route('/').post(getRecords);
module.exports = router;
