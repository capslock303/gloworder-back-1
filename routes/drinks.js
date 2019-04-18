var express = require('express')
var router = express.Router()
const knex = require('../knex.js')


//List (get all of the resource)
router.get('/', function (req, res, next) {
  return knex('drinks')
    .select('*')
    .then(data => res.status(200).json(data))
})

//Read (get one of the resource)
router.get('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('drinks')
    .first('*')
    .where({ id })
    .then(drinks => res.status(200).json(drinks))
})

//Create (create one of the resource)
router.post('/', function (req, res, next) {
  return knex('drinks')
    .insert({
      liquor: req.body.liquor,
      price: req.body.price
    }, '*')
    .then(drink => res.status(200).json(drink[0]))
})

//Update (update one of the resource)
router.patch('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('drinks')
    .where({ id })
    .update({
      liquor: req.body.liquor,
      price: req.body.price
    }, '*')
    .then(drink => res.status(200).json(drink[0]))

})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('drinks')
    .where({ id })
    .del('*')
    .then(drink => res.status(200).json(drink[0]))
})

module.exports = router;
