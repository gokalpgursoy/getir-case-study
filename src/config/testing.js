module.exports = {
  // disable logging for testing
  logging: false,
  db: {
    uri: `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    databaseName: process.env.DB_NAME,
  },
};
