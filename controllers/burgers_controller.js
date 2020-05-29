// bring in express
// const express = require('express')
// const orm = require('../config/orm')

const router = require('express').Router()
// const Burgers = require('../public/Burgers.js')
const { Burger } = require('../models/index.js')

// const burger = new Burgers()

//GET all burgers
// router.get('/burgers', (req, res) => {
//     let burger = burger.selectAll()
//     res.json(burgers)
// })

router.get('/burgers', (req, res) => Burger
    .selectAll(burgers => res.json(burgers)))

//POST one burger
// router.post('/burgers', (req, res) => {
//     burger.insertOne(req.body)
//     res.sendStatus(200)
// })

router.post('/burgers', (req, res) => Burger
    .insertOne(req.body, info => res.json(info)))

//PUT one burger
// router.put('/burgers/:text', (req, res) => {
//     burger.updateOne(req.params.text)
//     res.sendStatus(200)
// })

router.put('/burgers/:id', (req, res) => Burger 
    .updateOne(req.body, { id: req.params.id }, info => res.json(info)))

module.exports = router