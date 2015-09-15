
// brings up the common divs between all the city details
$('.aliNadaCity').click(function() {
	$('.aliNadaCity').hide();
	$('.return').show();
	$('#planetInteraction').show();
})

// takes you back to the city map from any city details
function aliNadaReturn() {
	$('.return').hide();
	$('.cityDetails').hide();
	$('.aliNadaCity').show();	
}
$('.return').click(function() {
	aliNadaReturn();
	changeLocation('#aliNadaMap', true);
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
		case 'capitol':
			if(Oshu.items.weatherSpecimen) {
				console.log('capitol specimen');
				$('#interactionText').writeText(weatherText.weather);
				changeLocation('.capitol');
				$('.capitol').show();
			}
			else {
				$('#interactionText').writeText(weatherText.noAccess);
				changeLocation('.capitolGuard');
				$('.capitolGuard').show();
			}
			break;
		case 'stainedGlass':
			if(Oshu.items.weatherSpecimen) {
				$('#interactionText').writeText(weatherText.weather);
				changeLocation('.capitol');
				$('.capitol').show();
			}
			else {
				$('#interactionText').writeText(weatherText.noAccess);
				changeLocation('.capitolGuard');
				$('.capitolGuard').show();
			}
			break;
		case 'cemetery':
			$('#interactionText').writeText(graveText.intro);
			changeLocation('.cemetery');
			$('.cemetery').show();
			break;
		case 'tombstones':
			$('#interactionText').writeText(graveText.intro);
			changeLocation('.cemetery');
			$('.cemetery').show();
			break;
		case 'aliNadaMechanic':
			$('#interactionText').writeText(shutoffText.intro);
			changeLocation('.aliNadaMechanic');
			$('.aliNadaMechanic').show();
			break;
	};
});


// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						CAPITOL 	 						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var weatherText = {
	noAccess: "Only people that have business with the capitol are allowed in.",
	weather: "You are led to the Galactic Weather Department's main office. The room looks very similar to the monitoring room on Luneda.",
	intro: "Oh, did you bring the specimen from Luneda? Thanks! They told us you'd be on the way. Here, have some coins. Thanks for your help.",
	computers: "The computers are displaying programs that look incredibly confusing.",
	goodbye: "Thanks for your help, but if you were supposed to get something from the guys on Luneda, you'll have to bring it up with them.",
	advice1: "Advice2",
	advice2: "Advice2 for real",
	advice3: "advice 3"
};

var weatherStatus = 'intro';
$('#capitolWeatherman').unbind('click');
$('#capitolWeatherman').click(function() {
	if(go) {
		femVoice3();
		if(weatherStatus == 'intro') {
			$('#interactionText').writeText(weatherText.intro);
			weatherStatus = 1;
		}
		else if(weatherStatus == 1) {
			$('#interactionText').writeText(weatherText.goodbye);
			weatherStatus = 2;
		}
		else if(weatherStatus == 2) {
			$('#interactionText').writeText(weatherText.advice1);
			weatherStatus = 3;
		}
		else if(weatherStatus == 3) {
			$('#interactionText').writeText(weatherText.advice2);
			weatherStatus = 4;
		}
		else if(weatherStatus == 4) {
			$('#interactionText').writeText(weatherText.advice3);
			weatherStatus = 1;
		};		
	}

});

// ________________________________________________________________
// | ==============================================================|
// |															   |
// |						THE GRAVE 	 						   |
// |															   |
// |===============================================================|
// |_______________________________________________________________|

var graveText = {
	intro: "You walk into the cemetery and find your brother's grave.",
	end: "You'll always miss your brother, but you know he'd be proud of you if he were here today."
}

var graveStatus = true;

$('#brothersGrave').unbind('click');
$('#brothersGrave').click(function() {
	if(go) {
		if(graveStatus) {
			graveStatus = false;
			completeItem(Oshu.quests[4][1], Oshu.questSpeech.aliNada);
			$('#skip').show();
			$('#skipButton').unbind('click');
			$('#skipButton').click(function() {
				endSpeech();
				$('.cemetery').show();
				$('#interactionText').writeText(graveText.end);
			});			
		}
		else {
			$('#interactionText').writeText(graveText.end);
		};
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

$('#aliNadaLifecycleShutoff').unbind('click');
$('#aliNadaLifecycleShutoff').click(function() {
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
				$('#aliNadaMechanicMenu').fadeOut(1000);
				$('#aliNadaMechanicMenu').fadeIn(1000);
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
$('#aliNadaGeneralRobot').unbind('click');
$('#aliNadaGeneralRobot').click(function() {
	if(go) {
		if(Oshu.items.brokenRobot) {
			displayOptions(generalText.introRobot, generalText.robotOptions, 20, generalText.yesRobot, generalText.no, generalText.noCoins);
			robotWait(generalText.yesRobot, generalText.yesRobotEnd);
			var wait8 = setInterval(function() {
				if(replace) {
					clearInterval(wait8);
					$('#brokenRobot').remove();
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
$('aliNadaLifecycleAdd').unbind('click');
$('#aliNadaLifecycleAdd').click(function() {
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
