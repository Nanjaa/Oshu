$(document).ready(function() {

// begin

	var remainingLife = 3600;

	function lifeBar() {
		remainingLife = remainingLife - 1;
		var percent = ((remainingLife/3600)*100) + "%";
		$('#life').css('width', percent);
		if(remainingLife >= 2400) {
			$('#life').css('background-color', 'green');
		}
		else if(remainingLife >= 1200) {
			$('#life').css('background-color', 'orange');
		}
		else {
			$('#life').css('background-color', 'red');
		}
	};

	var minutes = 60;
	var seconds = 00;

	function timer(seconds) {
		if(seconds < 10) {
			seconds = '0' + seconds;
			$('#seconds').text(seconds);
		}
		else {
			$('#seconds').text(seconds);
		}
	};

	function loseLife() {
		seconds = seconds - 1;
		timer(seconds);
		if(seconds == -1) {
			seconds = 59;
			$('#seconds').text(seconds);
			minutes = minutes - 1;
			$('#minutes').text(minutes);
		};		
	};

	var life = setInterval(function() {
		if(remainingLife === 0) {
			clearInterval(life);
			return;
		}
		loseLife();
		lifeBar();
	}, 1000);

	window.setInterval(life);


});