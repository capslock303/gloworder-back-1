require('dotenv').config()

var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var ordersRouter = require('./routes/orders')
var drinksRouter = require('./routes/drinks')
var optionsRouter = require('./routes/options')
var drinkOrdersRouter = require('./routes/drink_orders')

var app = express()

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
app.use('/drink_orders', drinkOrdersRouter)


module.exports = app
