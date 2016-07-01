var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');

module.exports = function() {
  var app = express();
  
  if (process.env.NODE_ENV === "development") {
    app.use(require('morgan')('dev'));
  }
  
  app.set('views', './views');
  app.set('view engine', 'ejs');
  
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
  
  app.use(express.static('public'));
  app.use('/docs', express.static('docs'));
  
  // Register all routers here
  require('../api/game')(app);
  
  return app;
  
};

