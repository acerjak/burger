const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Zoe2020!',
    database: 'burgers_db'
})

module.exports = db