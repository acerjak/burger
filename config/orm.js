const db = require('../db')

const orm = {
    selectAll (table, cb){
        db.query(`SELECT * FROM burgers`, (err, burgers) => {
        if (err) { console.log(err) }
        cb(data)
    })
},
    insertOne (table, where, cb) {
        db.query(`INSERT INTO burgers SET ?`, data, (err, info) => {
        if (err) { console.log(err) }
        db(data)
    })
},
    updateOne (table, changes, where, cb) {
        db.query(`UPDATE burger SET ? WHERE ?`, [changes, where], (err, info) => {
            if (err) { console.log(err) }
            cb(info)
    })
}

}

module.exports = orm

