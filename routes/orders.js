var express = require('express')
var router = express.Router()
const knex = require('../knex.js')

//List (get all of the resource)
router.get('/', function (req, res, next) {
  knex('orders')
    .select('*')
    .then(data => res.status(200).json(data))  
})

//Read (get one of the resource)
router.get('/:id', function (req, res, next) {
  const id = req.params.id
  knex('orders')
    .select('*')
    .where({ id })
    .first()
    .then(order => res.status(200).json(order))
})

//Create (create one of the resource)
router.post('/', async(req, res, next)=> {
  const drinks = req.body.drinks
  console.log("inside POST orders:  ", req.body, '\n')
  console.log("req.body:  ", req.body, '\n')
  let drink_order = await drinks.map(drink=>{
    return knex('drink_options')
            .insert({
              drink_id: drink.id,
              option_id: drink.optionId,
              price: drink.price
            }.then(drink_option => drink_option[0]))
  })
  console.log("drink_order: ", drink_order)
  const total = drink_order.reduce((sum, drink) => sum + drink.price , 0)
  knex('orders')
    .insert({
      drink_order: String(drink_order),
      color: req.body.color,
      total: total,
      paid: false,
      user_id: req.body.userId,
    }, '*')
    .then((order) => {
      res.status(200).json(order[0])
    })
})

//Update (update one of the resource)
router.patch('/:id', function (req, res, next) {
  knex('orders')
  .update({
    color: req.body.color,
    total: req.body.total,
    paid: req.body.paid,
    user_id: req.body.userId,
  }, '*')
  .then((order) => {
    res.status(200).json(order[0])
  })
})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  knex('orders')
    .where({
      id : req.params.id
    })
    .del()
    .returning('*')
    .then(deleted=>{
      res.status(200).send(deleted[0])
    })
})

module.exports = router;
