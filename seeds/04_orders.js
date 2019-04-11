exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      // Inserts seed entries
      return knex('orders').insert(
        [
          {
            id: 1,
            drinks: "Whiskey",
            options: "Neat",
            total: "50",
            paid: false,
            user_id: 5
          },
          {
            id: 2,
            drinks: "Tequila",
            options: "With a twist",
            total: "50",
            paid: true,
            user_id: 4
          },
          {
            id: 3,
            drinks: "Whiskey",
            options: "Neat",
            total: "50",
            paid: false,
            user_id: 3
          },
          {
            id: 4,
            drinks: "Rum",
            options: "Neat",
            total: "50",
            paid: false,
            user_id: 2
          },
          {
            id: 5,
            drinks: "Vodka",
            options: "On the rocks",
            total: "50",
            paid: true,
            user_id: 1
          }
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('orders_id_seq', (SELECT MAX(id) FROM orders))")
    })
}