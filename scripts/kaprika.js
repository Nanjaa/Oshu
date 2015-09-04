$(document).ready(function() {

	// brings up the common divs between all the city details
	$('.kaprikaCity').click(function() {
		$('.kaprikaCity').hide();
		$('.return').show();
		$('#planetInteraction').show();
	})

	// takes you back to the city map from any city details
	function kaprikaReturn() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.kaprikaCity').show();	
	}
	$('.return').click(function() {
		kaprikaReturn();
		changeLocation('#kaprikaMap');
	});

	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						LOCATIONS 	 						   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|

	$('pre').click(function() {
		var location = $(this).attr('id');
		switch(location) {
			case 'quietGrove':
				changeLocation('.quietGrove');
				$('.quietGrove').show();
				if(Oshu.items.jewelry == false) {
					$('#fairies').hide();
				}
				break;
			case 'theTree':
				changeLocation('.kaprikaTree');
				$('.kaprikaTree').show();
				$('#interactionText').writeText(treeText.intro);
				break;
			case 'mysteriousShop':
				changeLocation('.mysteriousShop');
				$('.mysteriousShop').show();
				$('#interactionText').writeText(mysteryText.intro)
				break;
		};
	});

	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |					MYSTERIOUS SHOP	 						   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|

	var mysteryStatus = 'intro';

	var mysteryText = {
		intro: "You step into a very mysterious shop, with skulls hanging from the ceiling!",
		gypsyIntro: "I'm Lillyandra. I feel you are in turmoil... What may I help you with?",
		hangingSkulls: "Skulls hang from the ceiling by small chains",
		crystalBall: "You sneak a peak into the crystal ball. Your reflection is all you see.",
		lifePools: "Yes, of course. Follow me.",
		gypsyShop: "Here is what I have for sale.",
		shrunkenHead: "A shrunken head! Great for decorating any interior!",
		sleepPotion: "This is great for putting even the most awake individual to sleep. Good choice!",
		goodLuckCharm: "Ah, yes. May this bring you the best of luck."

	}

	// var test = setInterval(function() {
	// 	console.log(mysteryStatus);
	// }, 1000)

	$('#fortuneTeller').click(function() {
		if(Oshu.items.password) {
			twoOptions(mysteryText.gypsyIntro, "What have you got for sale?", "'Phoenix'");
		}
		else {
			oneOption(mysteryText.gypsyIntro, 'What have you got for sale?');
		}
		$('#optionOne').click(function() {
			console.log(mysteryStatus);
			if(mysteryStatus == 'intro') {
				mysteryStatus = 'shop';	
				threeOptions(mysteryText.gypsyShop, "Shrunken Heads - 15 Coins", "Sleep Potions - 10 Coins", 'Nevermind.');			
			}
			else if(mysteryStatus == 'shop') {
				$('#interactionText').writeText(mysteryText.shrunkenHead);
				payMoney(15);
				addItem('shrunkenHead', 'Shrunken Head', Oshu.items.shrunkenHead, '#shrunkenHead', Oshu.description.shrunkenHead);
				mysteryStatus = 'intro';
			}

		});
		$('#optionTwo').click(function() {
			if(mysteryStatus == 'intro') {
				$('#interactionText').writeText(mysteryText.lifePools);
				var timeout = setTimeout(function() {
					completeItem(Oshu.quests[3][1][1], Oshu.questSpeech.kaprika2);
				}, 2000)

			}
		})
	});

	$('#hangingSkulls').click(function() {
		$('#interactionText').writeText(mysteryText.hangingSkulls);
	});

	$('#crystalBall').click(function() {
		$('#interactionText').writeText(mysteryText.crystalBall);
	});

	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						THE TREE	 						   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|

	var treeText = {
		intro: "The biggest tree you've ever seen stands before it. At its base are 3 muscular goons.",
		goonsIntro: "This tree is our turf now! Scram!",
		sleep: "What... is that smell... I'm feeling so... slee..py...",
		sleepEnd: "The goons fall asleep, allowing you entrance to the tree.",
		sleepReturn: "The goons are still asleep.",
		awake: "No way! Now what did I just say? SCRAM!"
	}

	var goonStatus = 'intro';

	$('.treeGoons').click(function() {
		if((Oshu.items.sleepPotion) && (goonStatus == 'intro')) {
			oneOption(treeText.goonsIntro, "Can you smell this potion for me?");
		}
		else if(Oshu.items.sleepPotion) {
			$('#interactionText').writeText(treeText.sleepReturn);
		}
		else {
			oneOption(treeText.goonsIntro, "Maybe there's some way I could convince you.");
		};

		$('#optionOne').click(function() {
			if(Oshu.items.sleepPotion) {
				goonStatus = 'sleeping';
				$('#interactionText').writeText(treeText.sleep);
				var timeout = setTimeout(function() {
					$('#interactionText').writeText(treeText.sleepEnd);
					var wait = setTimeout(function() {
						completeItem(Oshu.quests[3][1][2], Oshu.questSpeech.kaprika3);
					}, 2200)
				}, 3000);
			} 
			else {
				endConversation(treeText.awake);			};
		});
	});


});