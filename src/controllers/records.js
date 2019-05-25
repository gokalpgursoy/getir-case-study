const recordsModel = require('../models/records');

exports.getRecords = async (req, res, next) => {
  try {
    console.log('REQ BODY', req.body);
    const records = await recordsModel.findOne();
    res.send(records);
  } catch (error) {
    next(error);
  }
};
