var game = require('../game-engine');

module.exports = function(socket) {
	var word = game.getWord();
	console.log('New client connected');

	socket.on('draw', function(position) {
		socket.broadcast.emit('draw', position);
	});

	socket.on('guess', function(guess) {
		socket.broadcast.emit('guess', guess);
		console.log('user just guessed' + guess);
	});

	socket.on('claim pen', function(){
		socket.isInDrawMode = true;
		socket.emit('drawer', word);
		socket.broadcast.emit('pen claimed');
		console.log('user asked for pen control');
	});

	socket.on('disconnect', function() {
		if (socket.isInDrawMode) {
			console.log('A drawer disconnected');
			socket.broadcast.emit('pen open');
		} else {
			console.log('A guesser disconnected');
		}
	});
};
