const { Users } = require('../../../models');

async function getUsers() {
  return Users.find({});
}

async function getUser(_id) {
  return Users.findById(_id);
}

async function getUserByEmail(email) {
  return Users.findOne({ email });
}

async function createUser(id, fullName, email, password, role) {
  return Users.create({
    _id: id,
    full_name: fullName,
    email,
    password,
    role: role || 'user',
  });
}

async function updateUser(_id, fullName, email, role) {
  return Users.updateOne(
    { _id },
    { $set: { full_name: fullName, email, role } }
  );
}

async function changePassword(_id, password) {
  return Users.updateOne({ _id }, { $set: { password } });
}

async function deleteUser(_id) {
  return Users.deleteOne({ _id });
}

module.exports = {
  getUsers,
  getUser,
  getUserByEmail,
  createUser,
  updateUser,
};
