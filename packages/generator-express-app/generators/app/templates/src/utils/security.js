const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { isPlainObject } = require('lodash');

const generatePasswordHash = (password) => {
  return bcrypt.hashSync(password, 8);
};

const checkPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

function getTokenSecret() {
  return process.env.TOKEN_SECRET || 'secret';
}

function generateAccessToken(payload, options = {}) {
  return jwt.sign(payload, getTokenSecret(), {
    expiresIn: '1800s',
    algorithm: 'HS256',
    // audience: 'http://myapi/protected',
    // issuer: 'http://issuer',
    ...(isPlainObject(options) ? options : {}),
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
