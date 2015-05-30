$(document).ready(function() {

// begin

	function lifeBar() {
		var remainingLife = Oshu.remainingLife;
		remainingLife = remainingLife - 1;
		Oshu.remainingLife = remainingLife;
		
		var percent = ((Oshu.remainingLife/3600)*100) + "%";
		$('#life').css('width', percent);
		if(Oshu.remainingLife >= 2400) {
			$('#life').css('background-color', 'green');
		}
		else if(Oshu.remainingLife >= 1200) {
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
		if(Oshu.remainingLife === 0) {
			clearInterval(life);
			return;
		}
		loseLife();
		lifeBar();
	}, 1000);

	window.setInterval(life);
	
});