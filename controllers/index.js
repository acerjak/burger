const router = require('express').Router()

router.use('/api', require('./burgerRoutes'))

module.exports = router