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
var status = 0;

	// Let's say MILO only has one thing to say, not a full conversation...

	function quickMilo(text, audio) {
		$('#miloInteraction').show();
		$('#miloResponse').hide();
		$('#miloSays').writeText(text);
		play(audio);
	}

	// But more often than not, there's much more to be said. 
	// Let's determine if you are "miss" or "Oshu"

	function missVsOshu(missText, missAudio, oshuText, oshuAudio, responseOne, responseTwo, responseThree) {
		presentOptions(responseOne, responseTwo, responseThree);
		if(knowledge.name == false) {
			$('#miloInteraction').show();
			$('#miloSays').writeText(missText);
			play(missAudio);			
		}
		else {
			$('#miloInteraction').show();
			$('#miloSays').writeText(oshuText);
			play(oshuAudio);
		}
	}

	// if there's not a miss or oshu reference, use this function

	function miloResponse(miloText, miloAudio, responseOne, responseTwo, responseThree) {
		$('#miloInteraction').show();
		$('#miloSays').writeText(miloText);
		play(miloAudio)
		presentOptions(responseOne, responseTwo, responseThree);
	}

	function presentOptions(responseOne, responseTwo, responseThree) {
		$('#good').text('');
		$('#bad').text('');
		$('#neut').text('');
		$('#miloResponse').show()
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

	// $('#miloInteraction').show();
	// presentOptions('','','');
	// $('#good').unbind('click');
	// $('#good').click(function() {
	// 	good();
	// });
	// $('#bad').unbind('click');
	// $('#bad').click(function() {
	// 	bad();
	// });

	function good() {
		clearInteraction();
		status = status + 1;
		console.log(status)			
	}
	function bad() {
		clearInteraction();
		status = status - 1;
		console.log(status)			
	}

	// conclude interaction 
	function concludeToMap(timeout) {
		$('#miloResponse').hide();
		var concludeWait = setTimeout(function() {
			$('#miloInteraction').hide();
			$('#map').show();
			$('#skip').hide();
		}, timeout);
		$('#skip').show();
		$('#skipButton').unbind('click');
		$('#skipButton').click(function() {
			ignore('#map');
			clearTimeout(concludeWait);
			console.log('cleared');
		});
	}

	function concludeToLocation(timeout) {
		$('#miloResponse').hide();
		var concludeWait2 = setTimeout(function() {
			$('#miloInteraction').hide();
			$('#map').show();
			$('#skip').hide();
		}, timeout);
		$('#skip').show();
		$('#skipButton').unbind('click');
		$('#skipButton').click(function() {
			ignore('#map');
			clearTimeout(concludeWait2);
			console.log('cleared2');
		});
	}

	// skip back to the world map

	$('#myShip').click(function() {
		if($('#miloInteraction').css('display') == 'block') {
			ignore('#map');
		}
	})

    // _________________________________________//
	//											//
	//											//
	//     INTRODUCTION - WILL RUN ON LOAD      //
	//											//
	//__________________________________________//

	// startGame();

	function startGame() {
		miloResponse(text.intro, 'speech/intro.mp3', response.introGood, response.introBad, response.ignore);
		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				good();
				knowledge.name = true;
				quickMilo(text.introGood, 'speech/introOshu.wav');
				concludeToMap(7500);				
			}
		});
		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				bad();
				quickMilo(text.introBad, 'speech/introNot.wav');
				concludeToMap(15000);			
			};
		});
		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(go) {
				ignore('#map');				
			}
		});
	};


    // _________________________________________//
	//											//
	//											//
	//         PLANETARY  INTRODUCTIONS         //
	//											//
	//__________________________________________//

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
			console.log('cleared3')
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
		var minutesLost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
		if(($('#minutes').text() - minutesLost) > 0) {
			var destination = $(this).attr('id');	
			lifeEvent(minutesLost);
			Oshu.onBoard = false;
			$('#map').hide();
			myLocation.current = $(this).attr('distance');

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
							break;
						case 'Kanedos':
							showContent('kanedos.html #kanedosContent', 'scripts/kanedos.js');
							break;
						case 'Tyrianne':
							showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
							break;
						case 'Kaprika':
							showContent('kaprika.html #kaprikaContent', 'scripts/kaprika.js');
							break;
						case 'AliNada':
							showContent('aliNada.html #aliNadaContent', 'scripts/aliNada.js');
							break;
					}
				};
			};
		};
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
		startKanedos = true;
		changeLocation('#kanedosMap');
		miloResponse(text.kanedosIntro, 'speech/kanedosIntro.mp3', response.kanedosGood, response.kanedosBad, response.ignore);
		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
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
			if(go) {
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
			if(go) {
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

	function tyrianneFirst() {
		changeLocation('#tyrianneMap');
		$('#miloInteraction').show();
		$('#miloSays').writeText(text.tyrianneIntro);
		play('speech/tyrianneIntro.wav');
		var wait4 = setTimeout(function() {
			$('#dots').hide();
			$('#miloSays').text('');
			$('#miloResponse').show();
			$('#good').writeText(response.tyrianneGood);
			$('#bad').writeText(response.tyrianneBad);
			$('#neut').writeText(response.ignore);
		}, 28500);
		$('#dots').show();
		$('#dotsButton').click(function() {
			if(go) {
				clearTimeout(wait4);
				$('#dots').hide();
				$('#miloSays').text('');
				$('#miloResponse').show();
				$('#good').writeText(response.tyrianneGood);
				$('#bad').writeText(response.tyrianneBad);
				$('#neut').writeText(response.ignore);				
			}

		});

		var tyrianneTimeline = 'tyrianneIntro';

		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				good();
				if(tyrianneTimeline == 'tyrianneIntro') {
					missVsOshu(text.tyrianneGoodMiss, 'speech/tyrianneGoodMiss.mp3', text.tyrianneGoodOshu, 'speech/tyrianneGoodOshu.mp3', '','','');
					$('#miloResponse').hide();
					miloIntroduction(25500, 'tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
					tyrianneTimeline = 'Would you like';
				}
				else {
					missVsOshu(text.tyrianneBadGoodMiss, 'speech/tyrianneBadGoodMiss.mp3', text.tyrianneBadGoodOshu, 'speech/tyrianneBadGoodOshu.mp3', '','','');
					miloIntroduction(11000, 'tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
					$('#miloResponse').hide();
				}								
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				bad();
				if(tyrianneTimeline == 'tyrianneIntro') {
					miloResponse(text.tyrianneBad, 'speech/tyrianneBad.mp3', response.tyrianneGood, response.tyrianneBadNeut, response.ignore);
					tyrianneTimeline = 'I am, miss';
				}
				else {
					showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
					ignore();
					status = status + 1;
				}
			}
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			console.log('neut1');
			if(go) {
				if(tyrianneTimeline == 'tyrianneIntro') {
					showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
					ignore();
				}								
			};
		});
	}

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
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

	function kaprikaFirst() {
		changeLocation('#kaprikaMap');
		$('#skip').show();
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
		changeLocation('#aliNadaMap');
		miloResponse(text.aliNadaIntro, 'speech/aliNadaIntro.mp3', response.aliNadaGoodOrBad, '', response.ignore);
		$('#bad').hide();
		var aliTimeline = 'aliIntro';

		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
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
					miloResponse(text.aliNadaGoodGood, 'speech/aliNadaGoodGood.mp3', response.aliNadaGoodGoodGood, response.aliNadaGoodGoodBad, response.aliNadaGoodGoodNeut);
					aliTimeline = 'who';
				}
				else if(aliTimeline == 'who') {
					quickMilo(text.aliNadaGoodGoodGood, 'speech/aliNadaGoodGoodGood.mp3');
					miloIntroduction(6500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js')
					ignore();
				}								
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				if(aliTimeline == 'so sorry') {
					missVsOshu(text.aliNadaGoodBadMiss, 'speech/aliNadaGoodBadMiss.mp3', text.aliNadaGoodBadOshu, 'speech/aliNadaGoodBadOshu.mp3', '','','');
					$('#miloResponse').hide();
					miloIntroduction(7500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js');
				}
				else if(aliTimeline == 'who') {
					quickMilo(text.aliNadaGoodGoodBad, 'speech/aliNadaGoodGoodBad.mp3');
					miloIntroduction(4500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js')
				}								
			}
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(go) {
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

    // _________________________________________//
	//											//
	//											//
	//        MILO DISCOVERS YOUR SECRET        //
	//											//
	//__________________________________________//

	var startKanedos = false;

	$('#myShip').click(function() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.visitPlanet').hide();
		Oshu.onBoard = true;

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
// 					  		50% - The Novatacea
		else if((finished == 1) && (fiftyTimeline = 'novaIntro')) {
			fifty();
		}
/////////////////////////////////////////////////
// 					 				75% - FAMILY
		else if((finished == 3) && (familyTimeline == 'familyIntro')) {
			seventyFive();
		}
/////////////////////////////////////////////////
// 					  MILO DISCOVERS YOUR SECRET
		else if((finished == 4) && (goodbyeTimeline == 'intro')) {
			eightyfive();
		}
		// Or you just go to the map
		else {
			$('#map').show();
		};
	});

    // _________________________________________//
	//											//
	//											//
	//		FIFTY PERCENT -- THE NOVATACEA		//
	//											//
	//__________________________________________//

	var fiftyTimeline = 'novaIntro';

	function fifty() {
		$('#map').hide();
		missVsOshu(text.novaIntroMiss, 'speech/novaIntroMiss', text.novaIntroOshu, 'speech/novaIntroOshu.mp3', response.novaGood, response.novaBad, response.novaNeut)
		// What is it?

		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				if(fiftyTimeline == 'novaIntro') {
					miloResponse(text.novaGood, 'speech/novaGood.mp3', response.novaGoodGood, response.novaGoodBad, response.ignore);
					fiftyTimeline = 'What is it';
				}
				else if(fiftyTimeline == 'What is it') {
					missVsOshu(text.novaGoodGoodMiss, 'speech/novaGoodGoodMiss.mp3', text.novaGoodGoodOshu, 'speech/novaGoodGoodOshu.mp3', response.novaGoodGoodGood, response.novaGoodGoodBad, response.ignore);
					fiftyTimeline = 'A what? Let me see.';
				}
				else if(fiftyTimeline == 'I dont have time for this') {
					miloResponse(text.novaGood, 'speech/novaGood.mp3', response.novaGoodGood, response.novaGoodBad, response.ignore);
					fiftyTimeline = 'What is it';
				}
				else if(fiftyTimeline == 'Why would I care') {
					if(knowledge.mortality == true) {
						missVsOshu(text.novaBadGoodKnowsMiss, 'speech/novaBadGoodKnowsOshu.mp3', text.novaBadGoodKnowsMiss, 'novaBadGoodKnowsMiss.mp3', '', '', '')
						concludeInteraction(7000);
					}
					else {
						miloResponse(text.novaBadGood, 'speech/novaBadGood.mp3', '','','');
						concludeInteraction(7000);
					}
				}
				else if('A what? Let me see.') {
					$('#miloSays').writeText(text.novaGoodGoodGood); 
					play('speech/novaGoodGoodGood.mp3');
					concludeInteraction(7000)
				};				
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				if(fiftyTimeline == 'novaIntro') {
					miloResponse(text.novaBad, 'speech/novaBad.mp3', response.novaBadGood, response.novaBadBad, response.ignore);
					fiftyTimeline = 'Why would I care';
				}
				else if(fiftyTimeline == 'Why would I care') {
					miloResponse(text.novaBadBad, 'speech/novaBadBad.mp3', '','','');
					concludeInteraction(7000);	
				}
				else if(fiftyTimeline == 'What is it') {
					miloResponse(text.novaGoodBad, 'speech/novaGoodBad.mp3', '','','');
					concludeInteraction(7000);
				}
				else if(fiftyTimeline == 'A what? Let me see.') {
					miloResponse(text.novaGoodGoodBad, 'speech/novaGoodGoodBad.mp3', '','','');
					concludeInteraction(7000);
				}
				else if(fiftyTimeline == 'I dont have time for this') {
					miloResponse(text.novaNeutBad, 'speech/novaNeutBad.mp3', '','','');
					concludeInteraction(7000);
				}				
			}
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(go) {
				if(fiftyTimeline == 'novaIntro') {
					missVsOshu(text.novaNeutMiss, 'speech/novaNeutMiss.mp3', text.novaNeutOshu, 'speech/novaNeutOshu.mp3', response.novaNeutGood, response.novaNeutBad, response.ignore);
					fiftyTimeline = 'I dont have time for this';
				}
				else {
					concludeInteraction(7000);
				}				
			}
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
		concludeInteraction(7000);	
		$('#skip').show();
		$('#skipButton').click(function() {
			ignore('#map');
		});
	};

	function seventyFive() {
		$('#map').hide();
		missVsOshu(text.familyIntroMiss, 'speech/familyIntroMiss.mp3', text.familyIntroOshu, 'speech/familyIntroOshu.mp3', response.familyGood, response.familyBad, response.familyNeut);
		
		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				if(familyTimeline == 'familyIntro') {
					miloResponse(text.familyGood, 'speech/familyGood.mp3', response.familyGoodGood, response.familyGoodBad, response.familyGoodNeut);
					familyTimeline = 'Its a lot of ups and downs';
				}
				else if(familyTimeline == 'Its a lot of ups and downs') {
					miloResponse(text.familyGoodGood1, 'speech/familyGoodGood1.mp3', '','','');
					$('#miloResponse').hide();
					setTimeout(function() {
						$('#miloResponse').show();
						$('#miloSays').text('');
						miloResponse(text.familyGoodGood2, 'speech/familyGoodGood2.mp3', response.familyGoodGoodGood, response.familyGoodGoodBad, response.familyGoodGoodNeut);
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
					concludeInteraction(3000);
				}
				else if(familyTimeline == 'It gives meaning') {
					miloResponse('I see.', 'speech/familyneutGood.mp3', '','','');
					$('#miloResponse').hide();
					setTimeout(function() {
						$('#miloResponse').show();
						$('#miloSays').text('');
						miloResponse(text.familyGoodGood2, 'speech/familyGoodGood2.mp3', response.familyGoodGoodGood, response.familyGoodGoodBad, response.familyGoodGoodNeut);
					}, 1000);
					familyTimeline = 'Yes I always felt accepted';				
				}
				else if(familyTimeline == 'I do feel') {
					quickMilo(text.familyNeutNeutGood, 'speech/familyNeutNeutGood.mp3');
					concludeInteraction(2500);
				}				
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				if(familyTimeline == 'I do feel') {
					quickMilo(text.familyNeutNeutBad, 'speech/familyNeutNeutBad.mp3');
					concludeInteraction(3500);
				}
				else {
					endFamilyBad();
				}				
			};
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(go) {
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
					setTimeout(function() {
						$('#miloResponse').show();
						$('#miloSays').text('');
						miloResponse(text.familyGoodGood2, 'speech/familyGoodGood2.mp3', response.familyGoodGoodGood, response.familyGoodGoodBad, response.familyGoodGoodNeut);
					}, 4000);
					familyTimeline = 'Yes I always felt accepted';
				}
				else if(familyTimeline == 'Yes I always felt accepted') {
					quickMilo(text.familyGoodGoodNeut, 'speech/familyGoodGoodNeut.mp3');
					concludeInteraction(5500);
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

	var goodbyeTimeline = 'intro';


	function eightyfive() {
		$('#map').hide();
		if(knowledge.mortality) {
			if(knowledge.committed) {
				skipToMap();	
				missVsOshu(text.reminderMiss, 'speech/reminderMiss.mp3', text.reminderOshu, 'speech/reminderOshu.mp3', '','','');
				$('#miloResponse').hide();
				concludeInteraction(15500);
			}
			else {
				if(status > -10) {
					goodbyeTimeline = 'goodIntro';
					missVsOshu(text.happyIntroMiss, 'speech/happyIntroMiss.mp3', text.happyIntroOshu, 'speech/happyIntroOshu.mp3', '','','');
					$('#good').writeText(response.happyGood);
					$('#bad').writeText(response.happyBad);
					if(knowledge.commitConversation) {
						$('#neut').writeText(response.happyNeutConversed);
					}
					else {
						$('#neut').writeText(response.happyNeutNoConversed);
					}
				}	
				else {
					goodbyeTimeline = 'badIntro';
					missVsOshu(text.angryIntroMiss, 'speech/angryMiss.mp3', text.angryIntroOshu, 'speech/angryOshu.mp3', '','','');
					$('#miloResponse').hide();
					var wait = setInterval(function() {
						if($('#miloSays').text() == text.angryIntroOshu) {
							clearInterval(wait);
							setTimeout(function() {
								$('#miloSays').text('');
								$('#miloResponse').show();
								$('#good').writeText(response.angryGood);
								$('#bad').writeText(response.angryBad);
								$('#neut').writeText(response.ignore);
							}, 3000);
						}
						else if($('#miloSays').text() == text.angryIntroMiss) {
							clearInterval(wait);
							setTimeout(function() {
								$('#miloSays').text('');
								$('#miloResponse').show();
								$('#good').writeText(response.angryGood);
								$('#bad').writeText(response.angryBad);
								$('#neut').writeText(response.ignore);
							}, 3000);
						}
					}, 1);
				}
			}
		}

		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				if(goodbyeTimeline == 'badIntro') {
					quickMilo(text.angryGood, 'speech/angryGood.mp3');
					concludeInteraction(8500);
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
					concludeInteraction(6500);
					$('#skip').show();
					$('#skipButton').click(function() {
						ignore('#map');
					});
				};				
			};
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				if(goodbyeTimeline == 'badIntro') {
					quickMilo(text.angryBad, 'speech/angryBad.wav');
					concludeInteraction(4000);
				}
				else if(goodbyeTimeline == 'goodIntro') {
					audio.pause();
					$('#miloSays').writeText(text.happyBad);
					concludeInteraction(2000);
					$('#skip').show();
					$('#skipButton').click(function() {
						ignore('#map');
					});
				}
				else if(goodbyeTimeline == 'lets do it') {
					quickMilo(text.happyGoodBad, 'speech/happyGoodBad.mp3');
					concludeInteraction(9000);
					skipToMap();
				}				
			};
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(goodbyeTimeline == 'goodIntro') {
				if(go) {
					if(knowledge.commitConversation) {
						quickMilo(text.happyNeutConversed, 'speech/happyNeutConversed.mp3');
						concludeInteraction(6200);
					}
					else {
						quickMilo(text.happyNeutNoConversed, 'speech/happyNeutNotConversed.mp3');
						concludeInteraction(12500);
					}					
				};
			};
		});
	};

});