const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generatePasswordHash = (password) => {
  return bcrypt.hashSync(password, 8);
};

const checkPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

function getTokenSecret() {
  return process.env.TOKEN_SECRET || 'secret';
}

function generateAccessToken(payload, expiresIn = '1800s') {
  return jwt.sign(payload, getTokenSecret(), {
    expiresIn,
  });
}

function verifyToken(token, cb = (f) => f) {
  return jwt.verify(token, getTokenSecret(), cb);
}

module.exports = {
  verifyToken,
  checkPassword,
  generatePasswordHash,
  generateAccessToken,
};
