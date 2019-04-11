exports.up = function (knex, Promise) {
  return knex.schema.createTable('options', function (table) {
    table.increments('id').notNullable()
    table.string('option', 255).notNullable()
    table.float('price').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('options')
}