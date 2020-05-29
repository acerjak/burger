//bring in dotenv
require('dotenv').config()
// bring in express
const express = require('express')
const app = express()

//bring in middleware
const { join } = require('path')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))