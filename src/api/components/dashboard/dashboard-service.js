const dashboardRepository = require('./dashboard-repository');

async function getSummary() {
  const totalUsers = await dashboardRepository.countUsers();
  const totalTickets = await dashboardRepository.countTickets();
  const totalComments = await dashboardRepository.countComments();

  return {
    users_count: totalUsers,
    tickets_count: totalTickets,
    comments_count: totalComments,
  };
}

module.exports = {
  getSummary,
};