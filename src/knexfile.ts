// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "laborit_test",
      user: "postgres",
      password: "masterkey",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "laborit",
      user: "postgres",
      password: "masterkey",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/database/migrations",
    },
  },
};
