var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 3000);
app.use(express.static('public'));

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('new connection: ' + socket.id);

	socket.on('greeting', greetingText);

	function greetingText (data){
		socket.emit('greeting', data);
		console.log(data);
	}
}