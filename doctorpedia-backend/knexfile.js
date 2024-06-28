module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root', // default user MySQL
      password: '', // default password MySQL (kosongkan jika tidak ada password)
      database: 'doctorpedia'
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  }
};
