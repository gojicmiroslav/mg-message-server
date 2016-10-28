var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    res.send('<h1>Hello, It is working!!!</h1>');
});

app.get('/about', function(req, res) {
    res.send('About');
});


app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});