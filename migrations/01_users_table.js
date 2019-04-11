exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.string('firstName', '255').notNullable()
    table.string('lastName', '255').notNullable()
    table.string('phone', '10').notNullable()
    table.string('email', '255').notNullable()
    table.string('hashedPassword', '255').notNullable()
    table.string('DOB', '15').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}