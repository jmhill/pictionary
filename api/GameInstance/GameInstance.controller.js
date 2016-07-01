var GameInstance = require('mongoose').model('GameInstance');

exports.newGame = function(request, response, next) {
  var game = new GameInstance({
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