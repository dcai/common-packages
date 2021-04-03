const express = require('express');
const _ = require('lodash');
const { generateAccessToken, checkPassword } = require('../utils/security');

const router = express.Router();

router.post('/users/signin', async (req, res) => {
  const { knex } = res.locals;
  const { username, password } = req.body;
  const users = await knex.select().where('username', username).table('users');
  const hash = _.get(users, '0.password');
  const user = users[0];
  _.unset(user, 'password');
  if (checkPassword(password, hash)) {
    return res.json({
      user,
      token: generateAccessToken(user),
    });
  }
  res.status(400);
});
router.get('/users', async (req, res) => {
  const { knex } = res.locals;
  const users = await knex.select('id', 'username').table('users');
  res.json({
    users,
  });
});

module.exports = router;
