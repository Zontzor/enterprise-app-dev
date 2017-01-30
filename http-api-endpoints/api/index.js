var express = require('express');
var app = express();
var http = require('http');
var massive = require("massive");
var connectionString = "postgres://alex:password@localhost/pgguide";

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var massiveInstance = massive.connectSync({connectionString : connectionString}) 

// Set a reference to the massive instance on Express' app:
app.set('db', massiveInstance);
http.createServer(app).listen(8080);

app.get('/', function (req, res) {
  res.send('Hello World!\n')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
