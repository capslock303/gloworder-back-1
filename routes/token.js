'use strict'

const express = require('express')
const knex = require('../knex.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.get('/token', (req, res) => {
  if (!req.cookies.token) {
    res.json(false)
  }
  else if (req.cookies.token) {
    res.json(true)
  }
})

router.post('/token', (req, res, next) => {
  knex('users')
    .where({
      phone: req.body.phone
    })
    .select('*')
    .first()
    .then((user) => {
      if (user) {
        const payload = {
          id: user.id,
          firstName: user.first_name,
          lastName: user.last_name,
          phone: user.phone
        }
        if (bcrypt.compareSync(req.body.password, user.hashed_password)) {
          const secretkey = process.env.JWT_KEY
          const token = jwt.sign(payload, secretkey)
          res.cookie('token', token, {
            httpOnly: true
          }).json({
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            phone: user.phone
          })
        }
        else {
          next({
            status: 400,
            message: 'Bad email or password'
          })
        }
      }
      else {
        next({
          status: 400,
          message: 'Bad email or password'
        })
      }
    })
})

router.delete('/token', (req, res) => {
  res.clearCookie('token')
  res.end()
})

module.exports = router
