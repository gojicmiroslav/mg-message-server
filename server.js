var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = process.env.PORT || 8080;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// CORS Support
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
  	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  	next();
});

app.get('/', function(req, res) {
    res.send('<h1>Hello, It is working!!!</h1>');
});

app.get('/about', function(req, res) {
    res.send('About');
});


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});