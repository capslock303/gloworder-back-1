require('dotenv').config()

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const ordersRouter = require('./routes/orders')
const drinksRouter = require('./routes/drinks')
const optionsRouter = require('./routes/options')
const drinkOptionsRouter = require('./routes/drink_options')
const restaurantsRouter = require('./routes/restaurants')
const tokenRouter = require('./routes/token')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/orders', ordersRouter)
app.use('/drinks', drinksRouter)
app.use('/options', optionsRouter)
app.use('/drink_options', drinkOptionsRouter)
app.use('/restaurants', restaurantsRouter)
app.use('/token', tokenRouter)

// Error handling for not found route
app.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

// Error handling for internal error
app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({
    error: {
      status: error.status,
      message: error.message
    }
  })
})

module.exports = app
