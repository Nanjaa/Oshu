$(document).ready(function() {

	// brings up the common divs between all the city details
	$('.kanedosCity').click(function() {
		$('.kanedosCity').hide();
		$('.return').show();
		$('.planetInteraction').show();
	})

	// takes you back to the city map from any city details
	function kanedosReturn() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.kanedosCity').show();		
	}
	$('.return').click(function() {
		kanedosReturn();
		changeLocation('#kanedosMap');
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
			case 'kanedome': 
				changeLocation('.theKanedome');
				if(Oshu.items.ticket == false) {
					$('.theKanedome').show();
				}
				break;
			case 'suckerPunch':
				changeLocation('.suckerPunch');
				$('.suckerPunch').show();
				break;
			case 'camelRental':
				changeLocation('.camelRental');
				$('.camelRental').show();
				break;
			case 'kanedosJewelry':
				changeLocation('.kanedosJewelry');
				$('.kanedosJewelry').show();
				break;
		};
	});


	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						CAMEL 	 RENTAL 	 				   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|

	var camelText = {
		intro: "You walk into the camel rental building and an interesting smell fills your nostrils.",
		guyIntro: "Welcome to my humble agency! Interested in traversing the Kanedos countryside? A camel is the best way to go! 25 coins for an hour.",
		noCoins: "Sorry, but you don't have enough coins to rent one of these bad boys. Come back when you have 25.",
		yes: "Follow me to the back, I'll show you to your camel.",
		no: "The Kanedos countryside is really something to behold... I hope you come back soon!",
		options: "Do you want to rent a camel?"
	};

	$('#camelRental').click(function() {
		$('.planetInteraction').writeText(camelText.intro);
	});

	$('#camelGuy').click(function() {
		$('.planetInteraction').writeText(camelText.guyIntro);
		displayOptions(camelText.guyIntro, camelText.options, 25, camelText.yes, camelText.no, camelText.noCoins);
	});


	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						CAMEL 	 RENTAL 	 				   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|


	var jewelryText = {
		intro: "Inside the door is a jewelry shop. Soft music plays as the merchandise sparkles in the light",
		ladyIntro: "Welcome to my shop! My name is Elizabeth. If you want to buy something, point at it and I'll get it down for you.",
		advice1: "I read you can attract fairies with shiny objects. I wonder if jewelry would work?",
		advice2: "I heard Fuzzbutt Factory was still open, even though they don't produce toys anymore. I wonder why?",
		purchase: "A necklace, huh? Sounds good! That silver one you're looking at is 15 coins. Pretty cheap!",
		options: "Do you want to buy the necklace?",
		noCoins: "Sorry, but I don't bargain. It's 15 coins or nothing!",
		yes: "Wonderful choice, my dear. I hope you enjoy it!",
		no: "Are you sure? You'd look so stunning!",
		jewelryGoodbye: "I hope you like your necklace. I think it's absolutely gorgeous."
	}

	var jewelryStatus = 1;

	$('#kanedosJewelry').click(function() {
		jewelryStatus = 1;
		$('.planetInteraction').writeText(jewelryText.intro);
	});

	$('#kanedosJewelryLady').click(function() {
		switch(jewelryStatus) {
			case 1:
				$('.planetInteraction').writeText(jewelryText.ladyIntro);
				jewelryStatus = 2;
				break;
			case 2:
				$('.planetInteraction').writeText(jewelryText.advice1);
				jewelryStatus = 3;
				break;
			case 3: 
				$('.planetInteraction').writeText(jewelryText.advice2);
				jewelryStatus = 2;
				break;
		}
	});

	$('#kanedosJewelryDisplay').click(function() {
		if(Oshu.items.kanedosJewelry) {
			$('.planetInteraction').writeText(jewelryText.jewelryGoodbye);
		}
		else {
			$('.planetInteraction').writeText(jewelryText.purchase);
			displayOptions(jewelryText.purchase, jewelryText.options, 15, jewelryText.yes, jewelryText.no, jewelryText.noCoins);
			var buyJewelry = setInterval(function() {
				if($('.planetInteraction').text() == jewelryText.yes) {
					// adds item to inventory if not already there
					$('.inventoryList').append('<li class="inventoryItem"><span id="kanedosNecklace">Necklace from Kanedos</span></li>');
					Oshu.items.kanedosJewelry = true;

					// now you can select the clothes
					$('#kanedosNecklace').click(function() {
						inventoryDescription('#kanedosNecklace', 'Necklace from Kanedos', Oshu.description.kanedosJewelry);
					});
					clearInterval(buyJewelry);
				};
			}, 1);			
		}
	
	})







});

