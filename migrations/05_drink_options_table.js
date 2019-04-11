exports.up = function (knex, Promise) {
  return knex.schema.createTable('drink_options', function (table) {
    table.increments('id').notNullable()
    table.integer('drink_id')
    table.foreign('drink_id').references('drinks.id').onDelete('CASCADE')    
    table.integer('option_id')
    table.foreign('option_id').references('options.id').onDelete('CASCADE')
    table.float('price').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('drink_options')
}