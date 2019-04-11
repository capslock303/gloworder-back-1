exports.up = function (knex, Promise) {
  return knex.schema.createTable('orders', function (table) {
    table.increments('id')
    table.string('drinks', '255').notNullable()
    table.string('options', '255').notNullable()
    table.integer('total', '10').notNullable()
    table.boolean('paid', '255').notNullable()
    
    table.integer('user_id').references('users.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('orders')
}