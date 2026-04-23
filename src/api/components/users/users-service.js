const usersRepository = require('./users-repository');
const logger = require('../../../core/logger')('app');

async function getUsers() {
  return usersRepository.getUsers();
}

async function getUser(_id) {
  return usersRepository.getUser(_id);
}

async function emailExists(email) {
  // logger.info(`Memeriksa ketersediaan email: ${email}`);
  const user = await usersRepository.getUserByEmail(email);
  return !!user;
}

async function createUser(id, fullName, email, password, role) {
  try {
    await usersRepository.createUser(id, fullName, email, password, role);
    return true;
  } catch (error) {
    logger.error(`Gagal membuat pengguna: ${error.message}`);
    return false;
  }
}

async function updateUser(_id, fullName, email, role) {
  try {
    const result = await usersRepository.updateUser(_id, fullName, email, role);
    return result.modifiedCount > 0 || result.matchedCount > 0;
  } catch (error) {
    logger.error(`Gagal memperbarui pengguna (ID: ${_id}): ${error.message}`);
    return false;
  }
}

module.exports = {
  getUsers,
  getUser,
  emailExists,
  createUser,
  updateUser,
};
