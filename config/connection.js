const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "securepassword",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("if you see this message there is a problem connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
