const express = require('express');

const users = require('./components/users/users-route');
const tickets = require('./components/tickets/tickets-route');
const history = require('./components/history/history-route');
const comments = require('./components/comments/comments-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  tickets(app);
  history(app);
  comments(app);

  return app;
};
