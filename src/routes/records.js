const router = require('express').Router();
const { getAllRecords, getRecordsByFilter } = require('../controllers/records');

router.route('/all').get(getAllRecords);
router.route('/').post(getRecordsByFilter);
module.exports = router;
