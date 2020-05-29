const router = require('express').Router()
const { Burger } = require('./index')

router.get('/burgers', (req, res) => {
    Burger.selectAll( burgers => {
        res.render('burgers', { burgers })

    }) 
})

module.exports = router