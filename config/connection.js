var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "root",
    database: "burgers_db"
  });

//   Establish connection
connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

// connection.query('SELECT * FROM burgers', function (error, results, fields) {
//     if (error)
//         throw error;

//     results.forEach(result => {
//         console.log(result);
//     });
// });

// Export connection 
module.exports = connection; 