exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      // Inserts seed entries
      return knex('orders').insert(
        [
          {
            id: 1,
            drink_order: { order: [{
            drink_id: 2,
            quantity: 2,
            option_id: 1,
            bar_id: 3,
            name: "Jake",
            drink: "Whiskey",
            option: "On the rocks"
            }]},
            total: 7.0,
            paid: false,
            color: "blue",
            user_id: 5
          },
          {
            id: 2,
            drink_order: { order: [{
              drink_id: 3,
              quantity: 1,
              option_id: 5,
              bar_id: 3,
              name: "Kevin",
              drink: "Tequila",
              option: "Double"
              },{
                drink_id: 5,
                quantity: 1,
                option_id: 1,
                bar_idd: 3,
                name: "Katie",
                drink: "Gin",
                option: "On the Rocks"
            }]},
            total: 10.0,
            paid: true,
            color: "purple",
            user_id: 4
          },
          {
            id: 3,
            drink_order: { order: [{
              drink_id: 2,
              quantity: 2,
              option_id: 1,
              bar_id: 3,
              name: "Seth",
              drink: "Rum",
              option: "Neat"
            }]},
            total: 7.0,
            paid: false,
            color: "red",
            user_id: 3
          },
          {
            id: 4,
            drink_order: { order: [{
              drink_id: 1,
              quantity: 1,
              option_id: 4,
              bar_id: 3,
              name: "Dustin",
              drink: "Vodka",
              option: "Dry"
              },{
                drink_id: 3,
                quantity: 2,
                option_id: 2,
                bar_id: 3,
                name: "Dustin",
                drink: "Tequila",
                option: "Neat"
            }]},
            total: 11.5,
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
