var Game = require('mongoose').model('Game');

exports.newGame = function(request, response, next) {
  var game = new Game({
    name: request.body.name
  });
  game.save(function(err) {
    if (err) {
      return next(err);
    } else {
      response.redirect('/game/' + game._id);
    }
  })
};