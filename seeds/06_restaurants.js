exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(() => {
      // Inserts seed entries
      return knex('restaurants').insert(
        [
          {
            id: 1,
            name: "The Attic",
            location: '[40.014, -105.270]'
          },
          {
            id: 2,
            name: "The Walrus",
            location: '[40.016, -105.281]'
          },
          {
            id: 3,
            name: "Rio Grande",
            location: '[40.017, -105.280]'
          },
          {
            id: 4,
            name: "License No. One",
            location: '[40.019, -105.279]'
          },
          {
            id: 5,
            name: "Sun Downer",
            location: '[40.017, -105.280]'
          }
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('restaurants_id_seq', (SELECT MAX(id) FROM restaurants))")
    })
}
