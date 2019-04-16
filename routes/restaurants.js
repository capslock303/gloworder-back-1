var express = require('express')
var router = express.Router()
const knex = require('../knex.js')


//List (get all of the resource)
router.get('/', function (req, res, next) {
  return knex('restaurants')
    .select('*')
    .then(data => res.status(200).json(data))
})

//Read (get one of the resource)
router.get('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('restaurants')
    .first('*')
    .where({ id })
    .then(restaurants => res.status(200).json(restaurants))
})

//Create (create one of the resource)
router.post('/', function (req, res, next) {
  return knex('restaurants')
    .insert({
      name: req.body.name,
      location: req.body.location
    }, '*')
    .then(restaurant => res.status(200).json(restaurant[0]))
})

//Update (update one of the resource)
router.patch('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('restaurants')
    .where({ id })
    .update({
      name: req.body.name,
      location: req.body.location
    }, '*')
    .then(restaurant => res.status(200).json(restaurant[0]))

})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('restaurants')
    .where({ id })
    .del('*')
    .then(restaurant => res.status(200).json(restaurant[0]))
})

module.exports = router;
