$(document).ready(function() {

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


	function testOne() {
		console.log('hellotest');
		$('.lunedaInteract').writeText(beachText.rentalWelcome)
		return true;
	};

	function testTwo() {
		console.log('finished yo');
	};

	$('#equipment').click(function() {
		$.when(testOne).then(testTwo);
	});

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

	var beachText = {
		welcome: "You have arrived on the beaches of the Electric Sea. There is a buzzing sound that mixes gently with the sound of the waves crashing.",
		rentalWelcome: "Hello there young lady! I have everything you'll need to swim in the seas without getting yourself killed. What do you say? 50 coins covers it all!",
		rentalNoCoins: "That's not enough money! 50 coins or no deal. I don't bargain.",
		rentalComplete: "Fantastic! Here's your ElectroSuit. And because you seem like a nice gal, here's a camera for you to take pictures underwater with. You have an hour to swim, then I'll need the equipment back. Have a great day!",
		rentalOptions: "Do you want to rent an ElectroSuit?",
		seaLife: "You step into the sea, and submerge yourself. There are fish everywhere. You try to take as many pictures as you can before you have to return the suit!",
		seaDeath: "You step into the sea without protection. The electricity swallows you up, and you feel yourself losing control. Slowly, everything fades"	
	};





});