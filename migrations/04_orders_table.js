exports.up = function (knex, Promise) {
  return knex.schema.createTable('orders', function (table) {
    table.increments('id').notNullable()
    table.json('drink_order').notNullable().defaultTo('[]')
    table.string('color').notNullable()
    table.float('total').notNullable().defaultTo(0)
    table.boolean('paid').notNullable().defaultTo(false)
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('orders')
}
