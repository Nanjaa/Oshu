$(document).ready(function() {

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
		if(Oshu.finished == 5) {
			concludeGame(true);
		}
		if(Oshu.remainingLife === 0) {
			clearInterval(life);
			concludeGame(false);
			return;
		}
		loseLife();
	}, 1000);

	window.setInterval(life);
	
});