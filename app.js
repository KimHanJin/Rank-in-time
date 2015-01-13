/**
 * Module dependencies.
 */

var express = require('express');
var fs = require('fs');

var app = module.exports = express.createServer();

// Configuration

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(__dirname + '/public'));
});

app.configure('development', function() {
	app.use(express.errorHandler({
		dumpExceptions : true,
		showStack : true
	}));
});

app.configure('production', function() {
	app.use(express.errorHandler());
});

// Routes

app.get('/', function(req, res) {
	// res.render('index', {
	// title: 'Express'
	fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text) {
		res.send(text);
	});
});

app.post('/saveList', function(req, res) {
	console.log(req.rawBody);
	// req.rawBody = {"list":["item1", "item2", "item3", "..."]}
	// mongodb에 json 형태로 쎄리 박아야 함.
	res.send(req.rawBody);
});

app.listen(4000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
