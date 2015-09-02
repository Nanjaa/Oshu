$(document).ready(function() {

	// brings up the common divs between all the city details
	$('.tyrianneCity').click(function() {
		$('.tyrianneCity').hide();
		$('.return').show();
		$('#interactionText').show();
	})

	// takes you back to the city map from any city details
	function tyrianneReturn() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.tyrianneCity').show();	
	}
	$('.return').click(function() {
		tyrianneReturn();
		changeLocation('#tyrianneMap');
	});

	// ________________________________________________________________
	// | ==============================================================|
	// |															   |
	// |						LOCATIONS 	 						   |
	// |															   |
	// |===============================================================|
	// |_______________________________________________________________|

	var fuzzbuttEntry = false;

	$('pre').click(function() {
		var location = $(this).attr('id');
		switch(location) {
			case 'library': 
				changeLocation('.library');
				$('.library').show();
				break;
			case 'fuzzbuttFactory':
				changeLocation('.fuzzbutt');
				$('.fuzzbutt').show();
				if(fuzzbuttEntry == false) {
					$('.fuzzbuttDetails').hide();
					$('#fuzzbuttDoorman').show();
				}
				else {
					$('.fuzzbuttDetails').show();
					$('#fuzzbuttDoorman').hide();
				}
				break;
			case 'tyrianneMechanic':
				changeLocation('.tyrianneMechanic');
				$('.tyrianneMechanic').show();
				break;
			case 'poorMan':
				changeLocation('.poorMan');
				$('.poorMan').show();
				break;
			case 'tyrianneJewelry':
				changeLocation('.tyrianneJewelry');
				$('.tyrianneJewelry').show();
				break;
		};
	});



});