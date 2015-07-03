$(document).ready(function() {
	// all the text that will be used throughout this level
	var beachText = {
		inUse: false,
		welcome: "You have arrived on the beaches of the Electric Sea. There is a buzzing sound that mixes gently with the sound of the waves crashing.",
		rentalWelcome: "Hello there young lady! I have everything you'll need to swim in the seas without getting yourself killed. What do you say? 50 coins covers it all!",
		rentalNoCoins: "That's not enough money! 50 coins or no deal. I don't bargain.",
		rentalComplete: "Fantastic! Here's your ElectroSuit. And because you seem like a nice gal, here's a camera for you to take pictures underwater with. You have an hour to swim, then I'll need the equipment back. Have a great day!",
		rentalOptions: "Do you want to rent an ElectroSuit?",
		rentalInUse: "Go have fun with your equipment! But remember to bring it back...",
		rentalNo: "That's alright! Don't try to swim, though. Unless, of course, you want to be fish food!",
		drinksWelcome: "You've come to the right place, my friend! I have the coldest drinks on this most sunny of days!",
		drinksGoodbye: "Come back anytime, my friend. Stay safe!",
		seaLife: "You step into the sea, and submerge yourself. There are fish everywhere. You try to take as many pictures as you can before you have to return the suit!",
		seaDeath: "You step into the sea without protection. The electricity swallows you up, and you feel yourself losing control. Slowly, everything fades..."	
	};


	// $(this).click(function() {
	// 	$('.lunedaInteract').text('');
	// 	console.log('happy!');
	// });

	// resets the .lunedaInteract box



	// brings you to the planet from the system map
	$('#Luneda').click(function() {
		$('#map').hide();
		$('#lunedaMap').show();
		if(planets.Luneda.first == true) {
			luneda.play();
			planets.Luneda.first = false;
		};
	});

	// brings up the common divs between all the city details
	$('.lunedaCity').click(function() {
		$('.lunedaCity').hide();
		$('.return').show();
		$('.lunedaInteract').show();
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
		$('.lunedaInteract').writeText(beachText.welcome);
	});

	//************************ interact with the equipment shack ************************
	$('#equipment').click(function() {
		rentalActivate();
	});

	function rentalActivate() {
		if(beachText.inUse == true) {
			$('.lunedaInteract').writeText(beachText.rentalInUse);
		}
		else {
			// plays the sound effect of the man talking
			if($('.lunedaInteract').text().length < beachText.rentalWelcome.length) {
				maleVoice.play();
			}
			var text1 = beachText.rentalWelcome;
			$('.lunedaInteract').writeText(text1);
			var text2 = beachText.rentalOptions;
			var price = 50;
			var yes = beachText.rentalComplete;
			var no = beachText.rentalNo;
			var needMore = beachText.rentalNoCoins;
			displayOptions(text1, text2, price, yes, no, needMore);
			var stop = false;
			var boughtSuit = setInterval(function() {
				if($('.lunedaInteract').text() == yes && stop == false) {
				// adds item to inventory if not already there
					$('#inventory').append('<div class="inventory"><p>ElectroSuit</p>');
					Oshu.items.electroSuit = true;
					stop = true;
				}
			}, 1)
		};
	};
// $('.lunedaInteract').writeText(beachText.rentalComplete);

	//************************ interact with the drinks stand ************************



	//************************ interact with the sea ************************

	$('#closerSeas').click(function() {
		$('#beach').hide();
		if(Oshu.items.electroSuit) {
			$('.lunedaInteract').writeText(beachText.seaLife);
		}
		else {
			$('.lunedaInteract').writeText(beachText.seaDeath);
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
		needMore: "Sorry little lady! You don't have enough coins to buy this fruit! Come back another time."
	};

	$('.markets').click(function() {
		$('.lunedaCity').hide();
		$('.marketStands').hide();
		$('.theMarkets').show();
		$('.marketDetails').show();
		$('.lunedaInteract').writeText(marketText.marketWelcome);
	});

	$('#fruitStand').click(function() {
		$('.marketDetails').hide();
		$('.fruitStand').show();
		$('.lunedaInteract').writeText(marketText.fruitWelcome);
		maleVoice.play();
	});

	var yes = marketText.yes;
	var no = marketText.no;

	$('#electange').click(function() {
		$('.lunedaInteract').writeText(marketText.electange);
		text1 = marketText.electange;
		text2 = marketText.electangeOptions;
		var price = 25;
		var needMore = marketText.needMore;
		displayOptions(text1, text2, price, yes, no, needMore);
		var stop = false;
		var boughtElectange = setInterval(function() {
			if($('.lunedaInteract').text() == yes && stop == false) {
				// adds item to inventory if not already there
				if(Oshu.items.electange == 0) {
					$('#inventory').append('<div class="inventory"><p>Electange: <span class="electangeAmt"></span></p>');
				}
				// then adds quantity amt
				var electange = Oshu.items.electange + 1;
				Oshu.items.electange = electange;
				$('.electangeAmt').text(electange);
				stop = true;
			};
		}, 1);		
	});



	$('#ganifruit').click(function() {
		$('.lunedaInteract').writeText(marketText.ganifruit);
		var text1 = marketText.ganifruit;
		var text2 = marketText.ganifruitOptions;
		var price = 10;
		var needMore = marketText.needMore;
		displayOptions(text1, text2, price, yes, no, needMore);
		var stop = false;
		var boughtGanifruit = setInterval(function() {
			if($('.lunedaInteract').text() == yes && stop == false) {
				// adds item to inventory if not already there
				if(Oshu.items.ganifruit == 0) {
					$('#inventory').append('<div class="inventory"><p>Ganifruit: <span class="ganifruitAmt"></span></p>');
				}
				// then adds quantity amt
				var ganifruit = Oshu.items.ganifruit + 1;
				console.log(ganifruit);
				Oshu.items.ganifruit = ganifruit;
				$('.ganifruitAmt').text(ganifruit);
				stop = true;
			};
		}, 1);
	});



















});

