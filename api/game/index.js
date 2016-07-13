var games = require('./game.controller.js');

module.exports = function(app) {
  app.post('/initialize', games.newGame);
  
  app.get('/game/:id', function(request, response, next) {
    response.render('index', {gameId: request.params.id});
  });
}
