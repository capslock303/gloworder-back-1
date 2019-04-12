exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('drink_options').del()
    .then(() => {
      // Inserts seed entries
      return knex('drink_options').insert(
        [
          {
            id: 1,
            drink_id: 2,
            option_id: 1,
            price: 4.0
            // Whiskey on the rocks
          },
          {
            id: 2,
            drink_id: 5,
            option_id: 5,
            price: 7.0
            // Whiskey (double)
          },
          {
            id: 3,
            drink_id: 3,
            option_id: 1,
            price: 3.5
            // Teq-weeee-la on the rocks
          },
          {
            id: 4,
            drink_id: 4,
            option_id: 2,
            price: 3.5
            // Rum neat
          },
          {
            id: 5,
            drink_id: 1,
            option_id: 4,
            price: 4.0
            // Gin dry
          },
          {
            id: 6,
            drink_id: 3,
            option_id: 2,
            price: 3.5
            // Teq-weeee-la neat
          },
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('drink_options_id_seq', (SELECT MAX(id) FROM drink_options))")
    })
}