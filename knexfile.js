
require('dotenv').config()

module.exports = {
	development: {
	  client: 'sqlite3',
	  connection: {
		filename: './data/auth.db',
	  },
	  useNullAsDefault: true,
	  migrations: {
		directory: './data/migrations',
	  },
	  seeds: {
		directory: './data/seeds',
	  },
	},
  
	production: {
	  client: 'pg',
	  connection: './data/auth.db',
	  pool: {
		min: 2,
		max: 10,
	  },
	  migrations: {
		directory: './data/migrations',
	  },
	  seeds: {
		directory: './data/seeds',
	  },
	},
  };
  