exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('options').del()
    .then(() => {
      // Inserts seed entries
      return knex('options').insert(
        [
          {
            id: 1,
            option: "On the rocks"
          },
          {
            id: 2,
            option: "Neat"
          },
          {
            id: 3,
            option: "With a twist"
          },
          {
            id: 4,
            option: "Dry"
          },
          {
            id: 5,
            option: "Double"
          }
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('options_id_seq', (SELECT MAX(id) FROM options))")
    })
}