$(document).ready(function() {


//         										____________________/{}\____________________
// 										______/{{ WELCOME TO THE WONDERFUL WORLD OF MILO! }}\_______
//  								  /{   The following dialogue objects are a bit confusing...    }\
// 									 /{       If you want to follow the dialogue a bit easier,       }\
//  						        |{    refer to the speech timeline, found in the speech folder    }|
//   								  \_____________________________/{}\_____________________________/

//    _____________________________________________
//   //											  \\
//  //											   \\
// //											    \\
// ||		STATUS - HOW CLOSE YOU ARE TO MILO 		||
// \\											    //
//  \\											   //
//   \\___________________________________________//

var miloGo = true;
	// Let's say MILO only has one thing to say, not a full conversation...

	function setGo(text) {
		miloGo = false;
		var goWait = setInterval(function() {
			if($('#miloSays').text() == text) {
				clearInterval(goWait);
				miloGo = true;
			};
		}, 1);
	};

	function quickMilo(text, audio) {
		$('#miloInteraction').show();
		$('#miloResponse').hide();
		$('#miloSays').writeText(text);
		setGo(text);
		play(audio);
	}

	// But more often than not, there's much more to be said. 
	// Let's determine if you are "miss" or "Oshu"

	function missVsOshu(missText, missAudio, oshuText, oshuAudio, responseOne, responseTwo, responseThree) {
		presentOptions(responseOne, responseTwo, responseThree);
		if(knowledge.name == false) {
			$('#miloInteraction').show();
			$('#miloSays').writeText(missText);
			setGo(missText);
			play(missAudio);			
		}
		else {
			$('#miloInteraction').show();
			$('#miloSays').writeText(oshuText);
			setGo(oshuText);
			play(oshuAudio);
		}
	}

	// if there's not a miss or oshu reference, use this function

	function miloResponse(miloText, miloAudio, responseOne, responseTwo, responseThree) {
		$('#miloInteraction').show();
		$('#miloSays').writeText(miloText);
		setGo(miloText);
		play(miloAudio)
		presentOptions(responseOne, responseTwo, responseThree);
	}

	function presentOptions(responseOne, responseTwo, responseThree) {
		$('#good').text('');
		$('#bad').text('');
		$('#neut').text('');
		$('#miloResponse').show()
		$('#good').show();
		$('#bad').show();
		$('#neut').show();
		$('#good').writeText(responseOne);
		$('#bad').writeText(responseTwo);
		$('#neut').writeText(responseThree);
	};

	// clear the board before every response

	function clearInteraction() {
		$('#miloSays').text('');
		$('#good').text('');
		$('#bad').text('');
		$('#neut').text('');
	}

	// adjust the standing with MILO after choosing an option, and also clear all the options

	function good() {
		clearInteraction();
		status = status - -1;
		Oshu.status = status;
		console.log(status);
	}
	function bad() {
		clearInteraction();
		status = status - 1;
		Oshu.status = status;
		console.log(status);
	}

	// conclude interaction 
	function concludeToMap(timeout) {
		$('#miloResponse').hide();
		var concludeWait = setTimeout(function() {
			$('#miloInteraction').hide();
			$('#map').show();
			$('#skip').hide();
			$('#dots').hide();
		}, timeout);
		$('#skip').show();
		$('#skipButton').unbind('click');
		$('#skipButton').click(function() {
			ignore('#map');
			clearTimeout(concludeWait);

		});
	}

	// ignore function

function ignore(map) {

	$('#miloResponse').hide();
	$('#miloInteraction').hide();
	$(map).show();
	audio.pause();
	audioPlaying = false;
	audioStopped = true;
	$('#skip').hide();
	$('#skip').unbind('click');
	$('#skipButton').unbind('click');
	$('#dots').hide();
}

    // _________________________________________//
	//											//
	//											//
	//     INTRODUCTION - WILL RUN ON LOAD      //
	//											//
	//__________________________________________//

	startGame();

	function startGame() {
		audioStopped = false;
		// First, determine if the sound should be playing.
		sound = localStorage.getItem('sound');
		if(sound == null) {
			$('#audio').prop('muted', false);
		}
		else if(sound == 'true') {
			$('#audio').prop('muted', false);
		}
		else {
			$('#audio').prop('muted', true);
			$('#soundsOn').hide();
			$('#soundsOff').show();
			sound = false;
		}
		// Then, begin the game.
		miloResponse(text.intro, 'speech/intro.mp3', response.introGood, response.introBad, response.ignore);
		$('#good').unbind('click');
		$('#good').click(function() {
			if(miloGo) {
				good();
				knowledge.name = true;
				quickMilo(text.introGood, 'speech/introOshu.wav');
				concludeToMap(7500);				
			}
		});
		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(miloGo) {
				bad();
				quickMilo(text.introBad, 'speech/introNot.wav');
				concludeToMap(15000);			
			};
		});
		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(miloGo) {
				ignore('#map');				
			}
		});
	};

// 			\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////////
// 			////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\	

//										 PLANETARY INTRODUCTIONS		

// 			\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////////
// 			////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	// function that will wait for the speech to finish before loading the planet

	function miloIntroduction(timeout, locationHtml, location) {
		var wait = setTimeout(function() {
			ignore();
			showContent(locationHtml, location);
		}, timeout)

		$('#skip').show();
		$('#skipButton').unbind('click');
		$('#skipButton').click(function() {
			clearTimeout(wait);
			$('#map').hide();
			showContent(locationHtml, location);
			ignore();
		});
		$('#myShip').click(function() {
			clearTimeout(wait);
		})
	};

	// lose time as you travel to another planet
	$('.planet').unbind('click');
	$('.planet').click(function() {
		// change the color of the interaction on the planet
		var destination = $(this).attr('id');
		changeColor(destination);
		// determine if you can travel there or not
		var minutesLost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
		if(($('#minutes').text() - minutesLost) > 0) {
			var destination = $(this).attr('id');	
			lifeEvent(minutesLost);
			Oshu.onBoard = false;
			$('#map').hide();
			myLocation.current = $(this).attr('distance');
			audioStopped = false;

			// Run the milo introduction if this is the first time. The introductory functions are below this $('.planet').click function
			if($(this).attr('first') == 'true') {
				$(this).attr('first', 'false');
				$('#miloSays').text('');
				switch(destination) {
					case 'Luneda':
						lunedaFirst();
					break;
					case 'Kanedos':
						kanedosFirst();
					break;
					case 'Tyrianne':
						tyrianneFirst();
					break;
					case 'Kaprika':
						kaprikaFirst();
					break;
					case 'AliNada':
						aliNadaFirst();
					break;
				}
			}

			// Go to the planet without introduction
			else {
				if($(this).attr('first') == 'false') {
					var destination = $(this).attr('id');				
					switch(destination) {
						case 'Luneda':
							showContent('luneda.html #lunedaContent', 'scripts/luneda.js');
							changeLocation('#lunedaMap');
							break;
						case 'Kanedos':
							showContent('kanedos.html #kanedosContent', 'scripts/kanedos.js');
							changeLocation('#kanedosMap');
							break;
						case 'Tyrianne':
							showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
							changeLocation('#tyrianneMap');
							break;
						case 'Kaprika':
							showContent('kaprika.html #kaprikaContent', 'scripts/kaprika.js');
							changeLocation('#kanedosMap');
							break;
						case 'AliNada':
							showContent('aliNada.html #aliNadaContent', 'scripts/aliNada.js');
							changeLocation('#aliNadaMap');
							break;
					};
				};
			};
		}
		// If you can't travel to the planet, play an error sound
		else {
			play('soundEffects/error.wav');
		}
	});

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |																															 |
// |																															 |
// |																															 |
// |																															 |
// |															INTRODUCING														 |
// |											  				   LUNEDA														 |
// |																															 |
// |																															 |
// |																															 |
// |																															 |
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

	function lunedaFirst() {
		audioStopped = false;
		changeLocation('#lunedaMap');
		quickMilo(text.lunedaIntro, 'speech/lunedaIntro.wav');
		miloIntroduction(19500, 'luneda.html #lunedaContent', 'scripts/luneda.js');
	}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |																															 |
// |																															 |
// |																															 |
// |																															 |
// |															INTRODUCING														 |
// |											  				  KANEDOS														 |
// |																															 |
// |																															 |
// |																															 |
// |																															 |
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

	function kanedosFirst() {
		audioStopped = false;
		startKanedos = true;
		changeLocation('#kanedosMap');
		miloResponse(text.kanedosIntro, 'speech/kanedosIntro.mp3', response.kanedosGood, response.kanedosBad, response.ignore);
		$('#good').unbind('click');
		$('#good').click(function() {
			if(miloGo) {
				good();
				if(status >= -1) {
					quickMilo(text.kanedosThankGood, 'speech/kanedosThankGood.mp3');
					miloIntroduction(2500, 'kanedos.html #kanedosContent', 'scripts/kanedos.js');
				}
				else {
					quickMilo(text.kanedosThankBad, 'speech/kanedosThankBad.mp3');
					miloIntroduction(6000, 'kanedos.html #kanedosContent', 'scripts/kanedos.js');
				}								
			}
		});
		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(miloGo) {
				bad();
				if(status >= -5) {
					quickMilo(text.kanedosMiloGood, 'speech/kanedosMiloNeut.mp3');
					miloIntroduction(11500, 'kanedos.html #kanedosContent', 'scripts/kanedos.js');
				}
				else if(status < -5) {
					quickMilo(text.kanedosMiloBad, 'speech/kanedosMiloBad.mp3');
					miloIntroduction(11500, 'kanedos.html #kanedosContent', 'scripts/kanedos.js');
				}								
			}
		});
		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(miloGo) {
				showContent('kanedos.html #kanedosContent', 'scripts/kanedos.js');
				ignore();								
			};
		});
	}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |																															 |
// |																															 |
// |																															 |
// |																															 |
// |															INTRODUCING														 |
// |											  				  TYRIANNE														 |
// |																															 |
// |																															 |
// |																															 |
// |																															 |
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

	function setGo2() {
		miloGo = false;
		var goWait2 = setInterval(function() {
			if($('#good').text() == response.tyrianneGood) {
				clearInterval(goWait2);
				miloGo = true;
			};
		}, 1);
	}

	function tyrianneFirst() {
		audioStopped = false;
		setGo(text.tyrianneIntro);
		changeLocation('#tyrianneMap');
		$('#miloInteraction').show();
		$('#miloSays').writeText(text.tyrianneIntro);
		play('speech/tyrianneIntro.wav');
		$('#good').text('');
		$('#bad').text('');
		$('#neut').text('');
		var wait4 = setTimeout(function() {
			setGo2();
			$('#dots').hide();
			$('#miloSays').text('');
			$('#miloResponse').show();
			presentOptions(response.tyrianneGood, response.tyrianneBad, response.ignore);
		}, 28500);
		$('#dots').show();
		$('#dotsButton').unbind('click');
		$('#dotsButton').click(function() {
			if(miloGo) {
				clearTimeout(wait4);
				setGo2();
				$('#dots').hide();
				presentOptions(response.tyrianneGood, response.tyrianneBad, response.ignore);			
			};
		});

		var tyrianneTimeline = 'tyrianneIntro';

		$('#good').unbind('click');
		$('#good').click(function() {
			if(miloGo) {
				good();
				if(tyrianneTimeline == 'tyrianneIntro') {
					knowledge.gift = true;
					missVsOshu(text.tyrianneGoodMiss, 'speech/tyrianneGoodMiss.mp3', text.tyrianneGoodOshu, 'speech/tyrianneGoodOshu.mp3', '','','');
					$('#miloResponse').hide();
					miloIntroduction(25500, 'tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
					tyrianneTimeline = 'Would you like';
				}
				else {
					knowledge.gift = true;
					missVsOshu(text.tyrianneBadGoodMiss, 'speech/tyrianneBadGoodMiss.mp3', text.tyrianneBadGoodOshu, 'speech/tyrianneBadGoodOshu.mp3', '','','');
					miloIntroduction(11000, 'tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
					$('#miloResponse').hide();
				}								
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(miloGo) {
				if(tyrianneTimeline == 'tyrianneIntro') {
					bad();
					miloResponse(text.tyrianneBad, 'speech/tyrianneBad.mp3', response.tyrianneGood, response.tyrianneBadNeut, response.ignore);
					tyrianneTimeline = 'I am, miss';
				}
				else {
					showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
					ignore();
				};
			};
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(miloGo) {
				showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
				ignore();
			};
		});
	};

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |																															 |
// |																															 |
// |																															 |
// |																															 |
// |															INTRODUCING														 |
// |											  				  KAPRIKA														 |
// |																															 |
// |																															 |
// |																															 |
// |																															 |
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||3

	function kaprikaFirst() {
		audioStopped = false;
		changeLocation('#kaprikaMap');
		quickMilo(text.kaprikaIntro, 'speech/kaprikaIntro.wav', '#kaprikaMap');
		miloIntroduction(19000, 'kaprika.html #kaprikaContent', 'scripts/kaprika.js');
	}

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// |																															 |
// |																															 |
// |																															 |
// |																															 |
// |															INTRODUCING														 |
// |											  				  ALINADA														 |
// |																															 |
// |																															 |
// |																															 |
// |																															 |
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

	function aliNadaFirst() {
		audioStopped = false;
		changeLocation('#aliNadaMap');
		miloResponse(text.aliNadaIntro, 'speech/aliNadaIntro.mp3', response.aliNadaGoodOrBad, '', response.ignore);
		$('#bad').hide();
		var aliTimeline = 'aliIntro';

		$('#good').unbind('click');
		$('#good').click(function() {
			if(miloGo) {
				if(aliTimeline == 'aliIntro') {
					if(status >= 0) {
						$('#bad').show();
						miloResponse(text.aliNadaGood, 'speech/aliNadaPos.wav', response.aliNadaGoodGood, response.aliNadaGoodBad, response.aliNadaGoodNeut);
						aliTimeline = 'so sorry';
					}
					else {
						quickMilo(text.aliNadaBad, 'speech/aliNadaNeg.mp3');
						miloIntroduction(5500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js');
						$('#bad').show();
					}
				}
				else if(aliTimeline == 'so sorry') {
					good();
					miloResponse(text.aliNadaGoodGood, 'speech/aliNadaGoodGood.mp3', response.aliNadaGoodGoodGood, response.aliNadaGoodGoodBad, response.aliNadaGoodGoodNeut);
					aliTimeline = 'who';
				}
				else if(aliTimeline == 'who') {
					good();
					quickMilo(text.aliNadaGoodGoodGood, 'speech/aliNadaGoodGoodGood.mp3');
					miloIntroduction(6000, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js');
				}								
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(miloGo) {
				bad();
				if(aliTimeline == 'so sorry') {
					missVsOshu(text.aliNadaGoodBadMiss, 'speech/aliNadaGoodBadMiss.mp3', text.aliNadaGoodBadOshu, 'speech/aliNadaGoodBadOshu.mp3', '','','');
					$('#miloResponse').hide();
					miloIntroduction(7500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js');
				}
				else if(aliTimeline == 'who') {
					quickMilo(text.aliNadaGoodGoodBad, 'speech/aliNadaGoodGoodBad.mp3');
					miloIntroduction(3500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js')
				}								
			}
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(miloGo) {
				if(aliTimeline == 'aliIntro') {
					ignore();
					showContent('aliNada.html #aliNadaContent', 'scripts/aliNada.js');
				}
				else if(aliTimeline == 'so sorry') {
					quickMilo(text.aliNadaGoodNeut, 'speech/aliNadaGoodNeut.mp3');
					miloIntroduction(7500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js');
				}
				else if(aliTimeline == 'who') {
					quickMilo(text.aliNadaGoodGoodNeut, 'speech/aliNadaGoodGoodNeut.mp3');
					miloIntroduction(3700, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js');
				}								
			}
		});
	}

// 			\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////////
// 			////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\	

//									   CLICKING (RETURN TO SHIP)		

// 			\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\////////////////////////////////////////
// 			////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

	var startKanedos = false,
		giftGo = true,
		novaGo = true,
		familyGo = true,
		goodbyeGo = true

	$('#myShip').click(function() {
		if(inUse.electroSuit) {
			inUse.electroSuit = false;
			$('#electroSuit').parent().remove();
			beachEnd = true;
			Oshu.inQuestSpeech = false;
			Oshu.items.electroSuit = false;
		}
		else if(inUse.libraryPass) {
			inUse.libraryPass = false;
			$('#libraryPass').parent().remove();
			Oshu.inQuestSpeech = false;
			Oshu.items.libraryPass = false;
		};
		// If you're cleared to go, go
		if((go == true) && (dontGo == false) && (dontReturn == false)) {
			endSpeech();
			// hide all the planets and planet details
			changeLocation('#map');
			hideContent('#lunedaContent');
			hideContent('#kanedosContent');
			hideContent('#tyrianneContent');
			hideContent('#kaprikaContent');
			hideContent('#aliNadaContent');
			$('.return').hide();
			$('.option').hide();
			$('.cityDetails').hide();
			$('.visitPlanet').hide();
			Oshu.onBoard = true;
			audioStopped = false;

			/////////////////////////////////////////////////
			// 					  MILO DISCOVERS YOUR SECRET
			if(startKanedos) {
				startKanedos = false;
				$('#skip').show();
				knowledge.mortality = true;
				$('#map').hide();
				$('#miloSays').text('');
				$('#miloInteraction').show();

				// milo respects you, good response
				if(status > 0) {
					quickMilo(text.realizationGood, 'speech/realizationGood.wav');
					var wait2 = setTimeout(function() {
						$('#miloInteraction').hide();
						$('#skip').hide();
						$('#map').show();
					}, 22500);
					// click the skip button
					$('#skip').unbind('click');
					$('#skipButton').unbind('click');
					$('#skipButton').click(function() {
						ignore('#map');
						clearTimeout(wait2);
					});
				}
				// milo is already angry with you, bad response
				else {
					quickMilo(text.realizationNeut, 'speech/realizationNeut.wav');
					var wait3 = setTimeout(function() {
						$('#miloInteraction').hide();
						$('#skip').hide();
						$('#map').show();
					}, 12500);
					// click the skip button
					$('#skip').unbind('click');
					$('#skipButton').unbind('click');
					$('#skipButton').click(function() {
						ignore('#map');
						clearTimeout(wait3);
					});
				};		
			}


			/////////////////////////////////////////////////
			// 					  	  The Gift from Tyrianne
			else if((knowledge.gift) && (Oshu.items.gift) && (giftGo == true)) {
				gift()
			}

			/////////////////////////////////////////////////
			// 					  		50% - The Novatacea
			else if((finished > 0) && (novaGo == true)) {
				nova();
			}
			/////////////////////////////////////////////////
			// 					 				75% - Family
			else if((finished > 2) && (familyGo == true)) {
				family();
			}
			/////////////////////////////////////////////////
			// 					            90% - The Goodbye
			else if(($('#minutes').text() < 10) && (goodbyeGo == true)) {
				goodbye();
			}
			// Or you just go to the map
			else {
				ignore('#map');
				changeLocation('#map', false, true);
			};			
		}
		else if(pleaseChooseOption){
			$('#interactionText').text('Please choose an option!');
		};
	});

    // _________________________________________//
	//											//
	//											//
	//	 RETURNING FROM TYRIANNE WITH A GIFT	//
	//											//
	//__________________________________________//

	var giftStatus = 'intro';

	function gift() {
		giftGo = false;
		$('#map').hide();
		if(Oshu.items.book) {
			giftStatus = 'book';
			missVsOshu(text.moonbankMiss, 'speech/bookMiss.wav', text.bookOshu, 'speech/bookOshu.wav', '','','');
			$('#miloResponse').hide();
			if(knowledge.mortality == true) {
				var wait8 = setTimeout(function() {
					$('#dots').hide();
					confrontation();
				}, 25500);
				$('#dots').show();
				$('#dotsButton').unbind('click');
				$('#dotsButton').click(function() {
					clearTimeout(wait8);
					$('#dots').hide();
					confrontation();
				});				
			}
			else {
				$('#skip').show();
				$('#skipButton').unbind('click');
				$('#skipButton').click(function() {
					ignore('#map');
				});
				concludeToMap(25500)
			};
		}
		else if(Oshu.items.libraryBobblehead) {
			giftStatus = 'bobblehead';
			missVsOshu(text.bobbleheadMiss, 'speech/bobbleheadMiss.mp3', text.bobbleheadOshu, 'speech/bobbleheadOshu.mp3', '','','');
			$('#miloResponse').hide();
			if(knowledge.mortality == true) {
				var wait6 = setTimeout(function() {
					$('#dots').hide();
					confrontation();
				}, 8500);
				$('#dots').show();
				$('#dotsButton').unbind('click');
				$('#dotsButton').click(function() {
					clearTimeout(wait6);
					$('#dots').hide();
					confrontation();
				});				
			}
			else {
				$('#skip').show();
				$('#skipButton').unbind('click');
				$('#skipButton').click(function() {
					ignore('#map');
				});
				concludeToMap(8500)
			};
		}
		else if(Oshu.items.bookmark) {
			giftStatus = 'bookmark';
			missVsOshu(text.bookmarkMiss, 'speech/bookmarkMiss.mp3', text.bookmarkOshu, 'speech/bookmarkOshu.mp3', '','','');
			$('#miloResponse').hide();
			if(knowledge.mortality == true) {
				var wait7 = setTimeout(function() {
					$('#dots').hide();
					confrontation();
				}, 8500);
				$('#dots').show();
				$('#dotsButton').unbind('click');
				$('#dotsButton').click(function() {
					clearTimeout(wait7);
					$('#dots').hide();
					confrontation();
				});				
			}
			else {
				$('#skip').show();
				$('#skipButton').unbind('click');
				$('#skipButton').click(function() {
					ignore('#map');
				});
				concludeToMap(8500)
			};
		};
	};

	function confrontation() {
		missVsOshu(text.confrontationMiss, 'speech/confrontationMiss.mp3', text.confrontationOshu, 'speech/confrontationOshu.mp3',  response.confrontationGood, response.confrontationBad, response.confrontationNeut);
		
		$('#skip').show()
		$('#skipButton').unbind('click');
		$('#skipButton').click(function() {
			ignore('#map');
		});
		
		$('#good').unbind('click');
		$('#good').click(function() {
			good();
			quickMilo(text.confrontationGood, 'speech/confrontationGood.mp3');
			concludeToMap(11500);
		});
		$('#bad').click(function() {
			bad();
			quickMilo(text.confrontationBad, 'speech/confrontationBad.wav');
			concludeToMap(13500)
		});
		$('#neut').click(function() {
			quickMilo(text.confrontationNeut, 'speech/confrontationNeut.mp3');
			concludeToMap(17500);
		});
	}

    // _________________________________________//
	//											//
	//											//
	//		FIFTY PERCENT -- THE NOVATACEA		//
	//											//
	//__________________________________________//

	var novaTimeline = 'novaIntro';

	function nova() {
		novaGo = false;
		$('#map').hide();
		missVsOshu(text.novaIntroMiss, 'speech/novaIntroMiss.mp3', text.novaIntroOshu, 'speech/novaIntroOshu.mp3', response.novaGood, response.novaBad, response.novaNeut)
		// What is it?

		$('#good').unbind('click');
		$('#good').click(function() {
			if(miloGo) {
				good();
				if(novaTimeline == 'novaIntro') {
					miloResponse(text.novaGood, 'speech/novaGood.mp3', response.novaGoodGood, response.novaGoodBad, response.ignore);
					novaTimeline = 'What is it';
				}
				else if(novaTimeline == 'What is it') {
					missVsOshu(text.novaGoodGoodMiss, 'speech/novaGoodGoodMiss.mp3', text.novaGoodGoodOshu, 'speech/novaGoodGoodOshu.mp3', response.novaGoodGoodGood, response.novaGoodGoodBad, response.ignore);
					novaTimeline = 'A what? Let me see.';
				}
				else if(novaTimeline == 'I dont have time for this') {
					miloResponse(text.novaGood, 'speech/novaGood.mp3', response.novaGoodGood, response.novaGoodBad, response.ignore);
					novaTimeline = 'What is it';
				}
				else if(novaTimeline == 'Why would I care') {
					if(knowledge.mortality == true) {
						missVsOshu(text.novaBadGoodKnowsMiss, 'speech/novaBadGoodKnowsOshu.mp3', text.novaBadGoodKnowsMiss, 'novaBadGoodKnowsMiss.mp3', '', '', '')
						concludeToMap(9500);
					}
					else {
						miloResponse(text.novaBadGood, 'speech/novaBadGood.mp3', '','','');
						concludeToMap(4500);
					}
				}
				else if('A what? Let me see.') {
					$('#miloSays').writeText(text.novaGoodGoodGood); 
					play('speech/novaGoodGoodGood.mp3');
					concludeToMap(12500)
				};				
			};
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(miloGo) {
				bad();
				if(novaTimeline == 'novaIntro') {
					miloResponse(text.novaBad, 'speech/novaBad.mp3', response.novaBadGood, response.novaBadBad, response.ignore);
					novaTimeline = 'Why would I care';
				}
				else if(novaTimeline == 'Why would I care') {
					miloResponse(text.novaBadBad, 'speech/novaBadBad.mp3', '','','');
					concludeToMap(7500);	
				}
				else if(novaTimeline == 'What is it') {
					miloResponse(text.novaGoodBad, 'speech/novaGoodBad.mp3', '','','');
					concludeToMap(5500);
				}
				else if(novaTimeline == 'A what? Let me see.') {
					miloResponse(text.novaGoodGoodBad, 'speech/novaGoodGoodBad.mp3', '','','');
					concludeToMap(5500);
				}
				else if(novaTimeline == 'I dont have time for this') {
					miloResponse(text.novaNeutBad, 'speech/novaNeutBad.mp3', '','','');
					concludeToMap(3000);
				};			
			};
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(miloGo) {
				if(novaTimeline == 'novaIntro') {
					missVsOshu(text.novaNeutMiss, 'speech/novaNeutMiss.mp3', text.novaNeutOshu, 'speech/novaNeutOshu.mp3', response.novaNeutGood, response.novaNeutBad, response.ignore);
					novaTimeline = 'I dont have time for this';
				}
				else {
					ignore();
					concludeToMap(1);
				};				
			};
		});
	};

    // _________________________________________//
	//											//
	//											//
	//     SEVENTY-FIVE PERCENT - THE FAMILY    //
	//											//
	//__________________________________________//

	var familyTimeline = 'familyIntro';

	function endFamilyBad() {
		miloResponse(text.familyBad, 'speech/familyBad.mp3', '','','');
		concludeToMap(6500);	
		$('#skip').show();
		$('#skipButton').click(function() {
			ignore('#map');
		});
	};

	function family() {
		familyGo = false;
		$('#map').hide();
		missVsOshu(text.familyIntroMiss, 'speech/familyIntroMiss.mp3', text.familyIntroOshu, 'speech/familyIntroOshu.mp3', response.familyGood, response.familyBad, response.familyNeut);
		
		$('#good').unbind('click');
		$('#good').click(function() {
			if(miloGo) {
				good();
				if(familyTimeline == 'familyIntro') {
					miloResponse(text.familyGood, 'speech/familyGood.mp3', response.familyGoodGood, response.familyGoodBad, response.familyGoodNeut);
					familyTimeline = 'Its a lot of ups and downs';
				}
				else if(familyTimeline == 'Its a lot of ups and downs') {
					miloResponse(text.familyGoodGood1, 'speech/familyGoodGood1.mp3', '','','');
					$('#miloResponse').hide();
					var wait9 = setTimeout(function() {
						$('#miloSays').text('');
						miloResponse(text.familyGoodGood2, 'speech/familyGoodGood2.mp3', response.familyGoodGoodGood, response.familyGoodGoodBad, response.familyGoodGoodNeut);
						$('#miloResponse').show();
					}, 1000);
					familyTimeline = 'Yes I always felt accepted';
				}
				else if(familyTimeline == 'Yes I always felt accepted') {
					familyTimeline = 'My brother';
					if(knowledge.brother == true) {
						miloResponse(text.familyGoodGoodGoodAli, 'speech/familyGoodGoodGoodAli.mp3', response.familyGoodGoodGoodGood, response.ignore, response.familyGoodGoodGoodNeut);
					}
					else {
						miloResponse(text.familyGoodGoodGoodNoAli, 'speech/familyGoodGoodGoodNoAli.mp3', response.familyGoodGoodGoodGood, response.ignore, response.familyGoodGoodGoodNeut);
					}
				}
				else if(familyTimeline == 'My brother') {
					miloResponse(text.familyGoodGoodGoodGood, 'speech/familyGoodGoodGoodGood.mp3', '','','');
					concludeToMap(2500);
				}
				else if(familyTimeline == 'It gives meaning') {
					miloResponse('I see.', 'speech/familyneutGood.mp3', '','','');
					$('#miloResponse').hide();
					var wait10 = setTimeout(function() {
						$('#miloSays').text('');
						miloResponse(text.familyGoodGood2, 'speech/familyGoodGood2.mp3', response.familyGoodGoodGood, response.familyGoodGoodBad, response.familyGoodGoodNeut);
						$('#miloResponse').show();
					}, 1000);
					familyTimeline = 'Yes I always felt accepted';				
				}
				else if(familyTimeline == 'I do feel') {
					quickMilo(text.familyNeutNeutGood, 'speech/familyNeutNeutGood.mp3');
					concludeToMap(2500);
				}				
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			bad();
			if(miloGo) {
				if(familyTimeline == 'I do feel') {
					quickMilo(text.familyNeutNeutBad, 'speech/familyNeutNeutBad.mp3');
					concludeToMap(3500);
				}
				else {
					endFamilyBad();
				}				
			};
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(miloGo) {
				if(familyTimeline == 'familyIntro') {
					familyTimeline = 'It gives meaning';
					if(knowledge.mortality == true) {
						miloResponse(text.familyNeutKnows, 'speech/familyNeutKnows.mp3', response.familyNeutGood, response.familyNeutBad, response.familyNeutNeut);
					}
					else {
						miloResponse(text.familyNeut, 'speech/familyNeut.mp3', response.familyNeutGood, response.familyNeutBad, response.familyNeutNeut);
					}
				}
				else if(familyTimeline == 'It gives meaning') {
					missVsOshu(text.familyNeutNeutMiss, 'speech/familyNeutNeutMiss.wav', text.familyNeutNeutOshu, 'speech/familyNeutNeutOshu.wav', response.familyNeutNeutGood, response.familyNeutNeutBad, response.ignore);
					familyTimeline = 'I do feel';
				}
				else if(familyTimeline == 'Its a lot of ups and downs') {
					quickMilo(text.familyGoodNeut, 'speech/familyGoodNeut.mp3');
					var wait11 = setTimeout(function() {
						$('#miloResponse').show();
						$('#miloSays').text('');
						miloResponse(text.familyGoodGood2, 'speech/familyGoodGood2.mp3', response.familyGoodGoodGood, response.familyGoodGoodBad, response.familyGoodGoodNeut);
					}, 4000);
					familyTimeline = 'Yes I always felt accepted';
				}
				else if(familyTimeline == 'Yes I always felt accepted') {
					quickMilo(text.familyGoodGoodNeut, 'speech/familyGoodGoodNeut.mp3');
					concludeToMap(5500);
				}
				else {
					ignore('#map');
				}				
			};
		});
	};

	// _________________________________________//
	//											//
	//											//
	//    EIGHTY-FIVE PERCENT - THE GOODBYE 	//
	//											//
	//__________________________________________//

	function goodbye() {
		// deterimine what your timeline status is
		if(status > -10) {
			var goodbyeTimeline = 'goodIntro';
		}
		else {
			var goodbyeTimeline = 'badIntro';
		};
		// begin the interaction
		goodbyeGo = false;
		$('#map').hide();
		if(knowledge.mortality) {
			// Reminder to shut off program
			if(knowledge.committed) {
				missVsOshu(text.reminderMiss, 'speech/reminderMiss.mp3', text.reminderOshu, 'speech/reminderOshu.mp3', '','','');
				$('#miloResponse').hide();
				concludeToMap(15500);
			}
			else {
				// good goodbye
				if(status > -10) {
					if(knowledge.commitConversation) {
						missVsOshu(text.happyIntroMiss, 'speech/happyIntroMiss.mp3', text.happyIntroOshu, 'speech/happyIntroOshu.mp3', response.happyGood, response.happyBad, response.happyNeutConversed);
					}
					else {
						missVsOshu(text.happyIntroMiss, 'speech/happyIntroMiss.mp3', text.happyIntroOshu, 'speech/happyIntroOshu.mp3', response.happyGood, response.happyBad, response.happyNeutNoConversed);
					}
				}	
				// bad goodbye
				else {
					missVsOshu(text.angryIntroMiss, 'speech/angryMiss.mp3', text.angryIntroOshu, 'speech/angryOshu.mp3', '','','');
					$('#miloResponse').hide();
					var wait5 = setTimeout(function() {
						$('#dots').hide();
						$('#miloSays').text('');
						$('#miloResponse').show();
						$('#good').writeText(response.angryGood);
						$('#bad').writeText(response.angryBad);
						$('#neut').writeText(response.ignore);
					}, 30500);
					$('#dots').show();
					$('#dotsButton').unbind('click');
					$('#dotsButton').click(function() {
						$('#dots').hide();
						clearTimeout(wait5);
						$('#miloSays').text('');
						$('#miloResponse').show();
						$('#good').writeText(response.angryGood);
						$('#bad').writeText(response.angryBad);
						$('#neut').writeText(response.ignore);
					});
				};
			};
		};

		$('#good').unbind('click');
		$('#good').click(function() {
			if(miloGo) {
				good();
				if(goodbyeTimeline == 'badIntro') {
					quickMilo(text.angryGood, 'speech/angryGood.mp3');
					concludeToMap(8500);
					$('#skip').show();
					$('#skipButton').click(function() {
						ignore('#map');
					});
				}
				else if(goodbyeTimeline == 'goodIntro') {
					missVsOshu(text.happyGoodMiss, 'speech/happyGoodMiss.mp3', text.happyGoodOshu, 'speech/happyGoodOshu.mp3', response.happyGoodGood, response.happyGoodBad, response.ignore);
					goodbyeTimeline = 'lets do it';
				}
				else if(goodbyeTimeline == 'lets do it') {
					knowledge.committed = true;
					quickMilo(text.happyGoodGood, 'speech/happyGoodGood.mp3');
					concludeToMap(6500);
					$('#skip').show();
					$('#skipButton').click(function() {
						ignore('#map');
					});
				};				
			};
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(miloGo) {
				if(goodbyeTimeline == 'badIntro') {
					bad();
					quickMilo(text.angryBad, 'speech/angryBad.wav');
					concludeToMap(4000);
				}
				else if(goodbyeTimeline == 'goodIntro') {
					bad();
					audio.pause();
					audioPlaying = false;
					audioStopped = true;
					$('#miloSays').writeText(text.happyBad);
					concludeToMap(2000);
					$('#skip').show();
					$('#skipButton').click(function() {
						ignore('#map');
					});
				}
				else if(goodbyeTimeline == 'lets do it') {
					quickMilo(text.happyGoodBad, 'speech/happyGoodBad.mp3');
					concludeToMap(8500);
				}				
			};
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(miloGo) {
				if(goodbyeTimeline == 'goodIntro') {
					if(knowledge.commitConversation) {
						quickMilo(text.happyNeutConversed, 'speech/happyNeutConversed.mp3');
						concludeToMap(6200);
					}
					else {
						quickMilo(text.happyNeutNoConversed, 'speech/happyNeutNotConversed.mp3');
						concludeToMap(12000);
					}						
				}
				else {
					ignore();
					$('#map').show();
				}
			};
		});
	};

});