const sql = require('mssql')

var config = {
    //user: 'sa',
    //password: '1234',
    server: 'localhost',
    database: 'restaurant'
};

const poolPromised = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connect to MSSQL')
        return pool
    }).catch(err => console.log('Database connection failed! Bad config: ', err))
module.exports = { sql, poolPromised }