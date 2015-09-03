$(document).ready(function() {

	// brings up the common divs between all the city details
	$('.kanedosCity').click(function() {
		$('.kanedosCity').hide();
		$('.return').show();
		$('#planetInteraction').show();
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
				$('#interactionText').writeText(barText.intro);
				break;
			case 'camelRental':
				changeLocation('.camelRental');
				$('.camelRental').show();
				$('#interactionText').writeText(camelText.intro);
				break;
			case 'kanedosJewelry':
				changeLocation('.kanedosJewelry');
				$('.kanedosJewelry').show();
				$('#interactionText').writeText(jewelryText.intro);
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

	$('#camelGuy').click(function() {
		$('#interactionText').writeText(camelText.guyIntro);
		displayOptions(camelText.guyIntro, camelText.options, 25, camelText.yes, camelText.no, camelText.noCoins);
	});


	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						JEWELRY STORE	 	 				   |
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
	});

	$('#kanedosJewelryLady').click(function() {
		switch(jewelryStatus) {
			case 1:
				$('#interactionText').writeText(jewelryText.ladyIntro);
				jewelryStatus = 2;
				break;
			case 2:
				$('#interactionText').writeText(jewelryText.advice1);
				jewelryStatus = 3;
				break;
			case 3: 
				$('#interactionText').writeText(jewelryText.advice2);
				jewelryStatus = 2;
				break;
		}
	});

	$('#kanedosJewelryDisplay').click(function() {
		if(Oshu.items.kanedosJewelry) {
			$('#interactionText').writeText(jewelryText.jewelryGoodbye);
		}
		else {
			$('#interactionText').writeText(jewelryText.purchase);
			displayOptions(jewelryText.purchase, jewelryText.options, 15, jewelryText.yes, jewelryText.no, jewelryText.noCoins);
			var buyJewelry = setInterval(function() {
				if($('#planetInteraction').text() == jewelryText.yes) {
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

	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						SUCKER PUNCH 	 	 				   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|

	var barText = {
		intro: "You walk into a bar called Sucker Punch. There's a rough-looking crowd inside. You walk up to the bar.",
		bartenderIntro: "Welcome to Sucker Punch! What can I get you today?",
		kanedome: "You're a cheapskate, huh? Well, I've heard talking to current or retired fighters works well. That guy over there is a fan, why don't you ask him?",
		classes: "I'm not going to beat around the bush, real classes here are hard to get into if you're not a native. There are lots of tourist classes you can take, though. I know one of my customers studies at one of the dojos nearby.",
		apprenticeIntro: "I'm just taking a break in between classes. Fighting is thirsty work...",
		apprentice2: "And why should I help you?",
		apprenticeSympathy: "If you're sick, why would you want to strain your body in the dojo?",
		sympathyConvince: "An android, huh? Androids always draw a crowd... I don't know what it is about robots, but people love having them in class with them. Sure, let's go talk to the sensei now.",
		apprenticeThreaten: "I'm going to pretend that was a joke.",
		Threaten2: "Come back already? What are you going to do, threathen me again? Pitiful...",
		Threaten3: "You know what, sure. I'll show to you to the dojo and talk to the sensei. We're learning about forgiveness and mercy anyway, it'll fit.",
		threaten4: "Alright.",
		apprenticeEnd: "You did great in class! I'm really glad I was able to get you in.",
		brawlerIntro: "Man, I love seeing the fights at the Kanedome. It's the greatest!",

	}

	$('#suckerBartender').click(function() {
		$('#interactionText').writeText(barText.bartenderIntro);
		var bar1 = setInterval(function() {
			if($('#planetInteraction').text() == barText.bartenderIntro) {
				clearInterval(bar1);
				// $('#planetInteraction').text('');
				$('#planetInteraction').append("<ul><li class='clickHere' id='kanedomeQuestion'>Can I get into the Kanedome without paying?</li><li class='clickHere' id='classesQuestion'>How do I get access to martial arts classes?</li></ul>");
				$('#kanedomeQuestion').click(function() {
					$('#interactionText').writeText(barText.kanedome);
				});
				$('#classesQuestion').click(function() {
					$('#interactionText').writeText(barText.classes);
				});
			} 
		}, 1)
	})

	// ************************ THE APPRENTICE ************************
	apprenticeStatus = 'intro';
	
	$('#apprentice').click(function() {
		if(apprenticeStatus == 'finished') {
			$('#interactionText').writeText(barText.apprenticeEnd);
		}
		else if(apprenticeStatus == 'threaten') {
			twoOptions(barText.Threaten2, "No, I want to apologize. I was just nervous.", "Nevermind.");
			$('#optionOne').click(function() {
				$('#interactionText').writeText(barText.Threaten3);
				apprenticeStatus = 'finished';
			});
			$('#optionTwo').click(function() {
				$('#interactionText').writeText(barText.threaten4);
			});
		}
		else {
			oneOption(barText.apprenticeIntro, "Can you help me get into a martial arts class?");
			$('#optionOne').click(function() {
				if(apprenticeStatus == 'intro') {
					twoOptions(barText.apprentice2, "I'm dying, and it's on my bucket list.", "You don't want to find out what'll happen if you say no...");
					apprenticeStatus = 'why';
				}
				else if(apprenticeStatus == 'why') {
					oneOption(barText.apprenticeSympathy, "I'm not sick, I'm an android. I'm using the Lifecycle Program.");
					apprenticeStatus = 'android';
				}
				else if(apprenticeStatus == 'android') {
					$('.option').hide();
					$('#interactionText').writeText(barText.sympathyConvince);
					apprenticeStatus = 'finished';				
				};
			});
			$('#optionTwo').click(function() {
				if(apprenticeStatus == 'why') {
					$('.option').hide();
					$('#interactionText').writeText(barText.apprenticeThreaten);
					apprenticeStatus = 'threaten';					
				}

			});			
		};
	});




});

