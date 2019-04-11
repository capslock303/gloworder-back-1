exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('drink_orders').del()
    .then(() => {
      // Inserts seed entries
      return knex('drink_orders').insert(
        [
          {
            id: 1,
            order_id: 2,
            option_id: 1
          },
          {
            id: 2,
            order_id: 5,
            option_id: 5
          },
          {
            id: 3,
            order_id: 3,
            option_id: 1
          },
          {
            id: 4,
            order_id: 4,
            option_id: 2
          },
          {
            id: 5,
            order_id: 1,
            option_id: 4
          }
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('drink_orders_id_seq', (SELECT MAX(id) FROM drink_orders))")
    })
}