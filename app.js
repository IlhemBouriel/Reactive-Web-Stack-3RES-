var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var db = require('./server/utils/db');

/**
  Adding the controllers.
*/
var dbModel = new db();
/**
  Setting up the database and creating table.
*/
dbModel.setupDb();
app.use(bodyParser.json());
app.use(require('./server/controllers'));

http.listen(3000, function(){
  console.log('listening on port 3000');
});