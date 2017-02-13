var express = require('express');
var app = express();
var massive = require("massive");
var connectionString = "postgres://alex:Zontz0_aws_ead@enterprise-app-dev.chtkdq9vnucp.eu-west-1.rds.amazonaws.com:5432/pgguide";

// connect to Massive and get the db instance. You can safely use the
// convenience sync method here because its on app load
// you can also use loadSync - it's an alias
var massiveInstance = massive.connectSync({connectionString : connectionString})

// Set a reference to the massive instance` on Express' app:
app.set('db', massiveInstance);
app.set('view options', { pretty: true });

var db = app.get('db');

app.get('/users', function (req, res) {
  db.users.find({}, function(err,data){
    res.status(200).send(data);
  });
})

app.get('/users/:id', function (req, res) {
  db.users.find({id : req.params.id}, function(err,data){
    res.status(200).send(data);
  });
})

app.get('/products', function (req, res) {
  var name = req.query.name;

  console.log(name);
  db.run(`select * from products where title = ${name}`, function(err,data){
    res.status(200).send(data);
  });
})

app.get('/products/:id', function (req, res) {
  db.products.find({id : req.params.id}, function(err,data){
    res.status(200).send(data);
  });
})

app.get('/purchases', function (req, res) {
  db.purchases.find({}, function(err,data){
    res.status(200).send(data);
  });
})

app.get('/purchases/:id', function (req, res) {
  db.purchases.find({id : req.params.id}, function(err,data){
    res.status(200).send(data);
  });
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
