//to require mysql
const mysql = require("mysql");
//code to connect node to mysql database burgers_db
if (process.env.JAWSDB_URL){
  const connection = mysql.createConnection(process.env.JAWSDB_URL)
  return connection 
}

else {
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "securepassword",
  database: "burgers_db"
  
})
return connection
};

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
