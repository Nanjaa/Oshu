$(document).ready(function() {

	// anytime you click the spaceship, you return to the maps page
	$('#returnToShip').click(function() {
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
			error.play();
		}
		else {
			lifeEvent(minutesLost);
			myLocation.current = $(this).attr('distance');
			Oshu.onBoard = false;
		};
	});

	$('.planet').click(function() {
		for (var i = 0; i < planets.length; i++) {
			// console.log(planets.i.color)
			console.log('hello');
		};
	});


});