const _ = require('lodash');
const { verifyToken } = require('../../utils/security');

function fromHeaderOrQuerystring(req) {
  const authHeader = _.get(req, 'headers.authorization');
  if (authHeader && authHeader.split(' ')[0] === 'Bearer') {
    return authHeader.split(' ')[1];
  } else if (req.query && req.query.token) {
    return req.query.token;
  } else if (req.body && req.body.token) {
    return req.body.token;
  }
  return null;
}
const unprotectedPaths = ['/users/signin', '/users/sign'];

module.exports = (req, res, next) => {
  if (_.includes(unprotectedPaths, req.path)) {
    return next();
  }
  const token = fromHeaderOrQuerystring(req);
  if (!token) {
    throw new Error('unauthenticated');
  }
  verifyToken(token, (err, decoded) => {
    if (err) {
      throw err;
    }
    res.locals.loggedin = true;
    res.locals.user = decoded;
    return next();
  });
};
