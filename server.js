//body parser pour recuperer c qui il y a en request en parser comme un objet
const express = require("express");
//paquet pour générer les pages html
const conso = require("consolidate");
//creation d'application express
const app = express();
//définition des dossiers au quel les users ont droit d'accèder
app.use(express.static(__dirname + "/public"));
//création d'un moteur de rendu avec "html" comme clé,
app.engine("html", conso.swig);
//ONdéfinit le moteur de rendu des pages
app.set("view engine", "html");
//définir dossier qui contient vue
app.set("views", __dirname + "/views");

let bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

let connection = require("./config/db");

app.get("/", (req, resp) => {
  console.log("racine");
  resp.render("index");
});

app.get("/getTodos", (req, resp) => {
  let sql = "SELECT * FROM Task";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log('connected and output tasks');;
    resp.send(result);
  });
});

app.post("/add-todo", (req, res) => {
  let sql = "INSERT INTO Task (txt,status) VALUES ('" + req.body.txt + "','" + req.body.status + "');";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("1 record inserted");
    res.send({ message: "La tâche a bien été ajouté" });
  });
  console.log("je suis ici");
});

app.post("/delete-todo", (req, resp) => {
  let sql = "DELETE FROM Task WHERE id = '" + req.body.id + "';";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("is deleted");
    resp.send({ message: "La tâche a bien été éléminée" });
  })
})

app.post("/edit-todo", (req, resp) => {
  console.log(req.body.id + " " + req.body.txt + " " + req.body.status);
  let sql = "UPDATE Task "
    + "SET txt = '" + req.body.txt + "', status = '" + req.body.status +
    "' WHERE id = '" + req.body.id + "';";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("J'ai édité");
    resp.send({ message: "tache réecrite" });
  })
})

app.get("/add-todo", (req, resp) => {
  let sql = "SELECT * FROM Task WHERE id = (SELECT MAX(id) FROM Task);";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("j'ai envoyé requete");
    console.log(result);
    resp.send(result);
  })
})

app.listen(8080, function () {
  console.log("Example app listenning on port 8080");
});
