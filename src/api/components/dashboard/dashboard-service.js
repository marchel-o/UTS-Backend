const dashboardRepository = require('./dashboard-repository');

async function getSummary() {
  const totalUsers = await dashboardRepository.countUsers();
  const totalTickets = await dashboardRepository.countTickets();
  const totalComments = await dashboardRepository.countComments();

  const rawStatus = await dashboardRepository.getTicketStatusDistribution();

  const statusDistribution = {};
  rawStatus.forEach((item) => {
    statusDistribution[item._id] = item.count;
  });

  return {
    users_count: totalUsers,
    tickets_count: totalTickets,
    comments_count: totalComments,
    status_distribution: statusDistribution,
  };
}

module.exports = {
  getSummary,
};
