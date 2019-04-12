var express = require('express')
var router = express.Router()
const knex = require('../knex.js')


//List (get all of the resource)
router.get('/', function (req, res, next) {
  knex('options')
    .select('*')
    .then(data => res.status(200).json(data))
})
router.get('/:id', function (req, res, next) {
  const id = req.params.id
  knex('options')
    .first('*')
    .where({ id })
    .then(options => res.status(200).json(options))
})

//Create (create one of the resource)
router.post('/', function (req, res, next) {
  return knex('options')
    .insert({
      option: req.body.option,
      price: req.body.price
    }, '*')
    .then(option => res.status(200).json(option[0]))
})

//Update (update one of the resource)
router.patch('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('options')
    .where({ id })
    .update({
      option: req.body.option,
      price: req.body.price
    }, '*')
    .then(option => res.status(200).json(option[0]))

})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  const id = req.params.id
  return knex('options')
    .where({ id })
    .del('*')
    .then(option => res.status(200).json(option[0]))
})


module.exports = router;
