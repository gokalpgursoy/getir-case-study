const recordsModel = require('../models/records');

exports.getAllRecords = async (req, res, next) => {
  try {
    const records = await recordsModel.find();
    res.send(records);
  } catch (error) {
    next(error);
  }
};

exports.getRecordsByFilter = async (req, res, next) => {
  try {
    const {
      startDate,
      endDate,
      minCount,
      maxCount,
    } = req.body;
    const records = await recordsModel.aggregate([
      {
        $match: {
          // $and: [{ createdAt: { $lt: new Date(endDate), $gt: new Date(startDate) } }],
          $and: [{ createdAt: { $lte: new Date(endDate), $gte: new Date(startDate) } }],
        },
      },
      { $unwind: '$counts' },
      {
        $group: {
          _id: '$_id',
          key: { $first: '$key' },
          createdAt: { $first: '$createdAt' },
          totalCount: {
            $sum: '$counts',
          },
        },
      },
      {
        // $match: { $and: [{ totalCount: { $gt: minCount, $lt: maxCount } }] },
        $match: { $and: [{ totalCount: { $gte: minCount, $lte: maxCount } }] },
      },
    ]);
    const responseObj = {
      code: 0,
      msg: 'Success',
      records: records.map(x => ({
        key: x.key,
        createdAt: x.createdAt,
        totalCount: x.totalCount,
      })),
    };
    res.send(responseObj);
  } catch (error) {
    next(error);
  }
};
