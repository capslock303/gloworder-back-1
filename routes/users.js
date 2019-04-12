const express = require('express')
const knex = require('../knex.js')
const bcrypt = require('bcryptjs')

const router = express.Router()

//List (get all of the resource)
router.get('/', function (req, res, next) {
  return knex('users')
    .select('*')
    .then(data => res.status(200).json(data))
})

//Read (get one of the resource)
router.get('/:id', function (req, res, next) {
  const id = req.params.id
  return knex('users')
    .first('*')
    .where({ id })
    .then(data => res.status(200).json(data))
})

//Create (create one of the resource)
router.post('/', function (req, res, next) {
  if(!req.body){next({status: 400, message:"Must included new user's information."})}
  if(!req.body.phone){next({status: 400, message:"Users must have a phone number to sign up"})}
  else if (!req.body.email){next({status: 400, message:"Users must include an email."})}
  else if (!req.body.DOB){next({status: 400, message:"Users must enter their date of birth."})}
  else if (!req.body.password){next({status: 400, message:"Accounts must have a password."})}
  else if (!req.body.firstName){next({status: 400, message:"Users must include a first Name."})}
  else if (!req.body.lastName){next({status: 400, message:"Users must include a last Name."})}

  return knex('users')
    .insert({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email || "blank@blank.com",
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
  if(req.body == null || !Object.keys(req.body)){next({status: 400, message:"Must include updated user information."})}
  else{
    const id = req.params.id
    let toUpdate = {}
    if(req.body.firstName){toUpdate["first_name"] = req.body.firstName}
    if(req.body.lastName){toUpdate["last_name"] = req.body.lastName}
    if(req.body.phone){toUpdate["phone"] = req.body.phone}
    if(req.body.email){toUpdate["email"] = req.body.email}
    if(req.body.password){toUpdate["password"] = bcrypt.hashSync(req.body.password, 10)}
    if(req.body.DOB){toUpdate["DOB"] = req.body.DOB}

    return knex('users')
    .where({id})
    .update({...toUpdate}, '*')
    .then((user) => {
        res.status(200).json({
          id: user[0].id,
          firstName: user[0].first_name,
          lastName: user[0].last_name,
          phone: user[0].phone,
          email: user[0].email,
          DOB: user[0].DOB
        })
      })
    }
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
