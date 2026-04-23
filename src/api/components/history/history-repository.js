const { History } = require('../../../models');

async function getTicketHistory(ticketId) {
  return History.find({ ticket_id: ticketId })
    .populate('user_id', 'full_name email')
    .sort({ createdAt: -1 }); // Urutkan dari yang terbaru
}

async function createHistory(ticketId, userId, action, details) {
  return History.create({
    ticket_id: ticketId,
    user_id: userId,
    action,
    details,
  });
}

module.exports = {
  getTicketHistory,
  createHistory,
};
