const router = require('express').Router()
const { Burger } = require('./index')

//GET all burgers
router.get('/burgers', (req, res) => Burger
    .selectAll(burgers => res.json(burgers)))

//POST one burger
router.post('/burgers', (req, res) => Burger
    .insertOne(req.body, info => res.json(info)))

//PUT one burger
router.put('/burgers', (req, res) => Burger 
    .updateOne(req.body, { id: req.params.id }, info => res.json(info)))

module.exports = router