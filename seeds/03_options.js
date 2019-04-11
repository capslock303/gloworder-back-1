exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('options').del()
    .then(() => {
      // Inserts seed entries
      return knex('options').insert(
        [
          {
            id: 1,
            option: "On the rocks",
            price: 0
          },
          {
            id: 2,
            option: "Neat",
            price: 0
          },
          {
            id: 3,
            option: "With a twist",
            price: 0
          },
          {
            id: 4,
            option: "Dry",
            price: 0
          },
          {
            id: 5,
            option: "Double",
            price: 3.0
          }
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('options_id_seq', (SELECT MAX(id) FROM options))")
    })
}