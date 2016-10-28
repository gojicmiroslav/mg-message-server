//The path.normalize() method normalizes the given path, resolving '..' and '.' segments.
var path = require('path');
var rootPath = path.normalize(__dirname + "/../../");

module.exports = {
	development: {
		rootPath: rootPath,
		port: process.env.PORT || 5000
	},

	production: {
		rootPath: rootPath,
		port: process.env.PORT
	}
}