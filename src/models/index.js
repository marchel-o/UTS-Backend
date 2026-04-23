const mongoose = require('mongoose');
const config = require('../core/config');
const logger = require('../core/logger')('app');


const connectionString = new URL(config.database.connection);
connectionString.pathname += config.database.name;

mongoose.connect(`${connectionString.toString()}`);

const db = mongoose.connection;

const models = {
  mongoose,
};

db.once('open', async () => {
  logger.info('Successfully connected to MongoDB');

  await seeder(models);
});

db.on('error', (err) => {
  logger.error('MongoDB connection error:', err);
});

module.exports = models;
