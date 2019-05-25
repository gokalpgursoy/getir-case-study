const recordsModel = require('../models/records');

describe('#find()', (done) => {
  it('responds with matching records', async () => {
    recordsModel.findOne().then((records) => {
      records.should.have.length(1);
      done();
    });
  });
});
