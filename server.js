var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongo = require('mongodb').MongoClient;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config')[env];

var database;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// CORS Support
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  	next();
});

mongo.connect('mongodb://localhost/test', function(err, db){
	if(err){
		console.log(err);
	} else {
		console.log('Connected to MongoDB');
		database = db;
		require('./config/routes')(app, database);
	}
});

app.listen(config.port, function() {
    console.log('App is running on http://localhost:' + config.port);
});