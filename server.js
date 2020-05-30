// bring in express
const express = require('express')
//bring in join method from path
const { join } = require('path')
//build new exress app to hook in middleware
const app = express()

//define handlebars
app.engine('.hbs', require('express-handlebars')({ extname: '.hbs'}))
app.set('view engine', '.hbs')

//bring in dotenv
require('dotenv').config()

//middleware to help serve all front end
app.use(express.static(join(__dirname, '/public/')))
//to accept json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//bring in routes
app.use(require('./controllers/index.js'))

//app to listen on port and show URL
app.listen(process.env.PORT || 3000, () => console.log('http://localhost:3000'))