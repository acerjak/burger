const orm = require('../config/orm')

module.exports = {
    selectAll (cb) {
        orm.getAll('burgers', burgers => cb(burgers))
    },
    insertOne (burger, cb) {
        orm.createOne('burgers', burger, info => cb(info))
    },
    updateOne (changes, where, cb) {
        orm.updateOne('burgers', changes, where, info => cb(info))
    }
}