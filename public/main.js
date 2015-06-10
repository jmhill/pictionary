var pictionary = function() {
	var canvas, 
		context, 
		drawing, 
		guessbox;

	var socket = io();

	var draw = function (position) {
		context.beginPath();
		context.arc(position.x, position.y, 6, 0, 2 * Math.PI);
		context.fill();
	};

	var onKeyDown = function (event) {
		if (event.keyCode != 13) { // If NOT enter/return key
			return;
		}

		var guess = guessbox.val();
		console.log(guess);
		socket.emit('guess', guess);
		guessbox.val('');
	};

	canvas = $('canvas');
	context = canvas[0].getContext('2d');
	canvas[0].width = canvas[0].offsetWidth;
	canvas[0].height = canvas[0].offsetHeight;
	
	canvas.on('mousedown', function() {
		drawing = true;
	});

	canvas.on('mouseup', function() {
		drawing = false;
	});

	canvas.on('mousemove', function(event) {
		var offset = canvas.offset();
		var position = { 
			x: event.pageX - offset.left,
			y: event.pageY - offset.top
		};
		if (drawing) {
			draw(position);
			socket.emit('draw', position);
		}
	});

	socket.on('draw', function(position) {
		draw(position);
	});

	clearButton = $('#clear');
	clearButton.on('click', function() {
		context.clearRect(0, 0, canvas[0].width, canvas[0].height);
	});

	guessbox = $('#guess').find('input');
	guessbox.on('keydown', onKeyDown);
};

$(document).ready(function(){
	pictionary();
});