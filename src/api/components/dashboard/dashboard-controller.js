const dashboardService = require('./dashboard-service');

async function getSummary(request, response, next) {
  try {
    const summary = await dashboardService.getSummary();

    return response.status(200).json(summary);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getSummary,
};