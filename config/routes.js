
module.exports = function(app, database) {
	app.get('/', function(req, res) {
	    res.send('<h1>Hello, It is working!!!</h1>');
	});

	app.get('/about', function(req, res) {
	    res.send('About');
	});

	app.post('/api/message', function(req, res){
		console.log(req.body);
		res.sendStatus(200);
		database.collection('messages').insertOne(req.body);
	});
};