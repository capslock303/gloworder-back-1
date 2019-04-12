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
    .first('*') // Same as .select but return obj rather than obj in arr
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
      hashedPassword: bcrypt.hashSync(req.body.password, 10),
      DOB: req.body.DOB,
    }, '*')
    .then(user => res.status(200).json(user[0]))
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
