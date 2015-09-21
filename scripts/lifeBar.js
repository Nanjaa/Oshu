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
		// check that the game is still the primary focus
		if(document.hasFocus() == false) {
			$('#pausedOverlay').show();
			pauseGame();
		}
		// check that the game is unpaused
		else if(!paused) {
			// check that you haven't completed all the quests 
			if(Oshu.finished == 5) {
				concludeGame(true);
			}
			// check that you still have life
			else if(Oshu.remainingLife === 0) {
				clearInterval(life);
				concludeGame(false);
				return;
			}
			// if you are good to go, drain the life bar
			else {
				loseLife();			
			}			
		}

	}, 1000);

	window.setInterval(life);
	
});