const { nanoid } = require('nanoid');
const { generatePasswordHash } = require('../../src/utils/security');

exports.seed = function (knex) {
  const userTable = 'users';
  const password = generatePasswordHash('test');
  return knex(userTable)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(userTable).insert([
        { id: nanoid(), username: 'test', password },
        { id: nanoid(), username: 'dcai', password },
        { id: nanoid(), username: 'admin', password },
      ]);
    });
};
