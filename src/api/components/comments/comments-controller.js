const commentsService = require('./comments-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getCommentsByTicket(request, response, next) {
  try {
    const { ticketId } = request.params;

    const comments = await commentsService.getCommentsByTicket(ticketId);
    return response.status(200).json(comments);
  } catch (error) {
    return next(error);
  }
}

async function createComment(request, response, next) {
  try {
    const { ticket_id: ticketId, user_id: userId, content } = request.body;

    if (!ticketId || !userId || !content) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'ticket_id, user_id, and content are required'
      );
    }

    const success = await commentsService.createComment(
      ticketId,
      userId,
      content
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create comment'
      );
    }

    return response
      .status(201)
      .json({ message: 'Comment created successfully' });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getCommentsByTicket,
  createComment,
};