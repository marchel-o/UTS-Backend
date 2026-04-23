const historyRepository = require('./history-repository');
const logger = require('../../../core/logger')('app');

async function getTicketHistory(ticketId) {
  return historyRepository.getTicketHistory(ticketId);
}

async function createHistory(ticketId, userId, action, details) {
  try {
    await historyRepository.createHistory(ticketId, userId, action, details);
    return true;
  } catch (error) {
    logger.error(`Gagal membuat riwayat: ${error.message}`);
    return false;
  }
}

module.exports = {
  getTicketHistory,
  createHistory,
};
