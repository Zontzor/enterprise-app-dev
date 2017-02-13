var express = require('express');
var app = express();
var Sequelize = require('sequelize');
var connectionString = "postgres://alex:Zontz0_aws_ead@enterprise-app-dev.chtkdq9vnucp.eu-west-1.rds.amazonaws.com:5432/court_system";

var sequelize = new Sequelize(connectionString, {});

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
