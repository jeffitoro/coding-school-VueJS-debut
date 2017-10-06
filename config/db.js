//connection à ma base de données
let mysql = require("mysql");
// function connection() {

//   return laconnection;
// }
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ciélOs",
  database: "tutotodo"
});
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
