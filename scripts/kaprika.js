
// brings up the common divs between all the city details
$('.kaprikaCity').click(function() {
	$('.kaprikaCity').hide();
	$('.return').show();
	$('#planetInteraction').show();
})

// takes you back to the city map from any city details
function kaprikaReturn() {
	$('.option').hide();
	$('.return').hide();
	$('.cityDetails').hide();
	$('.kaprikaCity').show();	
}
$('.return').click(function() {
	if(go && (dontReturn == false)) {
		kaprikaReturn();
		changeLocation('#kaprikaMap', true);		
	}
	else if(pleaseChooseOption){
		$('#interactionText').text('Please choose an option!');
	};
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
			$('.option').hide();
			changeLocation('.quietGrove');
			$('.quietGrove').show();
			if(Oshu.items.jewelry == false) {
				$('#interactionText').writeText(groveText.noFairies);
				$('#fairies').hide();
			}
			else {
				$('#interactionText').writeText(groveText.fairies);
			}
		break;
		case 'theTree':
			$('.option').hide();
			changeLocation('.kaprikaTree');
			$('.kaprikaTree').show();
			$('#interactionText').writeText(treeText.intro);
			break;
		case 'mysteriousShop':
			$('.option').hide();
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

var mysteryText = {
	intro: "You step into a very mysterious shop, with skulls hanging from the ceiling!",
	gypsyIntro: "I'm Lillyandra. I feel you are in turmoil... What may I help you with?",
	hangingSkulls: "Skulls hang from the ceiling by small chains",
	crystalBall: "You sneak a peak into the crystal ball. Your reflection is all you see.",
	lifePools: "Yes, of course. Follow me.",
	gypsyShop: "Here is what I have for sale.",
	shrunkenHead: "A shrunken head! Great for decorating any interior!",
	noHead: "Sorry, only one shrunken head per customer!",
	sleepPotion: "This is great for putting even the most awake individual to sleep. Good choice!",
	noSleep: "Sorry, only one potion per customer! I'm sure you understand why...",
	goodLuckCharm: "Ah, yes. May this bring you the best of luck.",
	nevermind: "Alright.",
	poolEnd: "Aren't the Life Pools just something else? I adore every time I get to use them."

}

$('#fortuneTeller').unbind('click');
$('#fortuneTeller').click(function() {
	if(go && (dontReturn == false)) {
		femVoice3();
		$('.option').hide();
		mysteryStatus = 'intro';

		if((Oshu.items.password) && (poolsComplete == false)) {
			twoOptions(mysteryText.gypsyIntro, "What have you got for sale?", "'Phoenix'");
		}
		else {
			oneOption(mysteryText.gypsyIntro, 'What have you got for sale?');
		}
		
		$('#optionOne').unbind('click');
		$('#optionOne').click(function() {
			$('.option').hide();
			if(mysteryStatus == 'intro') {
				$('.option').hide();
				mysteryStatus = 'shop';	
				threeOptions(mysteryText.gypsyShop, "Shrunken Heads - 15 Coins", "Sleep Potions - 10 Coins", 'Nevermind.');			
			}
			else if(mysteryStatus == 'shop') {
				$('.option').hide();
				mysteryStatus = 'intro';
				if(Oshu.items.shrunkenHead) {
					$('#interactionText').writeText(mysteryText.noHead);
				}
				else {
					$('#interactionText').writeText(mysteryText.shrunkenHead);
					payMoney(15);
					addItem('shrunkenHead', 'Shrunken Head', '#shrunkenHead', Oshu.description.shrunkenHead);
					Oshu.items.shrunkenHead = true;					
				}
			}
		});
		$('#optionTwo').unbind('click');
		$('#optionTwo').click(function() {
			$('.option').hide();
			if(mysteryStatus == 'intro') {
				$('.option').hide();
				$('#interactionText').writeText(mysteryText.lifePools);
				dontReturn = true;
				var timeout = setTimeout(function() {
					poolsComplete = true;
					lifeEvent(4);
					completeItem(Oshu.quests[3][1][1], Oshu.questSpeech.kaprika2);
					$('#skip').show();
					$('#skipButton').unbind('click');
					$('#skipButton').click(function() {
						endSpeech();
						$('.mysteriousShop').show();
						$('#interactionText').writeText(mysteryText.poolEnd);
					})
				}, 2000)
			}
			else if(mysteryStatus == 'shop') {
				$('.option').hide();
				mysteryStatus = 'intro';
				if(Oshu.items.sleepPotion) {
					$('#interactionText').writeText(mysteryText.noSleep);
				}
				else {
					$('#interactionText').writeText(mysteryText.sleepPotion);
					payMoney(10);
					addItem('sleepPotion', 'Sleep Potion', '#sleepPotion', Oshu.description.sleepPotion);	
					Oshu.items.sleepPotion = true;				
				}
			}
		});
		$('#optionThree').unbind('click')
		$('#optionThree').click(function() {
			$('.option').hide();
			endConversation(mysteryText.nevermind);
			mysteryStatus = 'intro';
		});		
	};
});

$('#hangingSkulls').click(function() {
	if(go) {
		$('.option').hide();
		$('#interactionText').writeText(mysteryText.hangingSkulls);		
	};
});

$('#crystalBall').click(function() {
	if(go) {
		$('.option').hide();
		$('#interactionText').writeText(mysteryText.crystalBall);		
	};
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
	awake: "No way! Now what did I just say? SCRAM!",
	treeGoons: "The tree stands tall above you, but goons guard the roots!",
	treeNoGoons: "Climbing the tree was exhilirating! The world looked so small beneath you."
};

$('.treeGoons').click(function() {
	if(go) {
		maleVoice2();
		$('.option').hide();
		if((Oshu.items.sleepPotion) && (goonStatus == 'intro')) {
			oneOption(treeText.goonsIntro, "Can you smell this potion for me?");
		}
		else if(goonStatus == 'sleeping') {
			$('#interactionText').writeText(treeText.sleepReturn);
		}
		else {
			oneOption(treeText.goonsIntro, "Maybe there's some way I could convince you.");
		};

		$('#optionOne').unbind('click');
		$('#optionOne').click(function() {
			$('.option').hide();
			if(Oshu.items.sleepPotion) {
				$('#sleepPotion').parent().remove();
				Oshu.items.sleepPotion = false;
				goonStatus = 'sleeping';
				$('#interactionText').writeText(treeText.sleep);
				dontReturn = true;
				var timeout = setTimeout(function() {
					$('#interactionText').writeText(treeText.sleepEnd);
					var wait = setTimeout(function() {
						lifeEvent(1);
						completeItem(Oshu.quests[3][1][2], Oshu.questSpeech.kaprika3);

						$('#skip').show();
						$('#skipButton').unbind('click');
						$('#skipButton').click(function() {
							endSpeech();
							$('.kaprikaTree').show();
							$('#interactionText').writeText(treeText.treeNoGoons);
						});
					}, 2200)
				}, 3000);
			} 
			else {
				endConversation(treeText.awake);			};
		});		
	};
});

$('#treeClose').click(function() {
	if(go) {
		$('.option').hide();
		if(goonStatus == 'sleeping') {
			$('#interactionText').writeText(treeText.treeNoGoons);
		}
		else {
			$('#interactionText').writeText(treeText.treeGoons);
		};		
	};
});


// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						QUIET GROVE	 						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var groveText = {
	noFairies: "The grove is very quiet. You know this is where the fairies are supposed to be, but they're nowhere to be seen.",
	fairies: "You take out the jewelry and it sparkles in the light. The sparkle attracts fairies, which fly all around the grove",
	fairyDescription: "The fairies look like beams of light dancing around the trees.",
	capture: "You pull out your bottle, and place the jewelry inside. A fairy wanders in, and you close the hole-filled cap. You look at the fairy closely. It's just like you imagined in the storybooks."
}

$('#fairies').click(function() {
	if(go && (dontReturn == false)) {
		$('.option').hide();
		if(Oshu.items.emptyBottle) {
			$('#interactionText').writeText(groveText.capture);
			$('#emptyBottle').parent().remove();
			addItem('fullBottle', 'Bottled Fairy', '#fullBottle', Oshu.description.fullBottle);
			Oshu.items.emptyBottle = false;
			Oshu.items.fullBottle = true;
		}
		else {
			$('#interactionText').writeText(groveText.fairyDescription);
		}		
	};
});

$('#quietGrove').click(function() {
	if(Oshu.items.jewelry && firstTime) {
		$('.option').hide();
		firstTime = false;
		dontReturn = true;
		var wait = setTimeout(function() {
			completeItem(Oshu.quests[3][1][0], Oshu.questSpeech.kaprika1);

			$('#skip').show();
			$('#skipButton').unbind('click');
			$('#skipButton').click(function() {
				endSpeech();
				$('.quietGrove').show();
				$('#interactionText').writeText(groveText.fairyDescription);
			});
		}, 3500);
	}		
});