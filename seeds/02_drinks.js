exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('drinks').del()
    .then(() => {
      // Inserts seed entries
      return knex('drinks').insert(
        [
          {
            id: 1,
            liquor: "Vodka",
            price: 3.5
          },
          {
            id: 2,
            liquor: "Whiskey",
            price: 4.0
          },
          {
            id: 3,
            liquor: "Tequila",
            price: 4.0
          },
          {
            id: 4,
            liquor: "Rum",
            price: 3.5
          },
          {
            id: 5,
            liquor: "Gin",
            price: 4.0
          }
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('drinks_id_seq', (SELECT MAX(id) FROM drinks))")
    })
}