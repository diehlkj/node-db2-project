// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    useNullAsDefault: true, //This allows any data being added to our db that is missing in a particular field to be set as null. If the particular row is set to NotNULL, the db will return an error and not accept the data

    migrations: { // This is letting knex know that we want to use migrations to track schema changes and gives us and new developers the abillity to start from scratch and build the database as well as roll back any changes made in case of error.
      directory: './data/migrations' // This is the directory where our migrations will be located
    },

    seeds: {
      directory: './data/seeds'
    }
  }
  
};
