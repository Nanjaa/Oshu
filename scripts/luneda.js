
// brings up the common divs between all the city details
$('.lunedaCity').click(function() {
	$('#lunedaMap').hide();
	$('.return').show();
	$('#planetInteraction').show();
});

// takes you back to the city map from any city details
$('.return').unbind('click');
$('.return').click(function() {
	$('.option').hide();
	go = true;
	$(Oshu.currentLocation).hide();

	if(Oshu.currentLocation == '.rentalDetails') {
		$('.beachDetails').show();
		$('#interactionText').writeText(beachText.welcome);
		changeLocation('#beach', true);	
	}
	else if(Oshu.currentLocation == '.drinkStand') {
		$('.beachDetails').show();	
		$('#interactionText').writeText(beachText.welcome);
		changeLocation('#beach', true);	
	}
	else if(Oshu.currentLocation == '.fruitStand') {
		$('.theMarkets').show();
		$('.marketDetails').show();	
		$('#interactionText').writeText(marketText.marketWelcome);
		changeLocation('#lunedaMap', true);	
	}
	else if(Oshu.currentLocation == '.souvenirStand') {
		$('.theMarkets').show();
		$('.marketDetails').show();
		$('#interactionText').writeText(marketText.marketWelcome);
		changeLocation('.theMarkets', true);	
	}
	else if(Oshu.currentLocation == '.clothesStand') {
		$('.theMarkets').show();
		$('.marketDetails').show();
		$('#interactionText').writeText(marketText.marketWelcome);
		changeLocation('.theMarkets', true);	
	}
	else {
		$('.cityDetails').hide();
		$('.return').hide();
		$('#lunedaMap').show();	
		changeLocation('.theMarkets', true);		
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
		case 'electricSeas': 
			$('#beach').show();
			$('.beachDetails').show();
			$('#interactionText').writeText(beachText.welcome);
			changeLocation('#beach');
		break;
		case 'sand':
			$('#beach').show();
			$('.beachDetails').show();
			$('#interactionText').writeText(beachText.welcome);
			changeLocation('#beach');
			break;
		case 'equipment': 
			if(go) {
				$('.beachDetails').hide();
				$('.rentalDetails').show();
				$('#interactionText').writeText(beachText.intro);
				changeLocation('.rentalDetails');
			};
		break;
		case 'tikiHut':
			if(go) {
				$('.beachDetails').hide();
				$('.drinkStand').show();
				$('#interactionText').writeText(tikiText.intro);
				changeLocation('.drinkStand')
			}
		break;
		case 'danceHall':
			changeLocation('.danceHall');
		break;
		case 'weather':
			$('#lunedaMap').hide();
			$('.weather').show();
			changeLocation('.weather');
		break;
		case 'marketCircle':
			$('.lunedaMap').hide();
			$('.marketStands').hide();
			$('.theMarkets').show();
			$('.marketDetails').show();
			$('#interactionText').writeText(marketText.marketWelcome);
			changeLocation('.theMarkets');
		break;
		case 'marketCentre':
			$('.lunedaMap').hide();
			$('.marketStands').hide();
			$('.theMarkets').show();
			$('.marketDetails').show();
			$('#interactionText').writeText(marketText.marketWelcome);
			changeLocation('.theMarkets');
		break;
		case 'lunedaMechanic':
			$('.lunedaMap').hide();
			$('.lunedaMechanic').show();
			$('#interactionText').writeText(shutoffText.intro);
			changeLocation('.lunedaMechanic');
		break;
		case 'fruitStand':
			if(go) {
				$('.marketDetails').hide();
				$('.fruitStand').show();
				$('#interactionText').writeText(marketText.fruitWelcome);
				maleVoice();
				changeLocation('.fruitStand');				
			}
		break;
		case 'souvenirStand':
			if(go) {
				$('.marketDetails').hide();
				$('.souvenirStand').show();
				$('#interactionText').writeText(marketText.souvenirWelcome);
				changeLocation('.souvenirStand');				
			}
		break;
		case 'clothesStand':
			if(go) {
				$('.marketDetails').hide();
				$('.clothesStand').show();
				$('#interactionText').writeText(marketText.clothesWelcome);
				changeLocation('.clothesStand');				
			}
		break;
	}
})

// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						THE   BEACH 						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var beachText = {
	intro: "You walk closer to the equipment shack, which you can see contains some kind of suit.",
	welcome: "You have arrived on the beaches of the Electric Sea. There is a buzzing sound that mixes gently with the sound of the waves crashing.",
	rentalWelcome: "Hello there young lady! I have everything you'll need to swim in the seas without getting yourself killed. What do you say? 50 coins covers it all!",
	rentalNoCoins: "That's not enough money! 50 coins or no deal. I don't bargain.",
	rentalComplete: "Fantastic! Here's your ElectroSuit. You have an hour to swim, then I'll need the equipment back. Have a great day!",
	rentalOptions: "Do you want to rent an ElectroSuit?",
	rentalInUse: "Go have fun with your equipment! But remember to bring it back...",
	rentalNo: "That's alright! Don't try to swim, though. Unless, of course, you want to be fish food!",
	drinksWelcome: "You've come to the right place, my friend! I have the coldest drinks on this most sunny of days!",
	drinksGoodbye: "Come back anytime, my friend. Stay safe!",
	cantSwim: "You cannot enter the sea without proper protection!",
	suitReturn: "Thank you for returning the suit! I wish you all the best!",
	end: "I hope you enjoyed your swim!"
};

//************************ interact with the equipment shack ************************

var beachEnd = false;

$('.rentalDetails').unbind('click');
$('.rentalDetails').click(function() {
	rentalActivate();
});

function rentalActivate() {
	if(go) {
		$('.option').hide();
		if(beachEnd) {
			maleVoice();
			$('#interactionText').writeText(beachText.end);
		}
		else if(Oshu.items.electroSuit) {
			maleVoice();
			$('#interactionText').writeText(beachText.rentalInUse);
		}
		else {
			// plays the sound effect of the man talking
			maleVoice();
			displayOptions(beachText.rentalWelcome, beachText.rentalOptions, 50, beachText.rentalComplete, beachText.rentalNo, beachText.rentalNoCoins);
			var wait = setInterval(function() {
				if($('#interactionText').text() == beachText.rentalComplete) {
					// Adds the electrosuit
					addItem('electroSuit', 'ElectroSuit', '#electroSuit', Oshu.description.electroSuit);
					Oshu.items.electroSuit = true;
					clearInterval(wait);
				}
			}, 1)
		};		
	}

};

//************************ interact with the drinks stand ************************

var tikiText = {
	intro: "You talk into the tiki hut, which is softly playing tropical music.",
	bartenerIntro: "Hi there. Is there anything I can help you with?",
	advice1: "If you want to go to the electric seas, make sure you wear an ElectroSuit from the rental. You'll die otherwise!",
	advice2: "They have a strict dress code at the Dance Hall. You absolutely have to wear formal clothes!",
	advice3: "The best place to buy electric fruit is at the marketplace.",
	manIntro: "Hey, stranger. I'll tell you a secret if you do me a good turn...",
	questIntro: "'I'm 500 years old. I'll tell you the secret to getting into the Life Pools if you help me fix this.' He hands you a small, broken robot.",
	questDescription: "I got into a fight with the mechanic years ago. If you have him fix the robot for me, I'll tell you how to get in. What do you say?",
	questYes: "Alright. Come back when he's all good and repaired.",
	questNo: "You'll come back soon enough. The Life Pools are too tempting... And when you do, you're free to accept the quest.",
	questReturnIncomplete: "Come back when the robot's fixed. I won't tell you the secret without him.",
	questReturnComplete: "You really did it! Alright, here's the scoop: Go visit the fortune teller and tell her the password 'Phoenix.' She'll help you from there.",
	questReturnAccept: "I knew you'd come back! So now what do you say? You in?"
}

var barStatus = 1;

$('#bar').click(function() {
	if(go) {
		$('.option').hide();
		maleVoice3();
		switch(barStatus) {
			case 1: 
				$('#interactionText').writeText(tikiText.bartenerIntro);
				barStatus = 2;
				break;
			case 2: 
				$('#interactionText').writeText(tikiText.advice1);
				barStatus = 3;
				break;
			case 3:
				$('#interactionText').writeText(tikiText.advice2);
				barStatus = 4;
				break;
			case 4:
				$('#interactionText').writeText(tikiText.advice3);
				barStatus = 1;
				break;
		};		
	}
});

var manStatus = 'intro';

$('#mysteriousMan').click(function() {
	if(go) {
		maleVoice2();
		switch(manStatus) {
			case 'intro':
				oneOption(tikiText.manIntro, "I'm listening...");
				manStatus = 'listening';
				break;
			case 'accepted':
				if(Oshu.items.fixedRobot == false) {
					$('#interactionText').writeText(tikiText.questReturnIncomplete);
					break;					
				}
				else {
					$('#interactionText').writeText(tikiText.questReturnComplete);
					Oshu.items.password = true;
				};
				break;
			case 'rejected':
				twoOptions(tikiText.questReturnAccept, 'Well, yeah!', 'Nevermind.');
				break;
		};	
		
		$('#optionOne').unbind('click');
		$('#optionOne').click(function() {
			if(go) {
				$('.option').hide();
				switch(manStatus) {
					case 'listening':
						$('#interactionText').text('');
						oneOption(tikiText.questIntro, "Why can't you do this yourself?");
						manStatus = 'yourself';
						break;
					case 'yourself':
						$('#interactionText').text('');
						twoOptions(tikiText.questDescription, "I'm in.", "No, thanks.");
						manStatus = 'inquiry';
						break;
					case 'inquiry': 
						endConversation(tikiText.questYes);
						// adds broken robot
						Oshu.items.brokenRobot = true;
						addItem('brokenRobot', 'Broken Robot', '#brokenRobot', Oshu.description.brokenRobot);
						manStatus = 'accepted';
						break;
					case 'rejected': 
						endConversation(tikiText.questYes);
						// adds broken robot
						Oshu.items.brokenRobot = true;
						addItem('brokenRobot', 'Broken Robot', '#brokenRobot', Oshu.description.brokenRobot);
						manStatus = 'accepted';
						break;
				};		
			};
		});

		$('#optionTwo').unbind('click');
		$('#optionTwo').click(function() {
			if(go) {
				$('.option').hide();
				switch(manStatus) {
					case 'inquiry':
						manStatus = 'rejected';
						endConversation(tikiText.questNo);
						break;
					case 'rejected':
						endConversation(tikiText.questNo);
						break;
				};	
			};
		});
	};
});

//************************ interact with the sea ************************

$('#closerSeas').click(function() {
	if(go) {
		if(Oshu.items.electroSuit) {
			lifeEvent(2);
			completeItem(Oshu.quests[0][1][0], Oshu.questSpeech.luneda1);
			beachEnd = true;
			$('#skip').unbind('click');
			$('#skipButton').unbind('click');
			$('#skipButton').click(function() {
				$('#lunedaMap').hide();
				$('#beach').show();
				endSpeech();
				$('#interactionText').writeText(beachText.suitReturn);
				$('#electroSuit').parent().remove();
				Oshu.items.electroSuit = false;
			});
		}
		else {
			$('#interactionText').writeText(beachText.cantSwim);
		};	
	};
})



// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						THE   MARKETS 						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|


var marketText = {
	marketWelcome: "You arrive in a marketplace, filled with stands of all different kinds. You step towards a few of them.",
	fruitWelcome: "Hello! What would you like to buy?",
	electange: "Electange, eh? The best supercharged fruit out there! 25 coins.",
	ganifruit: "I love ganifruit. They're tangy and tasty and full of vitamins! 10 coins each.",
	electangeOptions: "Would you like to buy an electange?",
	ganifruitOptions: "Would you like to buy a ganifruit?",
	yes: "Wonderful! Here's your fruit, my good android. Enjoy!",
	no: "That's fine. If you ever get a craving for some unbelievably amazing fruit, you know where I am!",
	needMore: "Sorry little lady! You don't have enough coins to buy this fruit! Come back another time.",
	clothesWelcome: "You step into the clothes stand. Inside is a rainbow of fabrics. The stand contains authentic Lunedian clothing.",
	clothes: "Welcome to Katie's World of Clothes! I see you're admiring our many authentic Lunedian dresses! I bet green would look excellent on you. The dresses are 25 coins each.",
	clothesOptions: "Would you like to buy a dress?",
	clothesYes: "Thank you so much! Here's your dress. I wish I could see it on! I bet you'd look lovely.",
	clothesNo: "If you're ever in need of something for a special occasion, or just want to feel fancy, you know where to go!",
	clothesNeedMore: "I'm sorry, but you just don't have the coins to buy these garments. Come back when you do.",
	clothesReturn: "Don't you just love that dress? I think it's stunning!",
	souvenirWelcome: "A kitchy souvenir shop stands before you. You see cheap novelties such as bobbleheads and snowglobes, as well as postcards of all kinds.",
	snowglobes: "Ah, a snowglobe! Can't go wrong there! 10 coins.",
	bobbleheads: "We have a great selection of bobbleheads available. All of them are 15 coins each.",
	postcards: "If you ever need a postcard, we're your store. Postcards are only 1 coin each! Quite a deal, don't you think?",
	snowglobeOptions: "Would you like to purchase a snowglobe?",
	bobbleheadOptions: "Would you like to purchase a bobblehead?",
	postcardOptions: "Would you like to purchase a postcard?",
	souvenirYes: "Here's your souvenir so you never forget your time on Luneda. Come back soon!",
	souvenirNo: "Well, I suppose I understand. Some people don't like souvenirs. But if you ever need one, buy them here, okay?",
	souvenirNeedMore: "Sorry, but that's not enough! These are quality souvenirs, ma'am.",
	souvenirReturn: "I hope you enjoy your souvenir! Add it to your collection!"
};

var yes = marketText.yes;
var no = marketText.no;

$('#electange').unbind('click');
$('#electange').click(function() {
	if(go) {
		maleVoice3();
		displayOptions(marketText.electange, marketText.electangeOptions, 25, yes, no, marketText.needMore, maleVoice3());
		var stop = false;
		var boughtElectange = setInterval(function() {
			if($('#interactionText').text() == yes) {
				// adds item to inventory if not already there
				if(Oshu.itemFirst.electange == true) {
					Oshu.itemFirst.electange = false;
					$('.inventoryList').append('<li class="inventoryItem"><span class="clickInventory" id="myElectange">Electange: <span id="electangeAmt"></span></span></li>');				
				
					// now you can eat the electange
					$('#myElectange').click(function() {
						useItem(Oshu.items.electange, '#electangeAmt')
						if(Oshu.items.electange > 0) {
							Oshu.items.electange = Oshu.items.electange - 1;
							completeItem(Oshu.quests[0][1][2], Oshu.questSpeech.luneda3);

							$('#skip').unbind('click');
							$('#skipButton').unbind('click');
							$('#skipButton').click(function() {
								$(Oshu.currentLocation).show();
								endSpeech();
							});
						}
					});
				}
				// then adds quantity amt
				var electange = Oshu.items.electange + 1;
				Oshu.items.electange = electange;
				$('#electangeAmt').text(electange);

				clearInterval(boughtElectange);
			};
		}, 1);				
	};
});


$('#ganifruit').unbind('click');
$('#ganifruit').click(function() {
	if(go) {
		maleVoice3();
		displayOptions(marketText.ganifruit, marketText.ganifruitOptions, 10, yes, no, marketText.needMore, maleVoice3());
		var boughtGanifruit = setInterval(function() {
			if($('#interactionText').text() == yes) {
				// adds item to inventory if not already there
				if(Oshu.itemFirst.ganifruit == true) {
					Oshu.itemFirst.ganifruit = false;
					$('.inventoryList').append('<li class="inventoryItem"><span class="clickInventory" id="myGanifruit">Ganifruit: <span id="ganifruitAmt"></span></span></li>');
		
					// now you can eat the ganifruit
					$('#myGanifruit').click(function() {
						useItem(Oshu.items.ganifruit, '#ganifruitAmt');
						if(Oshu.items.ganifruit > 0) {
							Oshu.items.ganifruit = Oshu.items.ganifruit - 1;
						}
					});
				}
				// adds quantity amt after adding item to inventory
				var ganifruit = Oshu.items.ganifruit + 1;
				Oshu.items.ganifruit = ganifruit;
				$('#ganifruitAmt').text(ganifruit);
				
				clearInterval(boughtGanifruit);
			};
		}, 1);		
	};
});

$('#dresses').unbind('click');
$('#dresses').click(function() {
	if(go) {
		femVoice();
		if(Oshu.items.clothes == false) {
			displayOptions(marketText.clothes, marketText.clothesOptions, 25, marketText.clothesYes, marketText.clothesNo, marketText.clothesNeedMore);
			var boughtClothes = setInterval(function() {
				if($('#interactionText').text() == marketText.clothesYes) {
					addItem('myClothes', 'Lunedian Dress', '#myClothes', Oshu.description.clothes);
					Oshu.items.clothes = true;
					clearInterval(boughtClothes);
				};
			}, 1);			
		}
		else {
			$('#interactionText').writeText(marketText.clothesReturn);
		}		
	};
});

$('#snowglobes').unbind('click');
$('#snowglobes').click(function() {
	if(go) {
		femVoice2();
		if(Oshu.items.lunedaSnowglobe == false) {
			displayOptions(marketText.snowglobes, marketText.snowglobeOptions, 10, marketText.souvenirYes, marketText.souvenirNo, marketText.souvenirNeedMore, femVoice2());
			var boughtSnowglobe = setInterval(function() {
				if($('#interactionText').text() == marketText.souvenirYes) {
					addItem('lunedaSnowglobe', 'Beach Snowglobe', '#lunedaSnowglobe', Oshu.description.lunedaSnowglobe);
					Oshu.items.lunedaSnowglobe = true;
					clearInterval(boughtSnowglobe);
				};
			}, 1);
		}
		else {
			$('#interactionText').writeText(marketText.souvenirReturn);
		}
	};
});

$('#bobbleheads').unbind('click');
$('#bobbleheads').click(function() {
	if(go) {
		femVoice2();
		if(Oshu.items.lunedaBobblehead == false) {
			displayOptions(marketText.bobbleheads, marketText.bobbleheadOptions, 15, marketText.souvenirYes, marketText.souvenirNo, marketText.souvenirNeedMore, femVoice2());
			var boughtBobbleheads = setInterval(function() {
				if($('#interactionText').text() == marketText.souvenirYes) {
					addItem('lunedaBobblehead', 'Stormchaser Bobblehead', '#lunedaBobblehead', Oshu.description.lunedaBobblehead);
					Oshu.items.lunedaBobblehead = true;
					clearInterval(boughtBobbleheads);
				};
			}, 1);
		}
		else {
			$('#interactionText').writeText(marketText.souvenirReturn);
		}		
	};
});

$('#postcards').unbind('click');
$('#postcards').click(function() {
	if(go) {
		femVoice2();
		if(Oshu.items.lunedaPostcard == false) {
			displayOptions(marketText.postcards, marketText.postcardOptions, 1, marketText.souvenirYes, marketText.souvenirNo, marketText.souvenirNeedMore, femVoice2());
			var boughtPostcards = setInterval(function() {
				if($('#interactionText').text() == marketText.souvenirYes) {
					addItem('lunedaPostcard', 'Luneda Postcard', '#lunedaPostcard', Oshu.description.lunedaPostcard);
					Oshu.items.lunedaPostcard = true;
					clearInterval(boughtPostcards);
				};
			}, 1);
		}
		else {
			$('#interactionText').writeText(marketText.souvenirReturn);
		}		
	};
});
// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						THE   DANCE HALL					   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var danceText = {
	doorman: "A muscular doorman blocks the entrance to the Dance Hall. 'You can't get in without proper attire,' he says.",
	danceIntro: "You step onto the busy dance floor. The music is happy and light, and everyone twirls around you.",
	advice1: "I read you can attract fairies with shiny objects. How interesting!",
	advice2: "Fuzzbutt factory is always running, but when was the last time you saw a Fuzzbutt toy? I think there's something fishy going on...",
	advice3: "I heard the only way to turn off the Lifecycle Program on an android was to have a mechanic do it. Is that true?",
	barryAdvice: "Barry used to work at the Intergalactic Library. He's told us tons of stories about it. He's the one wearing red.",
	barryIntro: "Oh, the Intergalactic Library? I loved working there. It was one of my favorite jobs.",
	barryOffer: "Only if you can answer my riddle!",
	barryRiddle: "It runs and runs but can never flee. It is often watched but never sees. When long, it brings boredom, and when short, it brings fear. What is it?",
	barryWrong: "Incorrect!",
	barryRight: "DING DING DING! You are correct! That was fun, wasn't it? Alright, you answered correctly, here's your library pass.",
	barryGoodbye: "Go use your library pass! You won't believe how amazing it is there!"
}

$('#danceHall').click(function() {
	if(go) {
		$('.danceHall').show();
		$('#lunedaMap').hide();
		if(Oshu.items.clothes == false) {
			$('.noDancing').show();
			$('#interactionText').writeText(danceText.doorman);
		}
		else {
			$('.noDancing').hide();
			$('.danceDetails').show();
			$('#interactionText').writeText(danceText.danceIntro);
		}		
	}

});

var dancerSpeech = 1;
$('#dancer1').click(function() {
	if(go) {
		femVoice2();		
	}
});
$('#dancer2').click(function() {
	if(go) {
		femVoice3();		
	}
});
$('#dancer3').click(function() {
	if(go) {
		maleVoice();		
	}
});
$('.dancer').click(function() {
	if(go) {
		switch(dancerSpeech) {
			case 1: 
				$('#interactionText').writeText(danceText.barryAdvice);
				dancerSpeech = 2;
				break;
			case 2: 
				$('#interactionText').writeText(danceText.advice1);
				dancerSpeech = 3;
				break;
			case 3: 
				$('#interactionText').writeText(danceText.advice2);
				dancerSpeech = 4;
				break;
			case 4:
				$('#interactionText').writeText(danceText.advice3);
				dancerSpeech = 1;
				break;
		}		
	};
})

$('#dancer4').click(function() {
	if(go) {
		$('.option').hide();
		maleVoice3();
		if(Oshu.items.libraryPass) {
			$('#interactionText').writeText(danceText.barryGoodbye);
		}
		else {
			oneOption(danceText.barryIntro, 'Is there a way you could get me into the library?');
			var dancerStatus = 'intro';

			$('#optionOne').unbind('click');
			$('#optionOne').click(function() {
				$('.option').hide();
				switch(dancerStatus) {
					case 'intro': 
						oneOption(danceText.barryOffer, 'Alright.');
						dancerStatus = 'alright';
					break;
					case 'alright':
						dancerStatus = 'riddle';
						threeOptions(danceText.barryRiddle, 'Your shadow?', 'Time?', 'A Television?');
					break;
					case 'riddle':
						endConversation(danceText.barryWrong);
					break;
				};				
			});
			
			$('#optionTwo').unbind('click');
			$('#optionTwo').click(function() {
				$('.option').hide();
				$('#interactionText').writeText(danceText.barryRight);
				addItem('libraryPass', 'Intergalactic Library Pass', '#libraryPass', Oshu.description.libraryPass);
				Oshu.items.libraryPass = true;					
			});

			$('#optionThree').unbind('click');
			$('#optionThree').click(function() {
				endConversation(danceText.barryWrong);
			});
		};		
	};
});


// ________________________________________________________________
// | ==============================================================|
// |															   |
// |					THE WEATHER BUREAU 						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var weatherText = {
	intro: "You step into a weather monitoring facility. There are computers everywhere, and a few employees. They look hard at work. One in particular stands out.",
	weathermanIntro: "You want to join us on a storm chase, huh? Well, I mean, it's possible, but I'm going to need 1,000 coins...",
	noCoinsLie: "You liar! You don't have that much money! Tell you what. If you deliver this specimen to the weather department on AliNada, I'll let you go on a chase.",
	noCoinsTruth: "Oh, okay. Well, I guess if you do something for me, I can let you join us on a chase. Go deliver this specimen to the weather department on AliNada.",
	coins: "Fantastic! Follow me!",
	Return: "Did you drop off the specimen?",
	noSpecimen: "Oh. Well, go drop it off! The sooner you do that, the sooner you can see the storms.",
	specimen: "Great! Thank you so much. Follow me, let's go chase some storms!",
	end: "Those were some pretty incredible storms, weren't they?"
};

var weatherComplete = false,
	weatherStatus = 'intro';

// write the description of the weather monitoring facility
$('#weather').click(function() {
	if(go) {
		$('#interactionText').writeText(weatherText.intro);		
	};
});

// speak to the weatherman
$('#weatherman').unbind('click');
$('#weatherman').click(function() {
	if(go) {
		maleVoice2();
		if(Oshu.items.weatherSpecimen == false && weatherComplete == false) {
			twoOptions(weatherText.weathermanIntro, "Here you go", "I don't have that kind of money!");
		}
		else if(weatherComplete) {
			$('#interactionText').writeText(weatherText.end);
		}
		else {
			if(Oshu.items.weatherComplete) {
				weatherStatus = 'return complete';
				oneOption(weatherText.Return, 'Sure did!');
			}
			else {
				weatherStatus = 'return incomplete';
				oneOption(weatherText.Return, 'No, not yet...');
			}
		}



			// these are the functions that run when you clck the options
		$('#optionOne').unbind('click');
		$('#optionOne').click(function() {
			if(go) {
				$('.option').hide();
				switch(weatherStatus) {
					case 'intro':
						$('.option').hide();
						if(Oshu.coins >= 1000) {
							$('#interactionText').writeText(weatherText.coins);
							payMoney(1000);
							lifeEvent(3);
							completeItem(Oshu.quests[0][1][1], Oshu.questSpeech.luneda2);

							$('#skip').unbind('click');
							$('#skipButton').unbind('click');
							$('#skipButton').click(function() {
								$('.weather').show();
								endSpeech();
								$('#interactionText').writeText(weatherText.end);
							});
							weatherComplete = true;
						}
						else {
							Oshu.items.weatherSpecimen = true;
							$('#interactionText').writeText(weatherText.noCoinsLie);
							// adds rain specimen
							addItem('weatherSpecimen', 'Luneda Rain specimen', '#weatherSpecimen', Oshu.description.weatherSpecimen);
						};
					break;
					case 'return complete':
						endConversation(weatherText.specimen);
						var wait = setInterval(function() {
							if($('#interactionText').text() == weatherText.specimen) {
								var hold = setTimeout(function() {
									lifeEvent(3);
									completeItem(Oshu.quests[0][1][1], Oshu.questSpeech.luneda2);

									$('#skip').unbind('click');
									$('#skipButton').unbind('click');
									$('#skipButton').click(function() {
										$('.weather').show();
										endSpeech();
										$('#interactionText').writeText(weatherText.end);
									});
								}, 2000);
							};
						}, 1);
					break;
					case 'return incomplete':
						endConversation(weatherText.noSpecimen);
					break;
				};				
			};
		});

		$('#optionTwo').unbind('click');
		$('#optionTwo').click(function() {
			Oshu.items.weatherSpecimen = true;
			endConversation(weatherText.noCoinsTruth);
			addItem('weatherSpecimen', 'Luneda Rain specimen', '#weatherSpecimen', Oshu.description.weatherSpecimen);
		});		
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

$('#lunedaLifecycleShutoff').click(function() {
	if(go) {
		displayOptions(shutoffText.shutoffIntro, shutoffText.options, 15, shutoffText.yes, shutoffText.no, shutoffText.noCoins);

		var wait7 = setInterval(function() {
			if($('#interactionText').text() == shutoffText.yes) {
				clearInterval(wait7);
				lifeEvent(-15);				
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
	var wait4 = setInterval(function() {
		if($('#interactionText').text() == text1) {
			clearInterval(wait4);
			var wait5 = setTimeout(function() {
				lifeEvent(1);
				$('#lunedaMechanicMenu').fadeOut(1000);
				$('#lunedaMechanicMenu').fadeIn(1000);
				replace = true;
				var wait6 = setTimeout(function() {
					$('#interactionText').writeText(text2);
				}, 2000);
			}, 1500);
		};
	}, 1);
};

var replace = false;

// General Robot Repairs
$('#lunedaGeneralRobot').click(function() {
	if(go) {
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
}

// Lifecycle Adjustment
$('#lunedaLifecycleAdd').click(function() {
	if(go) {
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
