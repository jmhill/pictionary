var http = require('http');
var express = require('express');
var socket_io = require('socket.io');

var app = express();
app.use(express.static('public'));

var server = http.Server(app);
var io = socket_io(server);

var clientNumber = 0;

io.on('connection', function(socket) {
	clientNumber++;
	socket.clientNumber = clientNumber;
	if (socket.clientNumber === 1) {
		socket.emit('drawer');
	}
	console.log('New client number ' + socket.clientNumber + ' connected');
	socket.on('draw', function(position) {
		socket.broadcast.emit('draw', position);
	});
	socket.on('guess', function(guess) {
		socket.broadcast.emit('guess', guess);
	});
});

server.listen(8080);