var config = require('./config');
var express = require('express');
var morgan = require('morgan');

module.exports = function() {
  var app = express();
  
  if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
  }
  
  app.use(express.static('public'));
  app.use('/docs', express.static('docs'));
  
  // Register all routers here
  
  return app;
  
};

