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

// Uncomment to demonstrate SQL injection
app.get('/products/unsecure', function (req, res) {
  var title = req.query.title;
  console.log(title);
  
  db.run(`select * from products where title = ${title}`, function(err,data){
    res.status(200).send(data);
  });
})

app.get('/products/secure/params', function (req, res) {
  db.products.find({title: req.query.title}, function(err,data){
    res.status(200).send(data);
  });
})

app.get('/products/secure/procedure', function (req, res) {
  var title = req.query.title;
  console.log(title);
  
  db.run(`select * from get_product('${title}')`, function(err,data){
    res.status(200).send(data);
  });
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
