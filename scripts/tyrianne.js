$(document).ready(function() {

	// brings up the common divs between all the city details
	$('.tyrianneCity').click(function() {
		$('.tyrianneCity').hide();
		$('.return').show();
		$('#planetInteraction').show();
	})

	// takes you back to the city map from any city details
	function tyrianneReturn() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.tyrianneCity').show();	
	}
	$('.return').click(function() {
		tyrianneReturn();
		changeLocation('#tyrianneMap');
	});

	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						LOCATIONS 	 						   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|

	var fuzzbuttEntry = false;

	$('#poorMan').click(function() {
		console.log('hello');
	})

	$('pre').click(function() {
		var location = $(this).attr('id');
		switch(location) {
			case 'library': 
				changeLocation('.library');
				$('.library').show();
				break;
			case 'fuzzbuttFactory':
				changeLocation('.fuzzbutt');
				$('.fuzzbutt').show();
				if(fuzzbuttEntry == false) {
					$('.fuzzbuttDetails').hide();
					$('#fuzzbuttDoorman').show();
				}
				else {
					$('.fuzzbuttDetails').show();
					$('#fuzzbuttDoorman').hide();
				}
				break;
			case 'tyrianneMechanic':
				changeLocation('.tyrianneMechanic');
				$('.tyrianneMechanic').show();
				break;
			case 'poorMan':
				changeLocation('.poorMan');
				$('.poorMan').show();
				$('#interactionText').writeText(poorText.intro);
				break;
			case 'tyrianneJewelry':
				changeLocation('.tyrianneJewelry');
				$('.tyrianneJewelry').show();
				break;
		};
	});

	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						POOR MAN 	 						   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|
	var poorStatus = 'intro';

	var poorText = {
		intro: "You walk up to a man with a cardboard sign. He looks incredibly hungry.",
		manIntro: "I'm sorry to ask, but do you have any food? I wish there was something I could give you in return...",
		yesFoodLie: "I pity the man who lies and creates false excitement.",
		yesFoodTruth: "Oh, bless your soul. Is there anything I can help you with? I have no money...",
		ganifruitOnly: "Thank you so much, but I'm actually allergic to electange...",
		philosophers: "I'm just an apprentice, but follow me. I will tell them of your good deed.",
		noFood: "I understand, my friend. Travel happily and live well.",
		end: "Thank you so much for your gift. I hope you enjoyed seeing the philosophers"
	};

	$('#poorManClose').click(function() {
		if(poorStatus == 'end') {
			$('#interactionText').writeText(poorStatus.end);
		}
		else {
			twoOptions(poorText.manIntro, "Yes, I do.", "No, I don't");
			$('#optionOne').click(function() {
				if(poorStatus == 'intro') {
					if(Oshu.items.ganifruit > 0) {
						useItem(Oshu.items.ganifruit, '#ganifruitAmt');
						oneOption(poorText.yesFoodTruth, "Actually, can you help me see the philosophers?");
						poorStatus = 'giveFruit';
					}
					else if(Oshu.items.electange > 0) {
						endConversation(poorText.ganifruitOnly);
					}
					else {
						endConversation(poorText.yesFoodLie);
					}				
				}
				else if(poorStatus == 'giveFruit') {
					endConversation(poorText.philosophers);
					var timeout = setTimeout(function() {
						completeItem(Oshu.quests[2][1][2], Oshu.questSpeech.tyrianne3);
					}, 2000);
				}	
				else {
					endConversation(poorText.end);
				}

			});
			$('#optionTwo').click(function() {
				endConversation(poorText.noFood);
			});
		};
	});

});