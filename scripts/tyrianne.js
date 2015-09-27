
// brings up the common divs between all the city details
$('.tyrianneCity').click(function() {
	$('#tyrianneMap').hide();
	$('.return').show();
	$('#planetInteraction').show();
})

// takes you back to the city map from any city details
$('.return').unbind('click');
$('.return').click(function() {
	if(go && (dontReturn == false)) {
		$('.option').hide();
		// Returning from the library - it'll remind you you can't return before you can do so
		if(Oshu.currentLocation == '.libraryShop') {
			if(go) {
				twoOptions("Are you sure you want to leave? You'll never be able to return to the shop again.", 'Yes', 'No');

				$('#optionOne').unbind('click');
				$('#optionOne').click(function() {
					$('.option').hide();
					$('.return').hide();
					$('.cityDetails').hide();
					$('#tyrianneMap').show();
					changeLocation('#tyrianneMap');
				});

				$('#optionTwo').unbind('click');
				$('#optionTwo').click(function() {
					$('#interactionText').text('');
					$('.option').hide();
				})
			}
		}
		else {
			$('.return').hide();
			$('.cityDetails').hide();
			$('#tyrianneMap').show();
			changeLocation('#tyrianneMap', true);		
		};		
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
		case 'library': 
			$('.option').hide();
			if(Oshu.items.libraryPass) {
				lifeEvent(3);
				completeItem(Oshu.quests[2][1][0], Oshu.questSpeech.tyrianne1);
				Oshu.items.libraryPass = false;
				$('#libraryPass').parent().remove();

				$('#skipButton').unbind('click');
				$('#skipButton').click(function() {
					// Offer the user the chance to visit the shop
					endSpeech();
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
				});
			}
			else {
				changeLocation('.library');
				$('.library').show();
				$('#interactionText').writeText("The library is closed to the public. The building stands tall above you.");
			}

		break;
		case 'fuzzbuttFactory':
			$('.option').hide();
			changeLocation('.fuzzbutt');
			$('.fuzzbutt').show();
			if(fuzzbuttEntry == false) {
				$('.fuzzbuttDetails').hide();
				$('#fuzzbuttDoorman').show();
				$('#interactionText').writeText(factoryText.intro);
			}
			else {
				$('.fuzzbuttDetails').show();
				$('#fuzzbuttDoorman').hide();
				$('#interactionText').writeText(marketText.intro)
			}
		break;
		case 'tyrianneMechanic':
			$('.option').hide();
			changeLocation('.tyrianneMechanic');
			$('.tyrianneMechanic').show();
			$('#interactionText').writeText(shutoffText.intro);
		break;
		case 'poorMan':
			$('.option').hide();
			changeLocation('.poorMan');
			$('.poorMan').show();
			$('#interactionText').writeText(poorText.intro);
		break;
		case 'tyrianneJewelry':
			$('.option').hide();
			changeLocation('.tyrianneJewelry');
			$('.tyrianneJewelry').show();
			$('#interactionText').writeText(jewelryText.intro);
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

$('#poorManClose').unbind('click');
$('#poorManClose').click(function() {
	if(go) {
		$('.option').hide();
		maleVoice();
		if(poorStatus == 'end') {
			$('#interactionText').writeText(poorText.end);
		}
		else {
			twoOptions(poorText.manIntro, "Yes, I do.", "No, I don't");

			$('#optionOne').unbind('click');
			$('#optionOne').click(function() {
				$('.option').hide();
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
					poorStatus = 'end';
					endConversation(poorText.philosophers);
					var timeout = setTimeout(function() {
						lifeEvent(2);
						completeItem(Oshu.quests[2][1][2], Oshu.questSpeech.tyrianne3);

						$('#skip').unbind('click');
						$('#skipButton').unbind('click');
						$('#skipButton').click(function() {
							$('.poorMan').show();
							endSpeech();
							$('#interactionText').writeText(poorText.end);
						});		
					}, 3000);
				}	
				else {
					endConversation(poorText.end);
				}
			});

			$('#optionTwo').unbind('click');
			$('#optionTwo').click(function() {
				$('.option').hide();
				endConversation(poorText.noFood);
			});
		};		
	}
});

// ________________________________________________________________
// | ==============================================================|
// |															   |
// |					JEWELRY STORE 	 						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var jewelryText = {
	intro: "You walk into a jewelry store. It smells clean and the air is slightly cold.",
	ladyIntro: "Welcome to my shop! My name is Mary. Point at whatever you want me to take down for you!",
	advice1: "My friend works at the Intergalactic Library. He's on Luneda right now, though.",
	advice2: "Sunstones are illegal to carry. It's a long story as to why. But you can only buy them on the black market now.",
	purchase: "A bracelet! That beaded one you're looking at is 15 coins. Pretty cheap!",
	options: "Do you want to buy the bracelet?",
	noCoins: "I can only accept 15 coins. Nothing more, nothing less.",
	yes: "Wonderful! Thank you for your purchase, miss!",
	no: "Are you sure? It's so pretty!",
	jewelryGoodbye: "I hope you like your bracelet!"
}

var jewelryStatus = 1;

$('#tyrianneJewelry').click(function() {
	jewelryStatus = 1;
});


$('#tyrianneJewelryLady').click(function() {
	if(go) {
		$('.option').hide();
		femVoice2();
		switch(jewelryStatus) {
			case 1:
				$('#interactionText').writeText(jewelryText.ladyIntro);
				jewelryStatus = 2;
			break;
			case 2:
				$('#interactionText').writeText(jewelryText.advice1);
				jewelryStatus = 3;
			break
			case 3:
				$('#interactionText').writeText(jewelryText.advice2);
				jewelryStatus = 1;
			break;
		};		
	};
});

$('#tyrianneJewelryPieces').click(function() {
	if(go) {
		$('.option').hide();
		femVoice2();
		if(Oshu.items.tyrianneBracelet) {
			$('#interactionText').writeText(jewelryText.jewelryGoodbye);
		}
		else {
			displayOptions(jewelryText.purchase, jewelryText.options, 15, jewelryText.yes, jewelryText.no, jewelryText.noCoins);
			var wait = setInterval(function() {
				if($('#interactionText').text() == jewelryText.yes) {
					addItem('tyrianneBracelet', 'Bracelet from Tyrianne', '#tyrianneBracelet', Oshu.description.tyrianneBracelet);
					Oshu.items.jewelry = true;
					Oshu.items.tyrianneBracelet = true;
					clearInterval(wait);
				}
			}, 1);			
		};		
	};
});

// ________________________________________________________________
// | ==============================================================|
// |															   |
// |					FUZZBUTT FACTORY 	 					   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var factoryText = {
	intro: "The door to the factory is blocked by a huge, muscular man.",
	goonIntro: "Nobody is allowed into the factory without authorization.",
	goonPersuade: "Oh yeah? And how would you go about doing that?",
	bribe: "I'll take it. 200 will get you in.",
	acceptBribe: "Alright. Give me a second, I'll let you in...",
	noMoney: "Hey! This isn't 200! Come on, man...",
	declinedReturn: "Can I help you?",
	authority: "Oh yeah? And what authority is that? Let me see your identification.",
	authorityAdmit: "Yeah, I know. Now, can I help you?",
	lie: "No, you don't. Now, can I help you?",
	declineOffer: "Eh, whatever.",
	quest: "Alright, fine. Take this bottle and fill it with a fairy from Kaprika, and I'll let you in.",
	acceptQuest: "Well, get to it. Here's that bottle I mentioned.",
	questReturnUnfinished: "You know the deal. Fairy or nothin'.",
	questReturnFinished: "Cool. One second, I'll take you inside."
};

$('#fuzzbuttDoorman').unbind('click');
$('#fuzzbuttDoorman').click(function() {
	if(go) {
		maleVoice3();
		$('.option').hide();
		//This is the first conversation you have wth him.
		if(Oshu.items.fullBottle) {
			$('#interactionText').writeText(factoryText.questReturnFinished);
			$('#fullBottle').parent().remove();
			fuzzbuttEntry = true;
			var timeout = setTimeout(function() {
				$('#fuzzbuttDoorman').hide();
				$('.fuzzbuttDetails').show();
				$('#interactionText').writeText(marketText.intro);
			}, 3500);	
		}
		else if(Oshu.items.emptyBottle) {
			$('#interactionText').writeText(factoryText.questReturnUnfinished);
		}
		else if(factoryStatus == 'declined'){
			threeOptions(factoryText.declinedReturn, "I'll pay you.", "I'll help you out.", "Nevermind.");
		}
		else {
			factoryStatus = 'intro';
			twoOptions(factoryText.goonIntro, "Maybe I can persuade you otherwise...", "I do have the proper authority.");
			// select Option One
			$('#optionOne').unbind('click');
			$('#optionOne').click(function() {
				$('.option').hide();
				switch(factoryStatus) {
					case 'intro':
						twoOptions(factoryText.goonPersuade, "How about some coins?", "Any odd jobs you need finished?");				
						factoryStatus = 'persuasion';
					break;
					case 'persuasion':
						twoOptions(factoryText.bribe, "Alright, deal.", "No way!");
						factoryStatus = 'bribe';
					break;
					case 'bribe':
						if(Oshu.coins >= 200) {
							payMoney(200);
							fuzzbuttEntry = true;
							endConversation(factoryText.acceptBribe);
							var timeout = setTimeout(function() {
								$('#fuzzbuttDoorman').hide();
								$('.fuzzbuttDetails').show();
								$('#interactionText').writeText(marketText.intro);
							}, 3500);						
						}
						else {
							endConversation(factoryText.noMoney);
							factoryStatus = 'declined';
						};
					break;
					case 'pressured':
						threeOptions(factoryText.lie, "I'll pay you.", "I'll help you out.", "Nevermind.");
						factoryStatus = 'declined';
					break;
					case 'declined':
						twoOptions(factoryText.bribe, "Alright, deal.", "No way!");
						factoryStatus = 'bribe';
					break;
					case 'quest':
						endConversation(factoryText.declineOffer);
						factoryStatus = 'declined';
					break;
				};
			});	
			// // select Option Two
			$('#optionTwo').unbind('click');
			$('#optionTwo').click(function() {
				$('.option').hide();
				switch(factoryStatus) {
					case 'intro':
						twoOptions(factoryText.authority, "I... uh... have it... somewhere...", "Okay, fine. I don't have the authority.");
						factoryStatus = 'pressured';
					break;
					case 'pressured':
						threeOptions(factoryText.authorityAdmit, "I'll pay you.", "I'll help you out.", "Nevermind.");
						factoryStatus = 'declined';
					break;
					case 'bribe':
						endConversation(factoryText.declineOffer);
						factoryStatus = 'declined';
					break;
					case 'declined':
						twoOptions(factoryText.quest, "That's so unethical... I can't.", "SURE!");
						factoryStatus = 'quest';
					break;
					case 'persuasion':
						twoOptions(factoryText.quest, "That's so unethical... I can't.", "SURE!");
						factoryStatus = 'quest';
					break;
					case 'quest':
						endConversation(factoryText.acceptQuest);
						addItem('emptyBottle', 'Empty Fairy Bottle', '#emptyBottle', Oshu.description.emptyBottle);
						Oshu.items.emptyBottle = true;
						factoryStatus = 'inQuest';
					break;
				};
			});
		}
		$('#optionThree').unbind('click');
		$('#optionThree').click(function() {
			endConversation(factoryText.declineOffer);
		});		
	};
});


var marketText = {
	intro: "Inside what was believed to be Fuzzbutt Factory is a black market, with stands full of illegal goods.",
	sunstoneIntro: "A voice is heard through the shadows: 'Would you like to purchase a sunstone? 50 coins each...'",
	displayOptions: "Would you like to buy a sunstone?",
	yes: "Enjoy the sunstone, stranger....",
	no: "Your choice, stranger...",
	needMore: "That's not enough... Come back when you're serious about doing business here.",
	marketReturn: "Limit 1 per customer..."
}

$('.fuzzbuttDetails').unbind('click');
$('.fuzzbuttDetails').click(function() {
	if(go) {
		$('.option').hide();
		if(Oshu.items.sunstone) {
			$('#interactionText').writeText(marketText.marketReturn);
		}
		else {
			displayOptions(marketText.sunstoneIntro, marketText.displayOptions, 50, marketText.yes, marketText.no, marketText.needMore);
			var wait = setInterval(function() {
				if($('#interactionText').text() == marketText.yes) {
					clearInterval(wait);
					var hold = setTimeout(function() {
						completeItem(Oshu.quests[2][1][1], Oshu.questSpeech.tyrianne2);
						$('#skip').show();
						$('#skipButton').unbind('click');
						$('#skipButton').click(function() {
							endSpeech();
							$('.fuzzbutt').show();
							$('.fuzzbuttDetails').show();
							$('#interactionText').writeText(marketText.marketReturn);
						});
					}, 1500);
					addItem('sunstone', 'Sunstone', '#sunstone', Oshu.description.sunstone);
					Oshu.items.sunstone = true;
				};
			}, 1);		
		};		
	};
});


// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						THE LIBRARY  						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

libraryText = {
	intro: "There is a small gift shop outside the library. Would you like to buy anything?",
	ladyIntro: "Welcome to my humble shop! I just love the library so much. I've been able to get passes a few times now!",
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

$('#librarian').unbind('click');
$('#librarian').click(function() {
	if(go) {
		$('.option').hide();
		$('#interactionText').writeText(libraryText.ladyIntro);
	};
});

// THE LIBRARY SHOP

$('#bookmarks').unbind('click');
$('#bookmarks').click(function() {
	if(go) {
		$('.option').hide();
		femVoice3();
		if(Oshu.items.bookmark == false) {
			displayOptions(libraryText.bookmarkIntro, libraryText.bookmarkOptions, 25, libraryText.yes, libraryText.no, libraryText.needMore);
			var wait2 = setInterval(function() {
				if($('#interactionText').text() == libraryText.yes) {
					addItem('bookmark', 'Library Bookmark', '#bookmark', Oshu.description.bookmark);
					Oshu.items.bookmark = true;
					Oshu.items.gift = true;
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
		$('.option').hide();
		femVoice3();
		if(Oshu.items.libraryBobblehead == false) {
			displayOptions(libraryText.bobbleheadIntro, libraryText.bobbleheadOptions, 50, libraryText.yes, libraryText.no, libraryText.needMore);
			var wait3 = setInterval(function() {
				if($('#interactionText').text() == libraryText.yes) {
					addItem('libraryBobblehead', 'Reader Bobblehead', '#libraryBobblehead', Oshu.description.libraryBobblehead);
					Oshu.items.libraryBobblehead = true;
					Oshu.items.gift = true;
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
		$('.option').hide();
		femVoice3();
		if(Oshu.items.book == false) {
			displayOptions(libraryText.bookIntro, libraryText.bookOptions, 2500, libraryText.yes, libraryText.no, libraryText.needMore);
			var wait4 = setInterval(function() {
				if($('#interactionText').text() == libraryText.yes) {
					$('#bookDisplay').hide();
					$('#emptyBookDisplay').show();
					addItem('book', 'Autographed Book', '#book', Oshu.description.book);
					Oshu.items.book = true;
					Oshu.items.gift = true;
					clearInterval(wait4);
				};
			}, 1);
		}
		else {
			$('#interactionText').writeText(libraryText.end);
		}		
	};
});

// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						MECHANIC 							   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|


// Shut off Lifecycle Program
var shutoffText = {
	intro: "You walk into the mechanic's shop, and see a menu with his options and prices.",
	shutoffIntro: "If you'd like, I can turn off the Lifecycle Program, and you can go on living as long as you'd like.",
	options: "Are you absolutely sure you want to shut off the Lifecycle Program? It will, in effect, end your travels.",
	noCoins: "Sorry, but that's not enough to pay for that.",
	yes: "Alright, one moment, I'll turn off that program of yours.",
	no: "Come back anytime!"
}

$('#tyrianneLifecycleShutoff').unbind('click');
$('#tyrianneLifecycleShutoff').click(function() {
	if(go) {
		$('.option').hide();
		displayOptions(shutoffText.shutoffIntro, shutoffText.options, 15, shutoffText.yes, shutoffText.no, shutoffText.noCoins);

		var wait7 = setInterval(function() {
			if($('#interactionText').text() == shutoffText.yes) {
				dontReturn = true;
				clearInterval(wait7);
				concludeGame(false);			
			}
		}, 1)	
	};
});

var generalText = {
	introRobot: "I see you have a broken robot in need of fixing! 20 coins will do 'ya!",
	introNoRobot: "Would you like to feel fresh and new? Like a spa day for robots!",
	robotOptions: "Would you like to fix the robot?",
	noRobotOptions: "Would you like to be worked on?",
	noCoins: "Sorry, but I'm gonna need more than that.",
	yesRobot: "Alright, hand him over, and give me just a sec...",
	yesRobotEnd: "Here ya go. Bright and shiny like new!",
	yesNoRobot: "You're gonna feel like a brand new robot!",
	yesNoRobotEnd: "An hour later, and you're feeling fantastic! There's even a skip in your step.",
	no: "That's fine."
}

function robotWait(text1, text2) {
	dontReturn = true;
	var wait4 = setInterval(function() {
		if($('#interactionText').text() == text1) {
			clearInterval(wait4);
			var wait5 = setTimeout(function() {
				lifeEvent(1);
				$('#tyrianneMechanicMenu').fadeOut(1000);
				$('#tyrianneMechanicMenu').fadeIn(1000);
				replace = true;
				var wait6 = setTimeout(function() {
					dontReturn = false;
					$('#interactionText').writeText(text2);
				}, 2000);
			}, 1500);
		};
	}, 1);
};

var replace = false;

// General Robot Repairs
$('#tyrianneGeneralRobot').unbind('click');
$('#tyrianneGeneralRobot').click(function() {
	if(go) {
		$('.option').hide();
		if(Oshu.items.brokenRobot) {
			displayOptions(generalText.introRobot, generalText.robotOptions, 20, generalText.yesRobot, generalText.no, generalText.noCoins);
			robotWait(generalText.yesRobot, generalText.yesRobotEnd);
			var wait8 = setInterval(function() {
				if(replace) {
					clearInterval(wait8);
					$('#brokenRobot').parent().remove();
					Oshu.items.brokenRobot = false;
					Oshu.items.fixedRobot = true;
					addItem('fixedRobot', 'Fixed Robot', '#fixedRobot', Oshu.description.fixedRobot);
				}
			}, 1);
		}
		else {
			displayOptions(generalText.introNoRobot, generalText.noRobotOptions, 20, generalText.yesNoRobot, generalText.no, generalText.noCoins);
			robotWait(generalText.yesNoRobot, generalText.yesNoRobotEnd);
		}
	};
});


var addText = {
	intro: "We'll adjust the countdown on your Lifecycle Program! 15 coins!",
	options: "Would you like to add time to your life?",
	noCoins: "That's not enough money!",
	yes: "15 minutes has been added to your life",
	no: "Have a good day!",
	noMore: "I'm sorry, but you're not low enough on time for me to change it!"
};

// Lifecycle Adjustment
$('tyrianneLifecycleAdd').unbind('click');
$('#tyrianneLifecycleAdd').click(function() {
	if(go) {
		$('.option').hide();
		if(Oshu.remainingLife <= 2700) {
			displayOptions(addText.intro, addText.options, 5, addText.yes, addText.no, addText.noCoins);

			var wait7 = setInterval(function() {
				if($('#interactionText').text() == addText.yes) {
					clearInterval(wait7);
					lifeEvent(-15);				
				}
			}, 1)	
		}
		else {
			$('#interactionText').writeText(addText.noMore);
		}
	};
});
