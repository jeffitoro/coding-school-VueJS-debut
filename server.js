const express = require("express");
//paquet pour générer les pages html
const conso = require("consolidate");
//creation d'application express
const app = express();
//définition des dossiers au quel les users ont droit d'accèder
app.use(express.static(__dirname + "public"));
//création d'un moteur de rendu avec "html" comme clé,
app.engine("html", conso.swig);

//connection à ma base de données
let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ciélOs",
  database: "tutotodo"
});

app.get("/", (req, resp) => {
  resp.render("index");
  console.log("une connection");
});

app.listen(8080, function() {
  console.log("Example app listenning on port 8080");
});
