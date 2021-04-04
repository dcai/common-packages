// Update with your config settings.

const makeBaseConfig = (client = 'sqlite') => {
  return {
    client,
    seeds: {
      directory: `${__dirname}/knex/seeds`,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/knex/migrations`,
    },
  };
};
module.exports = {
  development: {
    ...makeBaseConfig('sqlite'),
    useNullAsDefault: true,
    connection: {
      filename: process.env.SQLITE_DB_PATH || `${__dirname}/knex/dev.sqlite3`,
    },
  },

  staging: {
    ...makeBaseConfig('postgresql'),
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
  },

  production: {
    ...makeBaseConfig('postgresql'),
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
  },
};
