/**
 * Mongoose initialization module
 * @module
 * 
 * This module is meant to required in server.js to 
 * accomplish 3 tasks:
 *  1. Open a new connection to the database
 *  2. Initialize all mongoose models on the new connection
 *  3. Return the database connection
 */

var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);
  
  // All model files must be required here
  require('../api/game/game.model.js');
  
  return db;
};