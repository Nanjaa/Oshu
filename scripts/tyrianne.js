
// brings up the common divs between all the city details
// $('.tyrianneCity').click(function() {
// 	$('#tyrianneMap').hide();
// 	$('.return').show();
// 	$('#planetInteraction').show();
// })

// takes you back to the city map from any city details
// $('.return').click(function() {
// 	$('.return').hide();
// 	$('.cityDetails').hide();
// 	$('#tyrianneMap').show();
// 	changeLocation('#tyrianneMap', true);
// });

// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						LOCATIONS 	 						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var fuzzbuttEntry = false;

$('pre').click(function() {
	var location = $(this).attr('id');
	switch(location) {
		case 'library': 
			if(Oshu.items.libraryPass) {
				lifeEvent(3);
				completeItem(Oshu.quests[2][1][0], Oshu.questSpeech.tyrianne1);

				$('#skipButton').unbind('click');
				$('#skipButton').click(function() {
					endSpeech();
					libraryShop();
				});
			}
			// else {
			// 	changeLocation('.library');
			// 	$('.library').show();
			// 	$('#interactionText').writeText("The library is closed to the public. The building stands tall above you.");					
			// }

		break;
		// case 'fuzzbuttFactory':
		// 	changeLocation('.fuzzbutt');
		// 	$('.fuzzbutt').show();
		// 	if(fuzzbuttEntry == false) {
		// 		$('.fuzzbuttDetails').hide();
		// 		$('#fuzzbuttDoorman').show();
		// 		$('#interactionText').writeText(factoryText.intro);
		// 	}
		// 	else {
		// 		$('.fuzzbuttDetails').show();
		// 		$('#fuzzbuttDoorman').hide();
		// 		$('#interactionText').writeText(marketText.intro)
		// 	}
		// break;
		// case 'tyrianneMechanic':
		// 	changeLocation('.tyrianneMechanic');
		// 	$('.tyrianneMechanic').show();
		// break;
		// case 'poorMan':
		// 	changeLocation('.poorMan');
		// 	$('.poorMan').show();
		// 	$('#interactionText').writeText(poorText.intro);
		// break;
		// case 'tyrianneJewelry':
		// 	changeLocation('.tyrianneJewelry');
		// 	$('.tyrianneJewelry').show();
		// 	$('#interactionText').writeText(jewelryText.intro);
		// break;
	};
});

// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						POOR MAN 	 						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|
// var poorStatus = 'intro';

// var poorText = {
// 	intro: "You walk up to a man with a cardboard sign. He looks incredibly hungry.",
// 	manIntro: "I'm sorry to ask, but do you have any food? I wish there was something I could give you in return...",
// 	yesFoodLie: "I pity the man who lies and creates false excitement.",
// 	yesFoodTruth: "Oh, bless your soul. Is there anything I can help you with? I have no money...",
// 	ganifruitOnly: "Thank you so much, but I'm actually allergic to electange...",
// 	philosophers: "I'm just an apprentice, but follow me. I will tell them of your good deed.",
// 	noFood: "I understand, my friend. Travel happily and live well.",
// 	end: "Thank you so much for your gift. I hope you enjoyed seeing the philosophers"
// };

// $('#poorManClose').unbind('click');
// $('#poorManClose').click(function() {
// 	console.log(1);
// 	if(go) {
// 		if(poorStatus == 'end') {
// 			$('#interactionText').writeText(poorStatus.end);
// 		}
// 		else {
// 			twoOptions(poorText.manIntro, "Yes, I do.", "No, I don't");

// 			$('#optionOne').unbind('click');
// 			$('#optionOne').click(function() {
// 				if(poorStatus == 'intro') {
// 					if(Oshu.items.ganifruit > 0) {
// 						useItem(Oshu.items.ganifruit, '#ganifruitAmt');
// 						oneOption(poorText.yesFoodTruth, "Actually, can you help me see the philosophers?");
// 						poorStatus = 'giveFruit';
// 					}
// 					else if(Oshu.items.electange > 0) {
// 						endConversation(poorText.ganifruitOnly);
// 					}
// 					else {
// 						endConversation(poorText.yesFoodLie);
// 					}				
// 				}
// 				else if(poorStatus == 'giveFruit') {
// 					poorStatus = 'end';
// 					endConversation(poorText.philosophers);
// 					var timeout = setTimeout(function() {
// 						lifeEvent(2);
// 						completeItem(Oshu.quests[2][1][2], Oshu.questSpeech.tyrianne3);

// 						$('#skip').unbind('click');
// 						$('#skipButton').unbind('click');
// 						$('#skipButton').click(function() {
// 							$('.poorMan').show();
// 							endSpeech();
// 							$('#interactionText').writeText(poorText.end);
// 						});		
// 					}, 2000);
// 				}	
// 				else {
// 					endConversation(poorText.end);
// 				}

// 			});

// 			$('#optionTwo').unbind('click');
// 			$('#optionTwo').click(function() {
// 				endConversation(poorText.noFood);
// 			});
// 		};		
// 	}
// });

// ________________________________________________________________
// | ==============================================================|
// |															   |
// |					JEWELRY STORE 	 						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

// var jewelryText = {
// 	intro: "You walk into a jewelry store. It smells clean and the air is slightly cold.",
// 	ladyIntro: "Welcome to my shop! My name is Mary. Point at whatever you want me to take down for you!",
// 	advice1: "My friend works at the Intergalactic Library. He's on Luneda right now, though.",
// 	advice2: "Sunstones are illegal to carry. It's a long story as to why. But you can only buy them on the black market now.",
// 	purchase: "A bracelet! That beaded one you're looking at is 15 coins. Pretty cheap!",
// 	options: "Do you want to buy the bracelet?",
// 	noCoins: "I can only accept 15 coins. Nothing more, nothing less.",
// 	yes: "Wonderful! Thank you for your purchase, miss!",
// 	no: "Are you sure? It's so pretty!",
// 	jewelryGoodbye: "I hope you like your bracelet!"
// }

// var jewelryStatus = 1;

// $('#tyrianneJewelry').click(function() {
// 	jewelryStatus = 1;
// });

// $('#tyrianneJewelryLady').click(function() {
// 	if(go) {
// 		switch(jewelryStatus) {
// 			case 1:
// 				$('#interactionText').writeText(jewelryText.ladyIntro);
// 				jewelryStatus = 2;
// 			break;
// 			case 2:
// 				$('#interactionText').writeText(jewelryText.advice1);
// 				jewelryStatus = 3;
// 			break
// 			case 3:
// 				$('#interactionText').writeText(jewelryText.advice2);
// 				jewelryStatus = 1;
// 			break;
// 		};		
// 	};
// });

// $('#tyrianneJewelryPieces').click(function() {
// 	if(go) {
// 		if(Oshu.items.tyrianneBracelet) {
// 			$('#interactionText').writeText(jewelryText.jewelryGoodbye);
// 		}
// 		else {
// 			displayOptions(jewelryText.purchase, jewelryText.options, 15, jewelryText.yes, jewelryText.no, jewelryText.noCoins);
// 			var wait = setInterval(function() {
// 				if($('#interactionText').text() == jewelryText.yes) {
// 					addItem('tyrianneBracelet', 'Bracelet from Tyrianne', '#tyrianneBracelet', Oshu.description.tyrianneBracelet);
// 					Oshu.items.jewelry = true;
// 					Oshu.items.tyrianneBracelet = true;
// 					clearInterval(wait);
// 				}
// 			}, 1);			
// 		};		
// 	};
// });

// ________________________________________________________________
// | ==============================================================|
// |															   |
// |					FUZZBUTT FACTORY 	 					   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

// var factoryText = {
// 	intro: "The door to the factory is blocked by a huge, muscular man.",
// 	goonIntro: "Nobody is allowed into the factory without authorization.",
// 	goonPersuade: "Oh yeah? And how would you go about doing that?",
// 	bribe: "I'll take it. 200 will get you in.",
// 	acceptBribe: "Alright. Give me a second, I'll let you in...",
// 	noMoney: "Hey! This isn't 200! Come on, man...",
// 	declinedReturn: "Can I help you?",
// 	authority: "Oh yeah? And what authority is that? Let me see your identification.",
// 	authorityAdmit: "Yeah, I know. Now, can I help you?",
// 	lie: "No, you don't. Now, can I help you?",
// 	declineOffer: "Eh, whatever.",
// 	quest: "Alright, fine. I'm guessing you know what this place is. Take this bottle and fill it with a fairy from Kaprika, and I'll let you in.",
// 	acceptQuest: "Well, get to it. Here's that bottle I mentioned.",
// 	questReturnUnfinished: "You know the deal. Fairy or nothin'.",
// 	questReturnFinished: "Cool. Follow me, I'll take you inside."
// };

// factoryStatus = 'intro';

// $('#fuzzbuttDoorman').click(function() {
// 	if(go) {
// 		if(factoryStatus == 'intro') {
// 			twoOptions(factoryText.goonIntro, "Maybe I can persuade you otherwise...", "I do have the proper authority.");
// 			$('#optionOne').click(function() {
// 				if(factoryStatus == 'intro') {
// 					twoOptions(factoryText.goonPersuade, "How about some coins?", "Any odd jobs you need finished?");				
// 					factoryStatus = 'persuasion';
// 				}
// 				else if(factoryStatus == 'persuasion') {
// 					twoOptions(factoryText.bribe, "Alright, deal.", "No way!");
// 					factoryStatus = 'bribe';
// 				}
// 				else if(factoryStatus == 'bribe') {
// 					if(Oshu.coins >= 200) {
// 						payMoney(200);
// 						fuzzbuttEntry = true;
// 						endConversation(factoryText.acceptBribe);
// 						var timeout = setTimeout(function() {
// 							$('#fuzzbuttDoorman').hide();
// 							$('.fuzzbuttDetails').show();
// 							$('#interactionText').writeText(marketText.intro);
// 						}, 3500);						
// 					}
// 					else {
// 						endConversation(factoryText.noMoney);
// 						factoryStatus = 'declined';
// 					};
// 				}
// 				else if(factoryStatus == 'pressured') {
// 					threeOptions(factoryText.lie, "I'll pay you.", "I'll help you out.", "Nevermind.");
// 					factoryStatus = 'declined';
// 				}
// 				else if(factoryStatus == 'declined') {
// 					twoOptions(factoryText.bribe, "Alright, deal.", "No way!");
// 					factoryStatus = 'bribe';
// 				}
// 				else if(factoryStatus == 'quest') {
// 					endConversation(factoryText.declineOffer);
// 					factoryStatus = 'declined';
// 				}
// 			});	
// 			$('#optionTwo').click(function() {
// 				if(factoryStatus == 'intro') {
// 					twoOptions(factoryText.authority, "I... uh... have it... somewhere...", "Okay, fine. I don't have the authority.");
// 					factoryStatus = 'pressured';
// 				}
// 				else if(factoryStatus == 'pressured') {
// 					threeOptions(factoryText.authorityAdmit, "I'll pay you.", "I'll help you out.", "Nevermind.");
// 					factoryStatus = 'declined';
// 				}
// 				else if(factoryStatus == 'bribe') {
// 					endConversation(factoryText.declineOffer);
// 					factoryStatus = 'declined';
// 				}
// 				else if(factoryStatus == 'declined') {
// 					twoOptions(factoryText.quest, "That's so unethical... I can't.", "SURE!");
// 					factoryStatus = 'quest';
// 				}
// 				else if(factoryStatus == 'persuasion') {
// 					twoOptions(factoryText.quest, "That's so unethical... I can't.", "SURE!");
// 					factoryStatus = 'quest';
// 				}
// 				else if(factoryStatus == 'quest') {
// 					endConversation(factoryText.acceptQuest);
// 					addItem('emptyBottle', 'Empty Fairy Bottle', '#emptyBottle', Oshu.description.emptyBottle);
// 					Oshu.items.emptyBottle = true;
// 				};
// 			});
// 		}
// 		else if(factoryStatus == 'declined'){
// 			threeOptions(factoryText.declinedReturn, "I'll pay you.", "I'll help you out.", "Nevermind.");
// 		}
// 		$('#optionThree').click(function() {
// 			endConversation(factoryText.declineOffer);
// 		});		
// 	};
// });


// var marketText = {
// 	intro: "Inside what was believed to be Fuzzbutt Factory is a black market, with stands full of illegal goods.",
// 	sunstoneIntro: "A voice is heard through the shadows: 'Would you like to purchase a sunstone? 50 coins each...'",
// 	displayOptions: "Would you like to buy a sunstone?",
// 	yes: "Enjoy the sunstone, stranger....",
// 	no: "Your choice, stranger...",
// 	needMore: "That's not enough... Come back when you're serious about doing business here.",
// 	marketReturn: "Limit 1 per customer..."
// }

// $('.fuzzbuttDetails').click(function() {
// 	if(go) {
// 		if(Oshu.items.sunstone) {
// 			$('#interactionText').writeText(marketText.marketReturn);
// 		}
// 		else {
// 			displayOptions(marketText.sunstoneIntro, marketText.displayOptions, 50, marketText.yes, marketText.no, marketText.needMore);
// 			var wait = setInterval(function() {
// 				if($('#interactionText').text() == marketText.yes) {
// 					clearInterval(wait);
// 					var hold = setTimeout(function() {
// 						completeItem(Oshu.quests[2][1][1], Oshu.questSpeech.tyrianne2)
// 					}, 2000);
// 					addItem('sunstone', 'Sunstone', '#sunstone', Oshu.description.sunstone);
// 					Oshu.items.sunstone = true;
// 				};
// 			}, 1);		
// 		};		
// 	};
// });


// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						THE LIBRARY  						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

libraryStatus = 'intro';

libraryText = {
	intro: "There is a small gift shop outside the library. Would you like to buy anything?",
	options: "You enter the small gift shop, filled with items for sale.",
	bookmarkIntro: "A bookmark is always a great, simple purchase!",
	bookmarkOptions: "Would you like to buy the bookmark?",
	bobbleheadIntro: "Bobbleheads! A great choice!",
	bobbleheadOptions: "Would you like to buy a bobblehead?",
	bookIntro: "Now that's something very specal. That's a copy of Moonbank Tide signed by the author, Hugo Riven.",
	bookOptions: "Would you like to buy the book?",
	needMore: "Sorry, but that's not enough money!",
	yes: "Perfect! Here's your souvenir!",
	no: "That's alright!",
	end: "Thank you for your purchase!"
}

function libraryShop() {
	twoOptions(libraryText.intro, 'Yes', 'No');

	$('#optionOne').unbind('click');
	$('#optionOne').click(function() {
		$('.option').hide();
		$('.libraryShop').show();
		$('#interactionText').writeText(libraryText.options);
		changeLocation('.libraryShop');
	});

	$('#optionTwo').unbind('click');
	$('#optionTwo').click(function() {
		$('.option').hide();
		$('.library').show();
		$('#interactionText').writeText("You exit the library, sad that you won't return.");
		changeLocation('.library');
	});
}

// THE LIBRARY SHOP

$('#bookmarks').unbind('click');
$('#bookmarks').click(function() {
	if(go) {
		femVoice3();
		if(Oshu.items.bookmark == false) {
			displayOptions(libraryText.bookmarkIntro, libraryText.bookmarkOptions, 25, libraryText.yes, libraryText.no, libraryText.needMore);
			var wait2 = setInterval(function() {
				if($('#interactionText').text() == libraryText.yes) {
					addItem('bookmark', 'Library Bookmark', '#bookmark', Oshu.description.bookmark);
					Oshu.items.bookmark = true;
					clearInterval(wait2);
				};
			}, 1);
		}
		else {
			$('#interactionText').writeText(libraryText.end);
		}
	};
});

$('#libraryBobbleheads').unbind('click');
$('#libraryBobbleheads').click(function() {
	if(go) {
		femVoice3();
		if(Oshu.items.libraryBobblehead == false) {
			displayOptions(libraryText.bobbleheadIntro, libraryText.bobbleheadOptions, 50, libraryText.yes, libraryText.no, libraryText.needMore);
			var wait3 = setInterval(function() {
				if($('#interactionText').text() == libraryText.yes) {
					addItem('libraryBobblehead', 'Reader Bobblehead', '#libraryBobblehead', Oshu.description.libraryBobblehead);
					Oshu.items.libraryBobblehead = true;
					clearInterval(wait3);
				};
			}, 1);
		}
		else {
			$('#interactionText').writeText(libraryText.end);
		}		
	};
});

$('#bookDisplay').unbind('click');
$('#bookDisplay').click(function() {
	if(go) {
		femVoice3();
		if(Oshu.items.book == false) {
			displayOptions(libraryText.bookIntro, libraryText.bookOptions, 2500, libraryText.yes, libraryText.no, libraryText.needMore);
			var wait4 = setInterval(function() {
				if($('#interactionText').text() == libraryText.yes) {
					$('#bookDisplay').hide();
					$('#emptyBookDisplay').show();
					addItem('book', 'Autographed Book', '#book', Oshu.description.book);
					Oshu.items.book = true;
					clearInterval(wait4);
				};
			}, 1);
		}
		else {
			$('#interactionText').writeText(libraryText.end);
		}		
	};
});
