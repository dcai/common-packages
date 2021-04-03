const _ = require('lodash');
const { verifyToken } = require('../../utils/security');

module.exports = (req, res, next) => {
  if (req.path === '/users/signin') {
    return next();
  }
  const authHeader = _.get(req, 'headers.authorization', '');
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return next();
  }
  verifyToken(token, (err, decoded) => {
    if (err) {
      return next(err);
    }
    res.locals.loggedin = true;
    res.locals.user = decoded;
    return next();
  });
};
