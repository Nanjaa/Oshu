
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
				$('#aliNadaMap').show();
				console.log('capitol nospec');
				$('#interactionText').writeText(weatherText.noAccess);
			}
			break;
		case 'stainedGlass':
			if(Oshu.items.weatherSpecimen) {
				console.log('glass spec');
				$('#interactionText').writeText(weatherText.weather);
				changeLocation('.capitol');
				$('.capitol').show();
			}
			else {
				$('.aliNadaCity').show();
				console.log('glass no spec');
				$('#interactionText').writeText(weatherText.noAccess);
			}
			break;
		case 'cemetery':
			changeLocation('.cemetery');
			$('.cemetery').show();
			break;
		case 'tombstones':
			changeLocation('.cemetery');
			$('.cemetery').show();
			break;
		case 'aliNadaMechanic':
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
	goodbye: "Thanks for your help! Let us know if there's anything about AliNada that you want to know!",
	advice1: "Advice2",
	advice2: "Advice2 for real",
	advice3: "advice 3"
};

var weatherStatus = 'intro';

$('#capitolWeatherman').click(function() {
	if(go) {
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