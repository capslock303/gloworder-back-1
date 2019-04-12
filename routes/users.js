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
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      DOB: req.body.DOB
    }, '*')
    .then(user => res.status(200).json(user[0]))
})

//Update (update one of the resource)
router.patch('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('users')
    .where({ id })
    .update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      DOB: req.body.DOB
    }, '*')
    .then(user => res.status(200).json(user[0]))

})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('users')
    .where({ id })
    .del('*')
    .then(user => res.status(200).json(user[0]))
})

module.exports = router
