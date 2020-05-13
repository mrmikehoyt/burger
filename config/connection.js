//to require mysql
const mysql = require("mysql");
//code to connect node to mysql database burgers_db

  const connection = mysql.createConnection(process.env.JAWSDB_URL)


//;

connection.connect(function(err) {
  if (err) {
    console.error("if you see this message there is a problem connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
//exporting connection file (connection to connect node to mysql database burgers_db)
module.exports = connection;
