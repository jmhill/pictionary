process.env.NODE_ENV = process.env.NODE_ENV || "development";
var port = process.env.PORT || 8080;

var mongoose = require('./config/mongoose');
var express = require('./config/express');


var db = mongoose();
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var socketEvents = require('./socketEvents');

io.on('connection', socketEvents);

server.listen(port);
