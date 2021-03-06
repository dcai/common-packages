exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.string('id').notNullable();
    table.string('username').notNullable();
    table.string('password').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
