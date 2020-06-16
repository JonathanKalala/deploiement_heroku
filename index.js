var express = require('express');

var app = express();
const PORT = 8080;
app.get('/', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Vous êtes à l\'accueil');
});

app.listen((PORT), ()=>{
    console.log("le serveur ecoute sur le port 8080");
});