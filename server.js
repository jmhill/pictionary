process.env.NODE_ENV = process.env.NODE_ENV || "development";
var port = process.env.PORT || 8080;

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var game = require('./game');

app.use(express.static('public'));

io.on('connection', function(socket) {
	var word = game.getWord();
	console.log('New client connected');

	socket.on('draw', function(position) {
		socket.broadcast.emit('draw', position);
	});

	socket.on('guess', function(guess) {
		socket.broadcast.emit('guess', guess);
	});

	socket.on('claim pen', function(){
		socket.drawer = true;
		socket.emit('drawer', word);
		socket.broadcast.emit('pen claimed');
	});

	socket.on('disconnect', function() {
		if (socket.drawer) {
			console.log('A drawer disconnected');
			socket.broadcast.emit('pen open');
		} else {
			console.log('A guesser disconnected');
		}
	});
});

server.listen(port);
