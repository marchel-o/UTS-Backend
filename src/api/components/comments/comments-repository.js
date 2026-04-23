const { Comments } = require('../../../models');

async function getCommentsByTicket(ticketId) {
  return Comments.find({ ticket_id: ticketId })
    .populate('user_id', 'full_name email')
    .sort({ createdAt: 1 });
}

async function getComment(id) {
  return Comments.findById(id);
}

async function createComment(ticketId, userId, content) {
  return Comments.create({
    ticket_id: ticketId,
    user_id: userId,
    content,
  });
}

module.exports = {
  getCommentsByTicket,
  getComment,
  createComment,
};