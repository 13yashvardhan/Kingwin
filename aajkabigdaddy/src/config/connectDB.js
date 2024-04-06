const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'aajkabigdaddy',
    password: 'aajkabigdaddy',
    database: 'aajkabigdaddy',
});

export default connection;