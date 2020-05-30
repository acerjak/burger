// bring in express
// const express = require('express')
// const orm = require('../config/orm')
const router = require('express').Router()
const { Burger } = require('../models')

// const burger = new Burgers()

//GET all burgers
router.get('/burgers', (req, res) => Burger
    .getBurgers(burgers => res.json(burgers)))

//POST one burger
router.post('/burgers', (req, res) => Burger
    .addBurger(req.body, info => res.json(info)))

//PUT one burger
router.put('/burgers/:id', (req, res) => Burger 
    .updateBurger(req.body, { id: req.params.id }, info => res.json(info)))

module.exports = router