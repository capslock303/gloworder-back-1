const express = require('express')
const knex = require('../knex.js')
const bcrypt = require('bcryptjs')

const router = express.Router()


//List (get all of the resource)
router.get('/', function (req, res, next) {
  knex('users').select('*').then(data => res.status(200).json(data))
})

//Read (get one of the resource)
router.get('/:id', function (req, res, next) {
  res.status(200).send(req.params.id)
})

//Create (create one of the resource)
router.post('/', function (req, res, next) {
  // async await needed to ensure password is hashed before posting?
  const hash = bcrypt.hashSync(req.body.password, 10)
  
  return knex('users')
    .insert({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      hashedPassword: hash,
      DOB: req.body.DOB,
    }, '*')
    .then(user => res.status(200).json(user))
})

//Update (update one of the resource)
router.patch('/:id', function (req, res, next) {
  let result = { id: req.params.id, name: req.body.name }
  res.status(200).send(result)
})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  res.status(200).send(req.params.id)
})

module.exports = router;
