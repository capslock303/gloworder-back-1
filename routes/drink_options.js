var express = require('express')
var router = express.Router()
const knex = require('../knex.js')


//List (get all of the resource)
router.get('/', function (req, res, next) {
  knex('drink_options')
  .select('*')
  .then(data => res.status(200).json(data))
})

//Read (get one of the resource)
// router.get('/:id', function (req, res, next) {
//   res.status(200).send(req.params.id)
// })

//Create (create one of the resource)
router.post('/', function (req, res, next) {
  return knex('drink_options')
    .insert({
      drink_id: req.body.drinkId,
      option_id: req.body.optionId,
      price: req.body.price
    }, '*')
    .then(option => res.status(200).json(option[0]))
})

//Update (update one of the resource)
router.patch('/:id', function (req, res, next) {
  const id = req.params.id

  return knex('drink_options')
    .where({ id })
    .update({
      drink_id: req.body.drinkId,
      option_id: req.body.optionId,
      price: req.body.price
    }, '*')
    .then(option => res.status(200).json(option[0]))

})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  res.status(200).send(req.params.id)
})

module.exports = router;
