
exports.up = function(knex) {
  return knex.schema.createTable('cars', (table) => {
        table.increments(); // When no name is provided, defaults to 'id'
        table.text('vin', 17).unique().notNullable();
        table.decimal('year').notNullable();
        table.text('make').notNullable();
        table.text('model').notNullable();
        table.decimal('mileage').notNullable();
        table.text('transmission');
        table.text('title');
  });
};
// | id | vin | year | make | model | mileage | transmission | title |
exports.down = function(knex) {
  knex.schema.dropTableIfExists('cars'); // This drops the entire table.
};
