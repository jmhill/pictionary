/**
 * GameInstance Model
 * @module GameInstance
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * @constructor
 */
var GameInstanceSchema = new Schema({
  name: String,
  players: [{
    name: String,
    points: Number
  }],
  currentWord: String
});

module.exports = mongoose.model('GameInstance', GameInstanceSchema);