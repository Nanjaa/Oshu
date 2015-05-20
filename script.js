$(document).ready(function() {

// begin

	var cookies = 100;

	$('#test').click(function() {
		cookieClick(1);
	});

	function cookieClick(number) {
		cookies = cookies - number;
		$('#number').text(cookies);
		var percent = cookies + "%";
		$('#life').css('width', percent);
		if(cookies >= 66) {
			$('#life').css('background-color', 'green');
		}
		else if(cookies >= 33) {
			$('#life').css('background-color', 'orange');
		}
		else {
			$('#life').css('background-color', 'red');
		}
	};

	$('#test2').click(function() {
		buyCursor();
	});

	var cursors = 1;

	function buyCursor() {
		var cursorCost = Math.floor(10 * Math.pow(1.1, cursors));
		if(cookies >= cursorCost) {
			cursors = cursors + 1;
			cookies = cookies - cursorCost;
			$('#number').text(cookies);
			$('#cursors').text(cursors);
		};
		var nextCost = Math.floor(10 * Math.pow(1.1, cursors));
		$('#cursorCost').text(nextCost);
	};

	var life = setInterval(function() {
		if(cookies === 0) {
			console.log('finished');
			clearInterval(life);
			return;
		}
		cookieClick(cursors);
	}, 100);

	window.setInterval(life);

	$('#stop').click(function() {
		clearInterval(life);
	})

	// window.setInterval(function() {
	// 	if(cookies === 0) {
	// 		console.log('finished');
	// 		clearInterval();
	// 		return;
	// 	}
	// 	cookieClick(cursors);
	// }, 10);












});