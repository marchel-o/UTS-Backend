const usersService = require('./users-service');
const { errorResponder, errorTypes } = require('../../../core/errors');
const { hashPassword, passwordMatched } = require('../../../utils/password');
const logger = require('../../../core/logger')('app');

const validRoles = ['user', 'staff', 'admin'];

async function getUsers(request, response, next) {
  try {
    logger.info('Request untuk mendapatkan daftar seluruh pengguna');
    const users = await usersService.getUsers();

    return response.status(200).json(users);
  } catch (error) {
    return next(error);
  }
}

async function getUser(request, response, next) {
  try {
    logger.info(
      `Request untuk mendapatkan detail pengguna dengan ID: ${request.params.id}`
    );
    const user = await usersService.getUser(request.params.id);

    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User not found');
    }

    return response.status(200).json(user);
  } catch (error) {
    return next(error);
  }
}

async function createUser(request, response, next) {
  try {
    const allowedFields = [
      'id',
      'full_name',
      'email',
      'password',
      'confirm_password',
    ];

    const incomingFields = Object.keys(request.body);

    const extraFields = incomingFields.filter(
      (field) => !allowedFields.includes(field)
    );

    if (extraFields.length > 0) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        `Invalid fields in request body: ${extraFields.join(', ')}`
      );
    }

    const {
      id,
      full_name: fullName,
      email,
      password,
      confirm_password: confirmPassword,
    } = request.body;

    if (!id) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'ID is required');
    }
    if (!fullName) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Full name is required'
      );
    }

    if (!email) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Email is required');
    }

    if (password.length < 8) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Password must be at least 8 characters long'
      );
    }
    if (password !== confirmPassword) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Password and confirm password do not match'
      );
    }
    if (await usersService.emailExists(email)) {
      throw errorResponder(
        errorTypes.EMAIL_ALREADY_TAKEN,
        'Email already exists'
      );
    }

    const hashedPassword = await hashPassword(password);

    const success = await usersService.createUser(
      id,
      fullName,
      email,
      hashedPassword,
      'user'
    );

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create user'
      );
    }

    return response.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    return next(error);
  }
}

async function updateUser(request, response, next) {
  try {
    const allowedFields = ['full_name', 'email', 'role'];

    const incomingFields = Object.keys(request.body);

    const extraFields = incomingFields.filter(
      (field) => !allowedFields.includes(field)
    );

    if (extraFields.length > 0) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        `Invalid fields in request body: ${extraFields.join(', ')}`
      );
    }

    logger.info(
      `Request untuk memperbarui pengguna dengan ID: ${request.params.id}`
    );
    const { full_name: fullName, email, role } = request.body;
    const { id } = request.params;

    if (role && !validRoles.includes(role)) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        `Invalid role. Allowed roles: ${validRoles.join(', ')}`
      );
    }

    const user = await usersService.getUser(request.params.id);
    if (!user) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'User not found');
    }

    if (!email) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Email is required');
    }

    if (!fullName) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Full name is required'
      );
    }

    if (email !== user.email && (await usersService.emailExists(email))) {
      throw errorResponder(
        errorTypes.EMAIL_ALREADY_TAKEN,
        'Email already exists'
      );
    }

    const success = await usersService.updateUser(id, fullName, email, role);

    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update user'
      );
    }

    return response.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    return next(error);
  }
}


module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
};
