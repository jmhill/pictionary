var gameInstance = require('./GameInstance.controller.js');

module.exports = function(app) {
  app.post('/initialize', gameInstance.newGame);
}
