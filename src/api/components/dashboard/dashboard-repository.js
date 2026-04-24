const { Users, Tickets, Comments } = require('../../../models');

async function countUsers() {
  return Users.countDocuments();
}

async function countTickets() {
  return Tickets.countDocuments();
}

async function countComments() {
  return Comments.countDocuments();
}

async function getTicketStatusDistribution() {
  return Tickets.aggregate([
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);
}

module.exports = {
  countUsers,
  countTickets,
  countComments,
  getTicketStatusDistribution,
};
