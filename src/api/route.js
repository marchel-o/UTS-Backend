const express = require('express');

const users = require('./components/users/users-route');
const tickets = require('./components/tickets/tickets-route');
const comments = require('./components/comments/comments-route');
module.exports = () => {
  const app = express.Router();

  users(app);
  tickets(app);
  comments(app);

  return app;
};
