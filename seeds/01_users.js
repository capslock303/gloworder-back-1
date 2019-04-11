exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert(
        [
          {
            id: 1,
            firstName: "Phillip",
            lastName: "Borgenicht",
            phone: "111-111-1111",
            email: "pborgenicht@gmail.com",
            hashedPassword: "hashedPassword",
            DOB: "01/01/1979"
          },
          {
            id: 2,
            firstName: "Dustin",
            lastName: "Huth",
            phone: "222-222-2222",
            email: "dhuth@gmail.com",
            hashedPassword: "hashedPassword",
            DOB: "01/01/1989"
          },
          {
            id: 3,
            firstName: "Seth",
            lastName: "Brown",
            phone: "333-333-3333",
            email: "sbrown@gmail.com",
            hashedPassword: "hashedPassword",
            DOB: "01/01/1969"
          },
          {
            id: 4,
            firstName: "Kevin",
            lastName: "Ziechmann",
            phone: "444-444-4444",
            email: "kziechmann@gmail.com",
            hashedPassword: "hashedPassword",
            DOB: "01/01/1949"
          },
          {
            id: 5,
            firstName: "Jake",
            lastName: "Mosher",
            phone: "555-555-5555",
            email: "jmosher@gmail.com",
            hashedPassword: "hashedPassword",
            DOB: "01/01/1849"
          }
        ]
      )
    })
    .then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
    })
}