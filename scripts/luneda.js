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
			$('.visitPlanet').hide();
			$('.miloInteraction').show();
			$('#miloSays').writeText('');
			$('#miloSays').writeText('Oshu reflects upon this moment');
			completeItem('Swim the electric seas of Luneda')
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
		souvenirWelcome: "A kitchy souvenir shop stands before you. You see cheap novelties such as bobbleheads and snowglobes, as well as postcards of all kinds."
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
				if(Oshu.items.electange == 0) {
					$('.inventoryList').append('<li class="inventoryItem" id="myElectange">Electange: <span class="electangeAmt"></span></li>');				
				
					// hovering over the amount will make it bold, encouraging you to eat it. If you just click the word "electange" it'll show a desc.
					$('.electangeAmt').hover(function() {
						console.log('hello');
					})
				}
				// then adds quantity amt
				var electange = Oshu.items.electange + 1;
				Oshu.items.electange = electange;
				$('.electangeAmt').text(electange);

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
				if(Oshu.items.ganifruit == 0) {
					$('.inventoryList').append('<li class="inventoryItem"><span id="myGanifruit">Ganifruit: <span class="ganifruitAmt"></span></span><span id="ganiDesc"></span></li>');
		
					// now you can click the ganiFruit
					$('#myGanifruit').click(function() {
						complexDescription("#myGanifruit", "#ganiDesc", Oshu.description.ganifruit);
					});
				}
				// then adds quantity amt
				var ganifruit = Oshu.items.ganifruit + 1;
				console.log(ganifruit);
				Oshu.items.ganifruit = ganifruit;
				$('.ganifruitAmt').text(ganifruit);
				
				clearInterval(boughtGanifruit);
			};
		}, 1);
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

