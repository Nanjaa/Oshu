$(document).ready(function() {

	// brings you to the planet from the system map
	$('#Kanedos').click(function() {
		$('#map').hide();
		$('#kanedosMap').show();
		if(planets.Kanedos.first == true) {
			play('speech/kanedosIntro.mp3');
			planets.Kanedos.first = false;
		};
	});




});

