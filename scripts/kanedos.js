
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
	changeLocation('#kanedosMap', true);
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
			// complete the kanedome event if you have the authorizaton
			if(Oshu.items.kanedomeTicket) {
				lifeEvent(4);
				completeItem(Oshu.quests[1][1][0], Oshu.questSpeech.kanedos1);	
				watched = true;	
				$('#skip').unbind('click');
				$('#skipButton').unbind('click');
				$('#skipButton').click(function() {
					$('.theKanedome').show();
					endSpeech();
					$('#interactionText').writeText(kanedomeText.end);
				});		
			}
			else {
				$('.theKanedome').show();
				$('#interactionText').writeText(kanedomeText.intro);				
			};
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
// |						THE KANEDOME	 	 				   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var watched = false;

var kanedomeText = {
	intro: "There is a large man in a ticket stand at the gate.",
	ticketIntro: "Would you like to buy a ticket for the fight tonight? Only 75 coins!",
	noCoins: "Sorry, but that's not enough money...",
	options: "Do you want to buy a ticket?",
	yes: "Fantastic. The fight's about to start!",
	no: "You're missing out on a great fight, you know!",
	end: "Wasn't that the greatest? Such a good fight!"
}

$('#ticketGuy').unbind('click');
$('#ticketGuy').click(function() {
	if(go) {
		maleVoice2();
		if(watched) {
			$('#interactionText').writeText(kanedomeText.end);
		}
		else {
			displayOptions(kanedomeText.ticketIntro, kanedomeText.options, 75, kanedomeText.yes, kanedomeText.no, kanedomeText.noCoins);
			var wait = setInterval(function() {
				if($('#interactionText').text() == kanedomeText.yes) {
					clearInterval(wait);
					var hold = setTimeout(function() {
						lifeEvent(4);
						completeItem(Oshu.quests[1][1][0], Oshu.questSpeech.kanedos1);	
						watched = true;	

						$('#skip').unbind('click');
						$('#skipButton').unbind('click');
						$('#skipButton').click(function() {
							$('.theKanedome').show();
							endSpeech();
							$('#interactionText').writeText(kanedomeText.end);
						});			
					}, 1500);			
				};
			}, 1);
		};
	};
});

// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						CAMEL 	 RENTAL 	 				   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var camelEnd = false;

var camelText = {
	intro: "You walk into the camel rental building and an interesting smell fills your nostrils.",
	guyIntro: "Welcome to my humble agency! Interested in traversing the Kanedos countryside? A camel is the best way to go! 25 coins for an hour.",
	noCoins: "Sorry, but you don't have enough coins to rent one of these bad boys. Come back when you have 25.",
	yes: "Follow me to the back, I'll show you to your camel.",
	no: "The Kanedos countryside is really something to behold... I hope you come back soon!",
	options: "Do you want to rent a camel?",
	end: "Did you enjoy the Crater Valley? Really something, isn't it?"
};

$('#camelGuy').unbind('click');
$('#camelGuy').click(function() {
	if(go) {
		maleVoice3();
		if(camelEnd) {
			$('#interactionText').writeText(camelText.end);
		}
		else {
			displayOptions(camelText.guyIntro, camelText.options, 25, camelText.yes, camelText.no, camelText.noCoins);
			var hold = setInterval(function() {
				if($('#interactionText').text() == camelText.yes) {
					clearInterval(hold);
					var wait = setTimeout(function() {
						lifeEvent(1);
						completeItem(Oshu.quests[1][1][2], Oshu.questSpeech.kanedos3);
						camelEnd = true;

						$('#skip').unbind('click');
						$('#skipButton').unbind('click');
						$('#skipButton').click(function() {
							endSpeech();
							$('#interactionText').writeText(camelText.end);
							$('.camelRental').show();
						});		
					}, 1500) 
				};
			}, 1); 				
		};
	};
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

$('#kanedosJewelryLady').unbind('click');
$('#kanedosJewelryLady').click(function() {
	if(go) {
		femVoice();
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
	};
});

$('.kanedosJewelryDisplay').unbind('click');
$('.kanedosJewelryDisplay').click(function() {
	if(go) {
		femVoice();
		if(Oshu.items.kanedosNecklace) {
			$('#interactionText').writeText(jewelryText.jewelryGoodbye);
		}
		else {
			displayOptions(jewelryText.purchase, jewelryText.options, 15, jewelryText.yes, jewelryText.no, jewelryText.noCoins);
			var buyJewelry = setInterval(function() {
				if($('#interactionText').text() == jewelryText.yes) {
					addItem('kanedosNecklace', 'Necklace from Kanedos', '#kanedosNecklace', Oshu.description.kanedosNecklace);
					Oshu.items.kanedosNecklace = true;
					Oshu.items.jewelry = true;
					clearInterval(buyJewelry);
				};
			}, 1);			
		}		
	};
});

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
	kanedome: "You're a cheapskate, huh? You know, I'm honestly not sure. That guy over there is a fan, why don't you ask him?",
	classes: "I'm not going to beat around the bush, real classes here are hard to get into if you're not a native. I know one of my customers studies at one of the dojos nearby.",
	apprenticeIntro: "I'm just taking a break in between classes. Fighting is thirsty work...",
	apprentice2: "And why should I help you?",
	apprenticeSympathy: "If you're sick, why would you want to strain your body in the dojo?",
	sympathyConvince: "An android, huh? Androids do always get everyone excited... Dunno what it is, but people like to fight the machine. Sure, let's go talk to the sensei now.",
	apprenticeThreaten: "I'm going to pretend that was a joke.",
	Threaten2: "Come back already? What are you going to do, threathen me again? Pitiful...",
	apologize: "You know what, sure. Androids do always get everyone excited... Dunno what it is, but people like to fight the machine. I'll show to you to the dojo and talk to the sensei. We're learning about forgiveness and mercy anyway, it'll fit.",
	threaten3: "Alright.",
	apprenticeEnd: "You did great in class! I'm really glad I was able to get you in."
}

$('#suckerBartender').unbind('click');
$('#suckerBartender').click(function() {
	if(go) {
		maleVoice3();
		twoOptions(barText.bartenderIntro, 'Can I get into the Kanedome without paying?', 'How do I get access to martial arts classes?');
		$('#optionOne').unbind('click');
		$('#optionOne').click(function() {
			$('.option').hide();
			$('#interactionText').writeText(barText.kanedome);
		});
		$('#optionTwo').unbind('click');
		$('#optionTwo').click(function() {
			$('.option').hide();
			$('#interactionText').writeText(barText.classes);
		});		
	};
})

// ************************ THE APPRENTICE ************************
apprenticeStatus = 'intro';

$('#apprentice').unbind('click');
$('#apprentice').click(function() {
	if(go) {
		maleVoice();
		if(apprenticeStatus == 'finished') {
			$('#interactionText').writeText(barText.apprenticeEnd);
		}
		else if(apprenticeStatus == 'threaten') {
			twoOptions(barText.Threaten2, "No, I want to apologize. I was just nervous.", "Nevermind.");

			$('#optionOne').unbind('click');
			$('#optionOne').click(function() {
				if(go) {
					$('.option').hide();
					$('#interactionText').writeText(barText.apologize);
					var wait = setTimeout(function() {
						lifeEvent(1);
						completeItem(Oshu.quests[1][1][1], Oshu.questSpeech.kanedos2);

						$('#skip').unbind('click');
						$('#skipButton').unbind('click');
						$('#skipButton').click(function() {
							$('.suckerPunch').show();
							endSpeech();
							$('#interactionText').writeText(barText.apprenticeEnd);
						});		
					}, 2000)
					apprenticeStatus = 'finished';					
				}
			});

			$('#optionTwo').unbind('click');
			$('#optionTwo').click(function() {
				if(go) {
					$('.option').hide();
					$('#interactionText').writeText(barText.threaten3);					
				}
			});
		}
		else {
			oneOption(barText.apprenticeIntro, "Can you help me get into a martial arts class?");

			$('#optionOne').unbind('click');
			$('#optionOne').click(function() {
				if(go) {
					$('.option').hide();
					if(apprenticeStatus == 'intro') {
						twoOptions(barText.apprentice2, "I'm dying, and it's on my bucket list.", "You don't want to find out what'll happen if you say no...");
						apprenticeStatus = 'why';
					}
					else if(apprenticeStatus == 'why') {
						oneOption(barText.apprenticeSympathy, "I'm not sick, I'm an android. I'm using the Lifecycle Program.");
						apprenticeStatus = 'android';
					}
					else if(apprenticeStatus == 'android') {
						endConversation(barText.sympathyConvince);
						var check = setInterval(function() {
							if($('#interactionText').text() == barText.sympathyConvince) {
								clearInterval(check);
								var wait = setTimeout(function() {
									lifeEvent(1);
									completeItem(Oshu.quests[1][1][1], Oshu.questSpeech.kanedos2);	

									$('#skip').unbind('click');
									$('#skipButton').unbind('click');
									$('#skipButton').click(function() {
										$('.suckerPunch').show();
										endSpeech();
										$('#interactionText').writeText(barText.apprenticeEnd);
									});							
								}, 2000);
							}
						}, 1)
						apprenticeStatus = 'finished';				
					};					
				};
			});

			$('#optionTwo').unbind('click');
			$('#optionTwo').click(function() {
				if(go) {
					$('.option').hide();
					if(apprenticeStatus == 'why') {
						endConversation(barText.apprenticeThreaten);
						apprenticeStatus = 'threaten';					
					}					
				};
			});			
		};		
	};
});

// ************************ THE BRAWLER ************************
var brawlerText = {
	intro: "Man, I love seeing the fights at the Kanedome. It's the greatest!",
	kanedome: "Are you serious? And how would I go about doing that?",
	ticket: "Well... I do, actually... But why should I give them to you?",
	sellTicket: "Fine. 100 coins.",
	ticketSold: "You sucker! They aren't even sold out at the box office yet! And they sell them there for 75! Thanks for the easy money!",
	needMore: "Oh man, are you serious? You're trying to trick me? Go get some more money.",
	ticketReturn: "NO REFUNDS!",
	worker: "Yeah, I do. But how is that going to help you? You think I can get you in?",
	smuggleRejected: "No way, I could lose my job. Now, leave me alone.",
	smuggleReturn: "I said leave me alone, punk!",
	smuggleFee: "I won't lie, I'll take it. 50 coins and I'll sneak you in.",
	smuggleDeal: "Alright. Meet me behind the Kanedome... I'll show you in.",
	smuggleNoDeal: "Haha, what are you, scared? Chicken! Bawk-bawk-bawk-bawk!",
	smuggleNeedMore: "Hey, man, that's not 50!",
	smuggleEnd: "Meet me behind the Kanedome. I'll show you in.", 
	wrestle: "As much fun as humiliating you would be, I don't have time for that. Go away, you're being annoying.",
	wrestleEnd: "I said leave me alone, dude!",
	jobs: "Honestly, there's nothing I need done that you could do.",
	die: "Yeah? and how many millions of other people from all the other planets in this galaxy are in the same situation? You're not special, you're a brat. Leave me alone.",
	dieEnd: "Don't try my patience, or you'll die earlier than you were expecting..."
}
var brawlerStatus = 'intro';

$('#brawler').unbind('click');
$('#brawler').click(function() {
	if(go) {
		maleVoice2();
		if(brawlerStatus == 'intro') {
			oneOption(brawlerText.intro, 'Can you get me into the Kanedome?');

			$('#optionOne').unbind('click');
			$('#optionOne').click(function() {
				$('.option').hide();
				switch(brawlerStatus) {
					case 'intro':
						threeOptions(brawlerText.kanedome, "Do you have any extra tickets?", "Do you know anyone that works there?", "I'll arm wrestle you!");
						brawlerStatus = 'how';
					break;
					case 'how':
						threeOptions(brawlerText.ticket, "I'll buy them from you.", "Do you need any odd jobs done?", "I may die and never see the Kanedome...");
						brawlerStatus = 'why';
					break;
					case 'why':
						twoOptions(brawlerText.sellTicket, "Deal!", "No way!");
						brawlerStatus = 'sell';
					break;
					case 'sell':
						if(Oshu.coins >= 100) {
							endConversation(brawlerText.ticketSold);
							payMoney(100);
							addItem('kanedomeTicket', 'Kanedome Ticket', '#kanedomeTicket', Oshu.description.kanedomeTicket);
							Oshu.items.kanedomeTicket = true;
							brawlerStatus = 'sold';
						}
						else {
							endConversation(brawlerText.needMore);
							brawlerStatus = 'intro';
						}
					break;
					case 'worker':
						endConversation(brawlerText.smuggleRejected);
						brawlerStatus = 'noSmuggle';
					break;
					case 'smuggle':
						if(Oshu.coins >= 50) {
							endConversation(brawlerText.smuggleDeal);
							payMoney(50);
							brawlerStatus = 'smuggleEnd';
							Oshu.items.kanedomeTicket = true;
						}
						else {
							endConversation(brawlerText.smuggleNeedMore);
							brawlerStatus = 'intro';
						}
					break;
				};
			});	

			$('#optionTwo').unbind('click');
			$('#optionTwo').click(function() {
				$('.option').hide();
				switch(brawlerStatus) {
					case 'how':
						twoOptions(brawlerText.worker, "Can't you sneak me in?", "Can I bribe you to sneak me in?");
						brawlerStatus = 'worker';
					break;
					case 'worker':
						twoOptions(brawlerText.smuggleFee, "You've got a deal", "No, thanks");
						brawlerStatus = 'smuggle';
					break;
					case 'smuggle':
						endConversation(brawlerText.smuggleNoDeal);
						brawlerStatus = 'intro';
					break;
					case 'why':
						endConversation(brawlerText.jobs);
						brawlerStatus = 'intro';
					break;

				};
			});

			$('#optionThree').unbind('click');
			$('#optionThree').click(function() {
				if(go) {
					$('.option').hide();
					if(brawlerStatus == 'how') {
						endConversation(brawlerText.wrestle);
						brawlerStatus = 'wrestleEnd';
					}
					else if(brawlerStatus == 'why') {
						endConversation(brawlerText.die);
						brawlerStatus = 'dieEnd';
					}					
				}
			})
		}
		else if(brawlerStatus == 'sold') {
			$('#interactionText').writeText(brawlerText.ticketReturn);
		}
		else if(brawlerStatus == 'noSmuggle') {
			$('#interactionText').writeText(brawlerText.smuggleReturn);
		}
		else if(brawlerStatus == 'smuggleEnd') {
			$('#interactionText').writeText(brawlerText.smuggleEnd);
		}
		else if(brawlerStatus == 'wrestleEnd') {
			$('#interactionText').writeText(brawlerText.wrestleEnd);
		}
		else if(brawlerStatus == 'dieEnd') {
			$('#interactionText').writeText(brawlerText.dieEnd);
		}		
	};
});