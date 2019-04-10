var express = require('express')
var router = express.Router()


//List (get all of the resource)
router.get('/', function (req, res, next) {
  res.sendStatus(200)
})

//Read (get one of the resource)
router.get('/:id', function (req, res, next) {
  res.status(200).send(req.params.id)
})

//Create (create one of the resource)
router.post('/', function (req, res, next) {
  res.status(200).send("success!")
})

//Update (update one of the resource)
router.patch('/:id', function (req, res, next) {
  let result = { id: req.params.id, name: req.body.name }
  res.status(200).send(result)
})

//Delete (delete one of the resource)
router.delete('/:id', function (req, res, next) {
  res.status(200).send(req.params.id)
})

module.exports = router;
