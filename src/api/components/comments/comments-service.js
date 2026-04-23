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

async function updateComment(id, content) {
  try {
    const result = await commentsRepository.updateComment(id, content);
    return result.modifiedCount > 0 || result.matchedCount > 0;
  } catch (error) {
    logger.error(`Gagal memperbarui komentar (ID: ${id}): ${error.message}`);
    return false;
  }
}

async function deleteComment(id) {
  try {
    const result = await commentsRepository.deleteComment(id);
    return result.deletedCount > 0;
  } catch (error) {
    logger.error(`Gagal menghapus komentar (ID: ${id}): ${error.message}`);
    return false;
  }
}

module.exports = {
  getCommentsByTicket,
  getComment,
  createComment,
  updateComment,
  deleteComment,
};