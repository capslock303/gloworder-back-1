const express = require('express')
const knex = require('../knex.js')
const bcrypt = require('bcryptjs')

const router = express.Router()

//List (get all of the resource)
router.get('/', function (req, res, next) {
  knex('users')
    .select('*')
    .then(data => res.status(200).json(data))
})

//Read (get one of the resource)
router.get('/:id', function (req, res, next) {
  const id = req.params.id
  knex('users')
    .first('*')
    .where({ id })
    .then(data => res.status(200).json(data))
})

//Create (create one of the resource)
router.post('/', function (req, res, next) {
  return knex('users')
    .insert({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      DOB: req.body.DOB
    }, '*')
    .then((user) => {
      res.status(200).json({
        id: user[0].id,
        first_name: user[0].firstName,
        last_name: user[0].lastName,
        email: user[0].email
      })
    })
})

//Update (update one of the resource)
router.patch('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('users')
    .where({ id })
    .update({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      DOB: req.body.DOB
    }, '*')
    .then((user) => {
      res.status(200).json({
        id: user[0].id,
        firstName: user[0].first_name,
        lastName: user[0].last_name,
        email: user[0].email
      })
    })

})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('users')
    .where({ id })
    .del('*')
    .then(user => res.status(200).json({
      id: user[0].id,
      firstName: user[0].first_name,
      lastName: user[0].last_name,
      email: user[0].email
    }))
})

module.exports = router
