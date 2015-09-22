$(document).ready(function() {

	// anytime you click the spaceship, you return to the maps page


	// display the name of the planet while hovering, hide otherwise
	$('.planet').mouseover(function() {
		var minutesLost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
		$('#planetName').text($(this).attr('id'));
	});

	$('.planet').mouseout(function() {
		$('#planetName').text('');
	});

});	