// Update with your config settings.

const base = {
  seeds: {
    directory: `${__dirname}/knex/seeds`,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/knex/migrations`,
  },
};
module.exports = {
  development: {
    ...base,
    client: 'sqlite3',
    connection: {
      filename: process.env.SQLITE_DB_PATH || `${__dirname}/knex/dev.sqlite3`,
    },
  },

  staging: {
    ...base,
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
  },

  production: {
    ...base,
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
  },
};
