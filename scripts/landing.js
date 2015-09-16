$(document).ready(function() {

	// $('#play').mouseOver(function() {
	// 	$('play').css('background-color', pink);
	// })
	// $('#play').mouseOUt(function() {
	// 	$('play').css('background-color', black);
	// })

	audio.addEventListener('ended', function() {
		this.currentTime = 0;
		this.play();
	}, false);

	play('music/introSong.wav');

	$('.sounds').click(function() {
		if($(this).attr('id') == 'soundsOn') {
			$('#soundsOn').hide();
			$('#soundsOff').show();
			localStorage.setItem('sound', false);
			console.log(localStorage.getItem('sound'));
			$('#audio').prop('muted', true);
			$('#oshuIntro').prop('muted', true);
		}
		else {
			$('#soundsOff').hide();
			$('#soundsOn').show();
			$('#audio').prop('muted', false);
			$('#oshuIntro').prop('muted', false);
			localStorage.setItem('sound', true);
			console.log(localStorage.getItem('sound'));
		}
	});

	var twinkle = false;
	var flames = false;

	function twinkleAndFlames() {
		var wait4 = setInterval(function() {
			twinkle = !twinkle;
			if(twinkle) {
				$('#stars2').fadeIn();
				$('stars2').fadeOut();
			}
			else {
				$('#stars2').hide();
			}
		}, 1000); 
		var wait5 = setInterval(function() {
			flames = !flames;
			if(flames) {
				$('#flames').css('color', '#ff6700');			
			}
			else {
				$('#flames').css('color', '#FFC332');				
			}
		}, 500);
		$('#clickPlay').click(function() {
			clearInterval(wait4);
			clearInterval(wait5);
			playGame();
		});
	};

	twinkleAndFlames();


	function playGame() {
		$('#audio').animate({volume: .3}, 1000);
		$('.hide').slideUp();
		$('.landingArtwork').fadeOut();
		$('#artwork').animate({
			height: '450px',
			width: '80%'
		}, 1000);
		$('#welcome').show();

		var wait1 = setTimeout(playText, 1000);
		var wait2 = setTimeout(showTitle, 55000);
		var wait3 = setTimeout(showSub, 57000);
		var wait4 = setTimeout(hideTitles, 61000);
		var wait5 = setTimeout(showInstructions, 62000);
		$('#skip').click(function() {
			oshuIntro.pause();
			clearTimeout(wait2);
			clearTimeout(wait3);
			$('#welcome').hide();
			$('#instructions').show();
		});
	}

	var text = {
		introduction: "Hello, my name is Oshu. I am an android. This is the year 2175. Androids, humans, aliens, and other species live together in harmony. As an android, I have a choice: repair my parts and live as long as possible, or make use of a program that will terminate me after a set amount of time. I have chosen the latter. I wanted to be as human as possible, to feel like I really belonged to my family. My time has almost come to an end, and I can see my internal clock depleting quickly. However, there are still many things I wish to see and do before I pass. I've made a list of the experiences I crave most, and now set out to complete that list. I don't have much time, but I'm excited that my last hours will be beautiful, and full of rich and wonderful memories."
	};


	function playText() {
		oshuIntro.play();
		$('#skip').show();
		$('#intro').writeText(text.introduction);
		// oshuIntro.play();
	};

	function showTitle() {
		$('#audio').animate({volume: 1}, 1000);
		$('#intro').hide();
		$('#bigTitles').show();
		$('#bigTitle').fadeIn(2000);
	}

	function showSub() {
		$('#bigSub').fadeIn();
	}

	function hideTitles() {
		$('#bigTitles').fadeOut(1000);
	};

	function showInstructions() {
		$('#welcome').hide();
		$('#instructions').show();
	}

});

