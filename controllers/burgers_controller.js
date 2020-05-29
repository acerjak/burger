// bring in express
const express = require('express')
const orm = require('../config/orm')


module.exports = {
    Burgers: require('./burgers_controller.js')
  }