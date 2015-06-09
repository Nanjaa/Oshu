$(document).ready(function() {

	var beachText = {
		inUse: false,
		welcome: "You have arrived on the beaches of the Electric Sea. There is a buzzing sound that mixes gently with the sound of the waves crashing.",
		rentalWelcome: "Hello there young lady! I have everything you'll need to swim in the seas without getting yourself killed. What do you say? 50 coins covers it all!",
		rentalNoCoins: "That's not enough money! 50 coins or no deal. I don't bargain.",
		rentalComplete: "Fantastic! Here's your ElectroSuit. And because you seem like a nice gal, here's a camera for you to take pictures underwater with. You have an hour to swim, then I'll need the equipment back. Have a great day!",
		rentalOptions: "Do you want to rent an ElectroSuit?",
		rentalInUse: "Go have fun with your equipment! But remember to bring it back...",
		seaLife: "You step into the sea, and submerge yourself. There are fish everywhere. You try to take as many pictures as you can before you have to return the suit!",
		seaDeath: "You step into the sea without protection. The electricity swallows you up, and you feel yourself losing control. Slowly, everything fades"	
	};

	function resetText() {
		$('#lunedaInteract').writeText('');
	};

	$('#Luneda').click(function() {
		$('#map').hide();
		$('#lunedaMap').show();
		if(planets.Luneda.first == true) {
			luneda.play();
			planets.Luneda.first = false;
		};
	});

	$('.lunedaCity').click(function() {
		resetText();
		$('.lunedaCity').hide();
		$('.return').show();
		$('.lunedaInteract').show();
	});
	function lunedaReturn() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.lunedaCity').show();		
	}
	$('.return').click(function() {
		lunedaReturn();
	});
	$('.visitSea').click(function() {
		$('#beach').show();
		$('.lunedaInteract').writeText(beachText.welcome);
	});

	$('#equipment').click(function() {
		rentalActivate();
	});

	function rentalActivate() {
		if(beachText.inUse == true) {
			$('.lunedaInteract').writeText(beachText.rentalInUse);
		}
		else {
			$('.lunedaInteract').writeText(beachText.rentalWelcome)
			// checks when to ask for response
			var rentalOptions = setInterval(function() {
				if($('.lunedaInteract').text() == beachText.rentalWelcome) {
					clearInterval(rentalOptions);
					setTimeout($('.lunedaInteract').writeText(beachText.rentalOptions), 10000);
				};
			}, 1000);
			// checks when to display yes/no
			var displayRentalOptions = setInterval(function() {
				if($('.lunedaInteract').text() == beachText.rentalOptions) {
					clearInterval(displayRentalOptions);
					function yesNo() {
						$('.lunedaInteract').append('<ul><li class="options" id="yesRental">Yes</li><li class="options" id="noRental">No</li></ul>')
					};
					setTimeout(yesNo(), 1000);

					$('.options').click(function() {
						var coins = Oshu.coins;
						if(coins >= 50) {
							beachText.inUse = true;
							coins = coins - 50;
							Oshu.coins = coins;
							$('#coinsAmt').text(coins);
							$('.lunedaInteract').writeText(beachText.rentalComplete);
						}
						else {
							$('.lunedaInteract').writeText(beachText.rentalNoCoins);
						}
					});
				};
			}, 1000);				
		};
	};

	function clickYes() {

	};

	// $('#myShip').click(function() {
	// 	console.log('wtf');
	// })

	(function($) {
		$.fn.writeText = function(content) {
			$('.lunedaInteract').text('');
			var contentArray = content.split(""),
				current = 0,
				elem = this;
				setInterval(function() {
					if(current < contentArray.length) {
						elem.text(elem.text() + contentArray[current++]);
					}
				}, 30);
		};
	}) (jQuery);





});