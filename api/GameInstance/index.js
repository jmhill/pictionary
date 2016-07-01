var gameInstance = require('./GameInstance.controller.js');

module.exports = function(app) {
  app.post('/initialize', gameInstance.newGame);
  
  app.get('/game/:id', function(request, response, next) {
    response.render('index', {});
  });
}
