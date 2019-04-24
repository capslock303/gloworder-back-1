var express = require('express')
var router = express.Router()
const knex = require('../knex.js')

//List (get all of the resource)
router.get('/', function (req, res, next) {
  return knex('orders')
    .select('*')
    .then(data => res.status(200).json(data))  
})

//Read (get one of the resource)
router.get('/:id', function (req, res, next) {
  const id = req.params.id
  return knex('orders')
    .select('*')
    .where({ id })
    .first()
    .then(order => res.status(200).json(order))
})

//Create (create one of the resource)
router.post('/', async(req, res, next)=> {
  if(!req.body){next({status:400, message:"Must include order information."})}
  if(!req.body.total){next({status:400, message:"Must include a total."})}
  else if (!req.body.drinkOrder){next({status:400, message:"Must include a drink order."})}
  else if (!req.body.userId){next({status:400, message:"Order must be associated with a user."})}

  return knex('orders')
    .insert({
      drink_order: req.body.drinkOrder,
      color: req.body.color || "red",
      total: req.body.total,
      paid: false,
      user_id: req.body.userId,
    }, '*')
    .then((order) => {
      res.status(200).json(order[0])
    })
})

//Update (update one of the resource)
router.patch('/:id', function (req, res, next) {
  if(req.body == null || !Object.keys(req.body)){next({status: 400, message:"Must include updated order information."})}
  else{
    let toUpdate = {}
    if(req.body.color){toUpdate["color"] = req.body.color}
    if (req.body.total){toUpdate["total"] = req.body.total}
    if (req.body.userId){toUpdate["user_id"] = req.body.userId}
    if (req.body.paid){toUpdate["paid"] = req.body.paid}

    return knex('orders')
    .where({id : req.params.id})
    .update({...toUpdate}, '*')
    .then((order) => {
      res.status(200).json(order[0])
    })
  }
})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  return knex('orders')
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
