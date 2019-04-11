exports.up = function (knex, Promise) {
  return knex.schema.createTable('drink_orders', function (table) {
    table.increments('id')

    table.integer('order_id').references('orders.id').onDelete('CASCADE')   
    table.integer('option_id').references('options.id').onDelete('CASCADE')

    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('drink_orders')
}