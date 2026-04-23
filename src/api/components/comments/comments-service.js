const commentsRepository = require('./comments-repository');
const logger = require('../../../core/logger')('app');

async function getCommentsByTicket(ticketId) {
  return commentsRepository.getCommentsByTicket(ticketId);
}

async function getComment(id) {
  return commentsRepository.getComment(id);
}

async function createComment(ticketId, userId, content) {
  try {
    await commentsRepository.createComment(ticketId, userId, content);
    return true;
  } catch (error) {
    logger.error(`Gagal membuat komentar: ${error.message}`);
    return false;
  }
}

module.exports = {
  getCommentsByTicket,
  getComment,
  createComment,
};