$(document).ready(function() {

	// brings up the common divs between all the city details
	$('.aliNadaCity').click(function() {
		$('.aliNadaCity').hide();
		$('.return').show();
		$('.planetInteraction').show();
	})

	// takes you back to the city map from any city details
	function aliNadaReturn() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.aliNadaCity').show();	
	}
	$('.return').click(function() {
		aliNadaReturn();
		changeLocation('#aliNadaMap');
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
				changeLocation('.capitol');
				$('.capitol').show();
				break;
			case 'stainedGlass':
				changeLocation('.capitol');
				$('.capitol').show();
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



});