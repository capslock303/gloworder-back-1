exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert(
        [
          {
            id: 1,
            first_name: "Phillip",
            last_name: "Borgenicht",
            phone: "111-111-1111",
            email: "pborgenicht@gmail.com",
            password: "password",
            DOB: "01/01/1979"
          },
          {
            id: 2,
            first_name: "Dustin",
            last_name: "Huth",
            phone: "222-222-2222",
            email: "dhuth@gmail.com",
            password: "password",
            DOB: "01/01/1989"
          },
          {
            id: 3,
            first_name: "Seth",
            last_name: "Brown",
            phone: "333-333-3333",
            email: "sbrown@gmail.com",
            password: "password",
            DOB: "01/01/1969"
          },
          {
            id: 4,
            first_name: "Kevin",
            last_name: "Ziechmann",
            phone: "444-444-4444",
            email: "kziechmann@gmail.com",
            password: "password",
            DOB: "01/01/1949"
          },
          {
            id: 5,
            first_name: "Jake",
            last_name: "Mosher",
            phone: "555-555-5555",
            email: "jmosher@gmail.com",
            password: "password",
            DOB: "01/01/1849"
          }
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
}