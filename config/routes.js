var mongoose = require('mongoose');

var Message = mongoose.model('Message', {
	msg: String
});

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error'));
db.on('open', function(){
	console.log('Connected to MongoDB');
});

function getMessages(req, res){
	Message.find({}).exec(function(err, result){
		console.log(result);
		res.send(result);
	});
}

module.exports = function(app, database) {
	app.get('/', function(req, res) {
	    res.send('<h1>Hello, It is working!!!</h1>');
	});

	app.get('/about', function(req, res) {
	    res.send('About');
	});

	app.get('/api/messages', getMessages);

	app.post('/api/message', function(req, res){
		console.log(req.body);
		var message = new Message(req.body);
		message.save(function(err){
			if (err) {
			    console.log(err);
		  	} else {
			    console.log('Message saved to MongoDB');
	  		}
		});
	});
};