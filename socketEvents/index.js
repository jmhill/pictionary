var game = require('../game-engine');

module.exports = function(socket) {
  console.log('New client connected');
  
  var room;
  
  // Initialize the socket to place user in a room that matches the gameId.
  socket.on('app:init', function(gameId) {
    room = gameId;
    socket.join(room);
  });
  
  // Initialize a new game
  socket.on('game:start', function() {
    var word = game.getWord();
    socket.emit('game:start', word, true);
    socket.broadcast.to(room).emit('game:start', null, false);
  });
  
  // Server recceives a new guess
  socket.on('game:guess', function(guess) {
    socket.broadcast.to(room).emit('game:guess', guess);
  })
  
  // Server receives drawing data
  socket.on('game:draw', function(position) {
    socket.broadcast.to(room).emit('game:draw', position);
  });

  // If a player drops, needs to handle sending updates to other players:
  // If drawing player drops, need to end game
  // If other player, just notify
  // TODO: This still has the old socket implementation, update as new features added
  // For example, when user leaves, send out a socket event notifying other clients
  // It won't break anything as is, so just leave it for now until user list feature added
  socket.on('disconnect', function() {
    if (socket.isInDrawMode) {
      console.log('A drawer disconnected');
      socket.broadcast.emit('pen open');
    } else {
      console.log('A guesser disconnected');
    }
  });
};
