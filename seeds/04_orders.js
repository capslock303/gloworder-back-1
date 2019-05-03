exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      // Inserts seed entries
      return knex('orders').insert(
        [
          {
            id: 1,
            drink_order: { order: {
            drinkId: 2,
            quantit: 2,
            optionI: 1,
            barI: 3,
            nam: "Jake",
            drin: "Whiskey",
            optio: "On the rocks"
            }},
            total: 7.0,
            paid: false,
            color: "blue",
            user_id: 5
          },
          {
            id: 2,
            drink_order: { order: [{
              drinkId: 3,
              quantity: 1,
              optionId: 5,
              barId: 3,
              name: "Kevin",
              drink: "Tequila",
              option: "Double"
              },{
                drinkId: 5,
                quantity: 1,
                optionId: 1,
                barId: 3,
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
            drink_order: { order: {
              drinkId: 2,
              quantity: 2,
              optionId: 1,
              barId: 3,
              name: "Seth",
              drink: "Rum",
              option: "Neat"
            }},
            total: 7.0,
            paid: false,
            color: "red",
            user_id: 3
          },
          {
            id: 4,
            drink_order: { order: [{
              drinkId: 1,
              quantity: 1,
              optionId: 4,
              barId: 3,
              name: "Dustin",
              drink: "Vodka",
              option: "Dry"
              },{
                drinkId: 3,
                quantity: 2,
                optionId: 2,
                barId: 3,
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
