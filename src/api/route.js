const express = require('express');

const users = require('./components/users/users-route');
const tickets = require('./components/tickets/tickets-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  tickets(app);

  return app;
};
