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
		$('.planetInteraction').show();
	});

	// takes you back to the city map from any city details
	function lunedaReturn() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.lunedaCity').show();		
	}
	$('.return').click(function() {
		lunedaReturn();
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
				changeLocation('#beach');
				break;
			case 'sand':
				changeLocation('#beach');
				break;
			case 'danceHall':
				changeLocation('.danceHall');
				break;
			case 'weather':

				break;
			case 'markets':
				changeLocation('.theMarkets');
				break;
			case 'marketCentre':
				changeLocation('.theMarkets');
				break;
			case 'lunedaMechanic':

				break;
			case 'fruitStand':
				changeLocation('.fruitStand');
				break;
			case 'souvenirStand':
				changeLocation('.souvenirStand');
				break;
			case 'clothesStand':
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


	// brings you to the sea city detail
	$('.visitSea').click(function() {
		$('#beach').show();
		$('.planetInteraction').writeText(beachText.welcome);
	});

	//************************ interact with the equipment shack ************************
	$('#equipment').click(function() {
		rentalActivate();
	});

	function rentalActivate() {
		if(beachText.inUse == true) {
			$('.planetInteraction').writeText(beachText.rentalInUse);
		}
		else {
			// plays the sound effect of the man talking
			if($('.planetInteraction').text().length < beachText.rentalWelcome.length) {
				maleVoice();
			}
			$('.planetInteraction').writeText(beachText.rentalWelcome);
			displayOptions(beachText.rentalWelcome, beachText.rentalOptions, 50, beachText.rentalComplete, beachText.rentalNo, beachText.rentalNoCoins);
			var boughtSuit = setInterval(function() {
				if($('.planetInteraction').text() == beachText.rentalComplete) {
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



	//************************ interact with the sea ************************

	$('#closerSeas').click(function() {
		$('#beach').hide();
		if(Oshu.items.electroSuit) {
			questSpeech(Oshu.questSpeech.luneda1)
			completeItem('Swim the electric seas of Luneda');
		}
		else {
			$('.planetInteraction').writeText(beachText.seaDeath);
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

	$('.markets').click(function() {
		$('.lunedaCity').hide();
		$('.marketStands').hide();
		$('.theMarkets').show();
		$('.marketDetails').show();
		$('.planetInteraction').writeText(marketText.marketWelcome);
	});

	$('#fruitStand').click(function() {
		$('.marketDetails').hide();
		$('.fruitStand').show();
		$('.planetInteraction').writeText(marketText.fruitWelcome);
		maleVoice();
	});

	$('#clothesStand').click(function() {
		$('.marketDetails').hide();
		$('.clothesStand').show();
		$('.planetInteraction').writeText(marketText.clothesWelcome);
	});
	$('#souvenirStand').click(function() {
		$('.marketDetails').hide();
		$('.souvenirStand').show();
		$('.planetInteraction').writeText(marketText.souvenirWelcome);
	});

	var yes = marketText.yes;
	var no = marketText.no;

	$('#electange').click(function() {
		$('.planetInteraction').writeText(marketText.electange);
		displayOptions(marketText.electange, marketText.electangeOptions, 25, yes, no, marketText.needMore);
		var stop = false;
		var boughtElectange = setInterval(function() {
			if($('.planetInteraction').text() == yes) {
				// adds item to inventory if not already there
				if(Oshu.itemFirst.electange == true) {
					Oshu.itemFirst.electange = false;
					$('.inventoryList').append('<li class="inventoryItem" id="myElectange">Electange: <span id="electangeAmt"></span></li>');				
				
					// now you can eat the electange
					$('#myElectange').click(function() {
						useItem(Oshu.items.electange, '#electangeAmt')
						if(Oshu.items.electange > 0) {
							Oshu.items.electange = Oshu.items.electange - 1;
							questSpeech(Oshu.questSpeech.luneda2)
							completeItem('Taste the electric fruit of Luneda');

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
		$('.planetInteraction').writeText(marketText.ganifruit);
		displayOptions(marketText.ganifruit, marketText.ganifruitOptions, 10, yes, no, marketText.needMore);
		var boughtGanifruit = setInterval(function() {
			if($('.planetInteraction').text() == yes) {
				// adds item to inventory if not already there
				if(Oshu.itemFirst.ganifruit == true) {
					Oshu.itemFirst.ganifruit = false;
					$('.inventoryList').append('<li class="inventoryItem"><span id="myGanifruit">Ganifruit: <span id="ganifruitAmt"></span></span><span id="ganiDesc"></span></li>');
		
					// now you can eat the ganifruit
					$('#myGanifruit').click(function() {
						useItem(Oshu.items.ganifruit, '#ganifruitAmt')
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
	});

	$('#dresses').click(function() {
		if(Oshu.items.clothes == false) {
			$('.planetInteraction').writeText(marketText.clothes);
			displayOptions(marketText.clothes, marketText.clothesOptions, 25, marketText.clothesYes, marketText.clothesNo, marketText.clothesNeedMore);
			var boughtClothes = setInterval(function() {
				if($('.planetInteraction').text() == marketText.clothesYes) {
					// adds item to inventory if not already there
					if(Oshu.itemFirst.clothes == true) {
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
			$('.planetInteraction').writeText(marketText.clothesReturn);
		}

	});

	$('#snowglobes').click(function() {
		console.log(Oshu.items.lunedaSnowglobe);
		console.log(Oshu.items.lunedaBobblehead);
		console.log(Oshu.items.lunedaPostcard);

		if(Oshu.items.lunedaSnowglobe == false) {
			$('.planetInteraction').writeText(marketText.snowglobes);
			displayOptions(marketText.snowglobes, marketText.snowglobeOptions, 10, marketText.souvenirYes, marketText.souvenirNo, marketText.souvenirNeedMore);
			var boughtSnowglobe = setInterval(function() {
				if($('.planetInteraction').text() == marketText.souvenirYes) {
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
			$('.planetInteraction').writeText(marketText.souvenirReturn);
		}

	});

	$('#bobbleheads').click(function() {
		if(Oshu.items.lunedaBobblehead == false) {
			$('.planetInteraction').writeText(marketText.bobbleheads);
			displayOptions(marketText.bobbleheads, marketText.bobbleheadOptions, 15, marketText.souvenirYes, marketText.souvenirNo, marketText.souvenirNeedMore);
			var boughtBobbleheads = setInterval(function() {
				if($('.planetInteraction').text() == marketText.souvenirYes) {
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
			$('.planetInteraction').writeText(marketText.souvenirReturn);
		}

	});

	$('#postcards').click(function() {
		if(Oshu.items.lunedaPostcard == false) {
			$('.planetInteraction').writeText(marketText.postcards);
			displayOptions(marketText.postcards, marketText.postcardOptions, 1, marketText.souvenirYes, marketText.souvenirNo, marketText.souvenirNeedMore);
			var boughtPostcards = setInterval(function() {
				if($('.planetInteraction').text() == marketText.souvenirYes) {
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
			$('.planetInteraction').writeText(marketText.souvenirReturn);
		}

	});
	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						THE   DANCE HALL						   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|

	var danceText = {
		doorman: "A muscular doorman blocks the entrance to the Dance Hall. 'You can't get in without proper attire,' he says.",
		danceIntro: "You step onto the busy dance floor. The music is happy and light, and everyone twirls around you.",
		danceSight: "You see a man across the way that looks just like the picture. You take it out to double-check. It's definitely him!",
		danceSpeak: "'What's this? Ah, I was told"
	}

	$('#danceHall').click(function() {
		$('.danceHall').show();
		$('.lunedaCity').hide();
		if(Oshu.items.clothes == false) {
			console.log(danceText.doorman);
			$('.noDancing').show();
			$('.planetInteraction').writeText(danceText.doorman);
		}
		else {
			$('.danceDetails').show();
			$('.planetInteraction').writeText(danceText.danceIntro);
		}
	});












});

