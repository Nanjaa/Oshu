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

});

