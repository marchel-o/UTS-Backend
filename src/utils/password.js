const bcrypt = require('bcrypt');
const logger = require('../core/logger')('app');

async function hashPassword(password) {
  const saltRounds = 10;

  try {
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
          logger.error('Terjadi kesalahan saat hashing password:', err);
          reject(err);
        } else {
          resolve(hash);
        }
      });
    });

    return hashedPassword;
  } catch (error) {
    logger.error('Gagal melakukan hashing password:', error);
    throw error;
  }
}

async function passwordMatched(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
  hashPassword,
  passwordMatched,
};
