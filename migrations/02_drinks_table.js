exports.up = function (knex, Promise) {
  return knex.schema.createTable('drinks', function (table) {
    table.increments('id')
    table.string('liquor', '255').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('drinks')
}