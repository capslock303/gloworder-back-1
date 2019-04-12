exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').notNullable()
    table.string('firstName', 100).notNullable().defaultTo('')
    table.string('lastName', 100).notNullable().defaultTo('')
    table.string('phone', 12).unique().notNullable()
    table.string('email', 100).notNullable()
    table.string('password', 255).notNullable()
    table.date('DOB').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}