const mysql = require("mysql2");
// const dotenv = require("dotenv")
// dotenv.config

// Create a connection to the MySQL database
const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password:"",
        database: "tradodb"
       

    }
);

// Connect to the database
connection.connect((err) => {
    if (err) {
        throw err
    }
    console.log('Connected to MySQL server');

});

module.exports = connection;