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

module.exports = {
  countUsers,
  countTickets,
  countComments,
};