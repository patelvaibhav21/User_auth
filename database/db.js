let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kishan@1233',
    database: 'task'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }else{
  
    console.log('Connected to the MySQL server.');
    }
  });

module.exports = connection;