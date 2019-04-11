exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      // Inserts seed entries
      return knex('orders').insert(
        [
          {
            id: 1,
            drink_order: "{1:2}",
            total: 8.0,
            paid: false,
            user_id: 5
          },
          {
            id: 2,
            drink_order: "{2:1, 3:1}",
            total: 17.5,
            paid: true,
            user_id: 4
          },
          {
            id: 3,
            drink_order: "{4:1}",
            total: 3.5,
            paid: false,
            user_id: 3
          },
          {
            id: 4,
            drink_order: "{5:1,6:2}",
            total: 11.0,
            paid: false,
            user_id: 2
          },
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders))")
    })
}