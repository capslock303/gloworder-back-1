exports.up = function (knex, Promise) {
  return knex.schema.createTable('drinks', function (table) {
    table.increments('id').notNullable()
    table.string('liquor', 255).notNullable()
    table.float('price').notNullable()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('drinks')
}