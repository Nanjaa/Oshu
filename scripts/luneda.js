$(document).ready(function() {
	// all the text that will be used throughout this level
	var beachText = {
		inUse: false,
		welcome: "You have arrived on the beaches of the Electric Sea. There is a buzzing sound that mixes gently with the sound of the waves crashing.",
		rentalWelcome: "Hello there young lady! I have everything you'll need to swim in the seas without getting yourself killed. What do you say? 50 coins covers it all!",
		rentalNoCoins: "That's not enough money! 50 coins or no deal. I don't bargain.",
		rentalComplete: "Fantastic! Here's your ElectroSuit. You have an hour to swim, then I'll need the equipment back. Have a great day!",
		rentalOptions: "Do you want to rent an ElectroSuit?",
		rentalInUse: "Go have fun with your equipment! But remember to bring it back...",
		rentalNo: "That's alright! Don't try to swim, though. Unless, of course, you want to be fish food!",
		drinksWelcome: "You've come to the right place, my friend! I have the coldest drinks on this most sunny of days!",
		drinksGoodbye: "Come back anytime, my friend. Stay safe!",
		seaLife: "You step into the sea, and submerge yourself. There are fish everywhere. You try to take as many pictures as you can before you have to return the suit!",
		seaDeath: "You step into the sea without protection. The electricity swallows you up, and you feel yourself losing control. Slowly, everything fades..."	
	};

	// brings up the common divs between all the city details
	$('.lunedaCity').click(function() {
		$('.lunedaCity').hide();
		$('.return').show();
		$('#planetInteraction').show();
	});

	// takes you back to the city map from any city details
	function lunedaReturn() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.lunedaCity').show();		
	}
	$('.return').click(function() {
		lunedaReturn();
		changeLocation('#lunedaMap', true);
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
			case 'tikiHut': 
				$('.beachDetails').hide();
				$('.drinkStand').show();
				$('#interactionText').writeText(tikiText.intro);
				break;
			case 'danceHall':
				changeLocation('.danceHall');
				break;
			case 'weather':
				$('.lunedaCity').hide();
				$('.weather').show();
				changeLocation('.weather');
				break;
			case 'marketCircle':
				$('.lunedaCity').hide();
				$('.marketStands').hide();
				$('.theMarkets').show();
				$('.marketDetails').show();
				$('#interactionText').writeText(marketText.marketWelcome);
				changeLocation('.theMarkets');
				break;
			case 'marketCentre':
				$('.lunedaCity').hide();
				$('.marketStands').hide();
				$('.theMarkets').show();
				$('.marketDetails').show();
				$('#interactionText').writeText(marketText.marketWelcome);
				changeLocation('.theMarkets');
				break;
			case 'lunedaMechanic':
				$('.lunedaCity').hide();
				$('.lunedaMechanic').show();
				break;
			case 'fruitStand':
				$('.marketDetails').hide();
				$('.fruitStand').show();
				$('#interactionText').writeText(marketText.fruitWelcome);
				maleVoice();
				changeLocation('.fruitStand');
				break;
			case 'souvenirStand':
				$('.marketDetails').hide();
				$('.souvenirStand').show();
				$('#interactionText').writeText(marketText.souvenirWelcome);
				changeLocation('.souvenirStand');
				break;
			case 'clothesStand':
				$('.marketDetails').hide();
				$('.clothesStand').show();
				$('#interactionText').writeText(marketText.clothesWelcome);
				changeLocation('.clothesStand');
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

	//************************ interact with the equipment shack ************************
	$('#equipment').click(function() {
		rentalActivate();
	});

	function rentalActivate() {
		if(beachText.inUse == true) {
			$('#interactionText').writeText(beachText.rentalInUse);
		}
		else {
			// plays the sound effect of the man talking
			if($('#interactionText').text().length < beachText.rentalWelcome.length) {
				maleVoice();
			}
			$('#interactionText').writeText(beachText.rentalWelcome);
			displayOptions(beachText.rentalWelcome, beachText.rentalOptions, 50, beachText.rentalComplete, beachText.rentalNo, beachText.rentalNoCoins);
			var boughtSuit = setInterval(function() {
				if($('#interactionText').text() == beachText.rentalComplete) {
				// adds item to inventory if not already there
					$('.inventoryList').append('<li class="inventoryItem" id="electroSuit">ElectroSuit</li>');
					Oshu.items.electroSuit = true;
					clearInterval(boughtSuit);

					// now you can click the electroSuit
					$('#electroSuit').click(function() {
						inventoryDescription('#electroSuit', 'electroSuit', Oshu.description.electroSuit);
					});

					

				}
			}, 1)
		};
	};

	//************************ interact with the drinks stand ************************

	var tikiText = {
		intro: "You talk into the tiki hut, which is softly playing tropical music.",
		bartenerIntro: "Hi there. Is there anything I can help you with?",
		advice1: "If you want to go to the electric seas, make sure you wear an ElectroSuit. You'll die otherwise!",
		advice2: "They have a strict dress code at the Dance Hall. You absolutely have to wear formal clothes!",
		advice3: "The best place to buy electric fruit is at the marketplace.",
		manIntro: "Hey, stranger. I'll tell you a secret if you do me a good turn...",
		questIntro: "I'm 500 years old. I'll tell you the secret to getting into the Life Pools if you help me fix this.",
		robotDescription: "He hands you a small, broken robot.",
		questDescription: "I got into a fight with the mechanic years ago. If you have him fix the robot for me, I'll tell you how to get in.",
		questInquiry: "What do you say?",
		questYes: "Alright. Come back when he's all good and repaired.",
		questNo: "You'll come back soon enough. The Life Pools are too tempting... And when you do, you're free to accept the quest.",
		questReturnIncomplete: "Come back when the robot's fixed. I won't tell you the secret without him.",
		questReturnComplete: "You really did it! Alright, here's the scoop: Go visit the fortune teller and tell her the password 'Phoenix.' She'll help you from there.",
		questReturnAccept: "I knew you'd come back! So now what do you say? You in?"
	}

	var barStatus = 1;

	$('#bar').click(function() {
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
	});

	var manStatus = 'intro';

	$('#mysteriousMan').click(function() {
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
	});

	$('#optionOne').click(function() {
		switch(manStatus) {
			case 'listening':
				$('#interactionText').writeText(tikiText.questIntro);
				var robot1 = setInterval(function() {
					if($('#interactionText').text() == tikiText.questIntro) {
						clearInterval(robot1);
						var robot2 = setTimeout(function() {
							$('#interactionText').text('');
							oneOption(tikiText.robotDescription, "Why can't you do this yourself?");
						}, 3000)
					};
				}, 1);
				manStatus = 'yourself';
				break;
			case 'yourself':
				$('#interactionText').writeText(tikiText.questDescription);
				var robot3 = setInterval(function() {
					if($('#interactionText').text() == tikiText.questDescription) {
						clearInterval(robot3);
						var robot4 = setTimeout(function() {
							$('#interactionText').text('');
							twoOptions(tikiText.questInquiry, "I'm in.", "what");
						}, 3000)
					};
				}, 1);
				manStatus = 'inquiry';
				break;
			case 'inquiry': 
				endConversation(tikiText.questYes);
				// adds broken robot
				Oshu.items.brokenRobot = true;
				$('.inventoryList').append('<li class="inventoryItem" id="brokenRobot">Broken Robot</li>');				
				// now you can select the robot
				$('#brokenRobot').click(function() {
					inventoryDescription('#brokenRobot', 'Broken Robot', Oshu.description.brokenRobot);
				});
				manStatus = 'accepted';
				break;
			case 'rejected': 
				endConversation(tikiText.questYes);
				// adds broken robot
				Oshu.items.brokenRobot = true;
				$('.inventoryList').append('<li class="inventoryItem" id="brokenRobot">Broken Robot</li>');				
				// now you can select the robot
				$('#brokenRobot').click(function() {
					inventoryDescription('#brokenRobot', 'Broken Robot', Oshu.description.brokenRobot);
				});
				manStatus = 'accepted';
				break;
		};
	});

	$('#optionTwo').click(function() {
		switch(manStatus) {
			case 'inquiry':
				manStatus = 'rejected';
				endConversation(tikiText.questNo);
				break;
			case 'rejected':
				endConversation(tikiText.questNo);
				break;
		}
	})

	//************************ interact with the sea ************************

	$('#closerSeas').click(function() {
		$('#beach').hide();
		if(Oshu.items.electroSuit) {
			completeItem(Oshu.quests[0][1][0], Oshu.questSpeech.luneda1);
		}
		else {
			$('#interactionText').writeText(beachText.seaDeath);
		}
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
		fruitWelcome: "You step into the fruit stand, and are surrounded by a rainbow of produce. A boy with brown, curly hair approaches you. 'Hello! What would you like to buy?'",
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
		souvenirReturn: "I hope you enjoy your souvenirs! Add it to your collection!"
	};

	var yes = marketText.yes;
	var no = marketText.no;

	$('#electange').click(function() {
		$('#interactionText').writeText(marketText.electange);
		displayOptions(marketText.electange, marketText.electangeOptions, 25, yes, no, marketText.needMore);
		var stop = false;
		var boughtElectange = setInterval(function() {
			if($('#interactionText').text() == yes) {
				// adds item to inventory if not already there
				if(Oshu.itemFirst.electange == true) {
					Oshu.itemFirst.electange = false;
					$('.inventoryList').append('<li class="inventoryItem" id="myElectange">Electange: <span id="electangeAmt"></span></li>');				
				
					// now you can eat the electange
					$('#myElectange').click(function() {
						useItem(Oshu.items.electange, '#electangeAmt')
						if(Oshu.items.electange > 0) {
							Oshu.items.electange = Oshu.items.electange - 1;
							completeItem(Oshu.quests[0][1][2], Oshu.questSpeech.luneda3);
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
	});



	$('#ganifruit').click(function() {
		$('#interactionText').writeText(marketText.ganifruit);
		displayOptions(marketText.ganifruit, marketText.ganifruitOptions, 10, yes, no, marketText.needMore);
		var boughtGanifruit = setInterval(function() {
			if($('#interactionText').text() == yes) {
				// adds item to inventory if not already there
				if(Oshu.itemFirst.ganifruit == true) {
					Oshu.itemFirst.ganifruit = false;
					$('.inventoryList').append('<li class="inventoryItem"><span id="myGanifruit">Ganifruit: <span id="ganifruitAmt"></span></span><span id="ganiDesc"></span></li>');
		
					// now you can eat the ganifruit
					$('#myGanifruit').click(function() {
						useItem(Oshu.items.ganifruit, '#ganifruitAmt');
						if(Oshu.items.ganifruit > 0) {
							Oshu.items.ganifruit = Oshu.items.ganifruit - 1;
						}
					});

					// this is in reference to feeding the poor man on Tyrianne
					// var feedPoorMan = setInterval(function() {
					// 	if($('#interactionText').text() == "Oh, bless your soul. Is there anything I can help you with? I have no money...") {
					// 		useItem(Oshu.items.ganifruit)
					// 	}
					// }, 1)
				}
				// adds quantity amt after adding item to inventory
				var ganifruit = Oshu.items.ganifruit + 1;
				Oshu.items.ganifruit = ganifruit;
				$('#ganifruitAmt').text(ganifruit);
				
				clearInterval(boughtGanifruit);
			};
		}, 1);
	});

	$('#dresses').click(function() {
		if(Oshu.items.clothes == false) {
			$('#interactionText').writeText(marketText.clothes);
			displayOptions(marketText.clothes, marketText.clothesOptions, 25, marketText.clothesYes, marketText.clothesNo, marketText.clothesNeedMore);
			var boughtClothes = setInterval(function() {
				if($('#interactionText').text() == marketText.clothesYes) {
					// adds item to inventory if not already there
					if(Oshu.itemFirst.clothes == true) {
						Oshu.items.clothes = true;
						Oshu.itemFirst.clothes = false;
						$('.inventoryList').append('<li class="inventoryItem"><span id="myClothes">Lunedian Dress</span></li>');
			
						// now you can select the clothes
						$('#myClothes').click(function() {
							inventoryDescription('#myClothes', 'Lunedian Dress', Oshu.description.clothes);
						});
					}
					clearInterval(boughtClothes);
				};
			}, 1);			
		}
		else {
			$('#interactionText').writeText(marketText.clothesReturn);
		}

	});

	$('#snowglobes').click(function() {
		console.log(Oshu.items.lunedaSnowglobe);
		console.log(Oshu.items.lunedaBobblehead);
		console.log(Oshu.items.lunedaPostcard);

		if(Oshu.items.lunedaSnowglobe == false) {
			$('#interactionText').writeText(marketText.snowglobes);
			displayOptions(marketText.snowglobes, marketText.snowglobeOptions, 10, marketText.souvenirYes, marketText.souvenirNo, marketText.souvenirNeedMore);
			var boughtSnowglobe = setInterval(function() {
				if($('#interactionText').text() == marketText.souvenirYes) {
					// adds item to inventory if not already there
					if(Oshu.itemFirst.lunedaSnowglobe == true) {
						Oshu.items.lunedaSnowglobe = true;
						Oshu.itemFirst.lunedaSnowglobe = false;
						$('.inventoryList').append('<li class="inventoryItem"><span id="lunedaSnowglobe">Beach Snowglobe</span></li>');
			
						// now you can select the snowglobe
						$('#lunedaSnowglobe').click(function() {
							inventoryDescription('#lunedaSnowglobe', 'Beach Snowglobe', Oshu.description.lunedaSnowglobe);
						});
					}
					clearInterval(boughtSnowglobe);
				};
			}, 1);
		}
		else {
			$('#interactionText').writeText(marketText.souvenirReturn);
		}

	});

	$('#bobbleheads').click(function() {
		if(Oshu.items.lunedaBobblehead == false) {
			$('#interactionText').writeText(marketText.bobbleheads);
			displayOptions(marketText.bobbleheads, marketText.bobbleheadOptions, 15, marketText.souvenirYes, marketText.souvenirNo, marketText.souvenirNeedMore);
			var boughtBobbleheads = setInterval(function() {
				if($('#interactionText').text() == marketText.souvenirYes) {
					// adds item to inventory if not already there
					if(Oshu.itemFirst.lunedaBobblehead == true) {
						Oshu.items.lunedaBobblehead = true;
						Oshu.itemFirst.lunedaBobblehead = false;
						$('.inventoryList').append('<li class="inventoryItem"><span id="lunedaBobblehead">Stormchaser Bobblehead</span></li>');
			
						// now you can select the clothes
						$('#lunedaBobblehead').click(function() {
							inventoryDescription('#lunedaBobblehead', 'Stormchaser Bobblehead', Oshu.description.lunedaBobblehead);
						});
					}
					clearInterval(boughtBobbleheads);
				};
			}, 1);
		}
		else {
			$('#interactionText').writeText(marketText.souvenirReturn);
		}

	});

	$('#postcards').click(function() {
		if(Oshu.items.lunedaPostcard == false) {
			$('#interactionText').writeText(marketText.postcards);
			displayOptions(marketText.postcards, marketText.postcardOptions, 1, marketText.souvenirYes, marketText.souvenirNo, marketText.souvenirNeedMore);
			var boughtPostcards = setInterval(function() {
				if($('#interactionText').text() == marketText.souvenirYes) {
					// adds item to inventory if not already there
					if(Oshu.itemFirst.lunedaPostcard == true) {
						Oshu.items.lunedaPostcard = true;
						Oshu.itemFirst.lunedaPostcard = false;
						$('.inventoryList').append('<li class="inventoryItem"><span id="lunedaPostcard">Luneda Postcard</span></li>');

						// now you can select the clothes
						$('#lunedaPostcard').click(function() {
							inventoryDescription('#lunedaPostcard', 'Luneda Postcard', Oshu.description.lunedaPostcard);
						});
					}
					clearInterval(boughtPostcards);
				};
			}, 1);
		}
		else {
			$('#interactionText').writeText(marketText.souvenirReturn);
		}

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
		danceSight: "You see a man across the way that looks just like the picture. You take it out to double-check. It's definitely him!",
		danceSpeak: "'What's this? Ah, I was told",
		advice1: "I read you can attract fairies with shiny objects. How interesting!",
		advice2: "Fuzzbutt factory is always running, but when was the last time you saw a Fuzzbutt toy? I think there's something fishy going on...",
		advice3: "I heard the only way to turn off the Lifecycle Program on an android was to have a mechanic do it. Is that true?",
		barryAdvice: "Barry used to work at the Intergalactic Library. He's told us tons of stories about it. He's the one wearing red.",
		barryIntro: "Oh, the Intergalactic Library? I loved working there. It was one of my favorite jobs.",
		barryOffer: "Only if you can answer my riddle!",
		barryRiddle: "It runs and runs but can never flee. It is often watched but never sees. When long, it brings boredom, and when short, it brings fear. What is it?",
		barryWrong: "Incorrect! It's TIME! That was fun, wasn't it? But I feel guilty, I shouldn't not let you come because you couldn't guess it... Here, just take this library pass.",
		barryRight: "DING DING DING! You are correct! That was fun, wasn't it? Alright, you answered correctly, here's your library pass.",
		barryGoodbye: "Go use your library pass! You won't believe how amazing it is there!"
	}

	$('#danceHall').click(function() {
		$('.danceHall').show();
		$('.lunedaCity').hide();
		if(Oshu.items.clothes == false) {
			$('.noDancing').show();
			$('#interactionText').writeText(danceText.doorman);
		}
		else {
			$('.noDancing').hide();
			$('.danceDetails').show();
			$('#interactionText').writeText(danceText.danceIntro);
		}
	});

	var dancerSpeech = 1;
	$('.dancer').click(function() {
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
	})

	$('#dancer4').click(function() {
		if(Oshu.items.libraryPass) {
			$('#interactionText').writeText(danceText.barryGoodbye);
		}
		else {
			oneOption(danceText.barryIntro, 'Is there a way you could get me into the library?');
			var dancerStatus = 'intro';
			$('#optionOne').click(function() {
				switch(dancerStatus) {
					case 'intro': 
						oneOption(danceText.barryOffer, 'Alright.');
						dancerStatus = 'alright';
					break;
					case 'alright':
						dancerStatus = 'riddle';
						$('#interactionText').writeText(danceText.barryRiddle);
						var wait = setInterval(function() {
							if($('#interactionText').text() == danceText.barryRiddle) {
								clearInterval(wait);
								var hold = setTimeout(function() {
									$('#interactionText').text('');
									$('#optionOne').show();
									$('#optionTwo').show();
									$('#optionOne').text('Your shadow?');
									$('#optionTwo').text('Time?');

								}, 3000)
							}
						}, 1);
					break;
					case 'riddle':
						endConversation(danceText.barryWrong);
						$('.inventoryList').append('<li class="inventoryItem"><span id="libraryPass">Intergalactic Library Pass</span></li>');
						// now you can select the library pass
						$('#libraryPass').click(function() {
							inventoryDescription('#libraryPass', 'Intergalactic Library Pass', Oshu.description.libraryPass);
						});
					break;
				}
			
			});
			
			$('#optionTwo').click(function() {
				$('#interactionText').writeText(danceText.barryRight);
				$('.inventoryList').append('<li class="inventoryItem"><span id="libraryPass">Intergalactic Library Pass</span></li>');
				// now you can select the library pass
				$('#libraryPass').click(function() {
					inventoryDescription('#libraryPass', 'Intergalactic Library Pass', Oshu.description.libraryPass);
				});				
			});
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
			$('#interactionText').writeText(weatherText.intro);
	});

	// speak to the weatherman
	$('#weatherman').click(function() {
		if(Oshu.items.weatherSpecimen == false && weatherComplete == false) {
			console.log(3);
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
		$('#optionOne').click(function() {
			switch(weatherStatus) {
				case 'intro':
					$('.option').hide();
					if(Oshu.coins >= 1000) {
						$('#interactionText').writeText(weatherText.coins);
						payMoney(1000);
						completeItem(Oshu.quests[0][1][0], Oshu.questSpeech.luneda2);
						weatherComplete = true;
					}
					else {
						Oshu.items.weatherSpecimen = true;
						$('#interactionText').writeText(weatherText.noCoinsLie);
						$('.inventoryList').append('<li class="inventoryItem"><span id="weatherSpecimen">Luneda Rain Specimen</span></li>');
						// now you can select the library pass
						$('#weatherSpecimen').click(function() {
							inventoryDescription('#weatherSpecimen', 'Luneda Rain Specimen', Oshu.description.weatherSpecimen);
						});
					};
				break;
				case 'return complete':
					endConversation(weatherText.specimen);
					var wait = setInterval(function() {
						if($('#interactionText').text() == weatherText.specimen) {
							var hold = setTimeout(function() {
								completeItem(Oshu.quests[0][1][0], Oshu.questSpeech.luneda2);
							}, 2000);
						};
					}, 1);
				break;
				case 'return incomplete':
					endConversation(weatherText.noSpecimen);
				break;
			};
		});

		$('#optionTwo').click(function() {
			Oshu.items.weatherSpecimen = true;
			endConversation(weatherText.noCoinsTruth);
			$('.inventoryList').append('<li class="inventoryItem"><span id="weatherSpecimen">Luneda Rain Specimen</span></li>');
			// now you can select the library pass
			$('#weatherSpecimen').click(function() {
				inventoryDescription('#weatherSpecimen', 'Luneda Rain Specimen', Oshu.description.weatherSpecimen);
			});
		});
	});

	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						MECHANIC 							   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|

	var mechanicText = {
		intro: "You walk into the mechanic's shop, and see a menu with his options and prices."
	}

	$('#lunedaMechanic').click(function() {
		$('#interactionText').writeText(mechanicText.intro);
	})

	$('#lunedaLifecycleAdd').click(function() {
		lifeEvent(-15);
	});




});

