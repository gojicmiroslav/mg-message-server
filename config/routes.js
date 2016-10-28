
module.exports = function(app) {
	app.get('/', function(req, res) {
	    res.send('<h1>Hello, It is working!!!</h1>');
	});

	app.get('/about', function(req, res) {
	    res.send('About');
	});

	app.post('/api/message', function(req, res){
		console.log(req.body);
		res.sendStatus(200);
	});
};