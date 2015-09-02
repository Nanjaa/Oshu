$(document).ready(function() {

	// brings up the common divs between all the city details
	$('.kaprikaCity').click(function() {
		$('.kaprikaCity').hide();
		$('.return').show();
		$('#interactionText').show();
	})

	// takes you back to the city map from any city details
	function kaprikaReturn() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.kaprikaCity').show();	
	}
	$('.return').click(function() {
		kaprikaReturn();
		changeLocation('#kaprikaMap');
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
			case 'quietGrove':
				changeLocation('.quietGrove');
				$('.quietGrove').show();
				if(Oshu.items.jewelry == false) {
					$('#fairies').hide();
				}
				break;
			case 'theTree':
				changeLocation('.kaprikaTree');
				$('.kaprikaTree').show();
				break;
			case 'mysteriousShop':
				changeLocation('.mysteriousShop');
				$('.mysteriousShop').show();
				break;
		};
	});



});