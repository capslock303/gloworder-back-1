exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      // Inserts seed entries
      return knex('orders').insert(
        [
          {
            id: 1,
            drink_order: '[{"drink_options_id":1, "quantity":2}]',
            total: 8.0,
            paid: false,
            color: "blue",
            user_id: 5
          },
          {
            id: 2,
            drink_order: '[{"drink_options_id":2, "quantity":1},{"drink_options_id":3, "quantity":1}]',
            total: 17.5,
            paid: true,
            color: "purple",
            user_id: 4
          },
          {
            id: 3,
            drink_order: '[{"drink_options_id":4, "quantity":1}]',
            total: 3.5,
            paid: false,
            color: "red",
            user_id: 3
          },
          {
            id: 4,
            drink_order: '[{"drink_options_id":5, "quantity":1},{"drink_options_id":6, "quantity":2}]',
            total: 11.0,
            paid: false,
            color: "green",
            user_id: 2
          },
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders))")
    })
}
