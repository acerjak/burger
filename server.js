// bring in express
const express = require('express')

const app = express()

//bring in dotenv
require('dotenv').config()

//bring in middleware
const { join } = require('path')
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//bring in routes
app.use(require('./controllers/index'))

//listen for server
app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))