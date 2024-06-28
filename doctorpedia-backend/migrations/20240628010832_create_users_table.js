exports.up = function(knex) {
    return knex.schema.createTable('users', function(table) {
      table.increments('id').primary();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('username').notNullable();
      table.string('email').notNullable();
      table.string('mobile_number').notNullable();
      table.string('specialist').notNullable();
      table.string('password').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  