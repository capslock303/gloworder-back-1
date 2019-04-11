exports.up = function (knex, Promise) {
  return knex.schema.createTable('options', function (table) {
    table.increments('id')
    table.string('option', '255').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('options')
}