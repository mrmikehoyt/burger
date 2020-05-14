var connection = require('./connection.js');
//contains all my sqlquerys that are used / logic 
const orm = {
  //selectall orm that selects tables from function that are in tablename
  selectAll: function (tablename, cb) {

    connection.query('SELECT * FROM ??;', [tablename], function (err, result) {
      if (err) throw err;
      // console.log(result);
      cb(result);
    })
  },
  //insertone orm that inserts into tablename, colname, burger_name, and callsback  
  insertOne: function (tablename, colname, burger_name, cb) {

    connection.query("INSERT INTO ?? (??) VALUES (?)", [tablename, colname, burger_name], function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  //updateone orm  that updates tablename, colname, devoured, id , and callsback. look at burger.js for hints
  updateOne: function (tablename, colname, devoured, id, cb) {

    connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [tablename, colname, devoured, id], function (err, result) {
      if (err) throw err;
      cb(result);

    });
  },
};

module.exports = orm;