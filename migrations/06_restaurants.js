exports.up = function (knex, Promise) {
  return knex.schema.createTable('restaurants', function (table) {
    table.increments('id').notNullable()
    table.string('name', 255).notNullable()
    table.string('location').notNullable().defaultTo('[0.00,0.00]')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('restaurants')
}
