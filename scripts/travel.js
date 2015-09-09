$(document).ready(function() {

	// anytime you click the spaceship, you return to the maps page
	$('#myShip').click(function() {
		$('.return').hide();
		$('.cityDetails').hide();
		// $('.tyrianneCity').show();	
		$('.visitPlanet').hide();
		$('#map').show();
		Oshu.onBoard = true;
	});

	// display the name of the planet while hovering, hide otherwise
	$('.planet').mouseover(function() {
		var minutesLost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
		$('#planetName').text($(this).attr('id'));
	});

	$('.planet').mouseout(function() {
		$('#planetName').text('');
	});


	// lose time as you travel to another planet
	$('.planet').click(function() {
		var minutesLost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
		if(($('#minutes').text() - minutesLost) <= 0) {
			play('soundEffects/error.wav')
		}
		else {
			lifeEvent(minutesLost);
			myLocation.current = $(this).attr('distance');
			Oshu.onBoard = false;
			if($(this).attr('first') == 'false') {
				$('#map').hide();
				var destination = $(this).attr('id');				
				switch(destination) {
					case 'Luneda':
						showContent('luneda.html #lunedaContent', 'scripts/luneda.js');
						break;
					case 'Kanedos':
						showContent('kanedos.html #kanedosContent', 'scripts/kanedos.js');
						break;
					case 'Tyrianne':
						showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
						break;
					case 'Kaprika':
						showContent('kaprika.html #kaprikaContent', 'scripts/kaprika.js');
						break;
					case 'AliNada':
						showContent('aliNada.html #aliNadaContent', 'scripts/aliNada.js');
						break;
				}
			};
		};
	});


});	