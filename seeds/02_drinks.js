exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('drinks').del()
    .then(() => {
      // Inserts seed entries
      return knex('drinks').insert(
        [
          {
            id: 1,
            liquor: "Vodka"
          },
          {
            id: 2,
            liquor: "Whiskey"
          },
          {
            id: 3,
            liquor: "Tequila"
          },
          {
            id: 4,
            liquor: "Rum"
          },
          {
            id: 5,
            liquor: "Gin"
          }
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('drinks_id_seq', (SELECT MAX(id) FROM drinks))")
    })
}