$(document).ready(function() {

	// brings you to the planet from the system map
	$('#Kaprika').click(function() {
		$('#map').hide();
		$('#kaprikaMap').show();
		if(planets.Kaprika.first == true) {
			play('speech/kaprikaIntro.mp3');
			planets.Kaprika.first = false;
		};
	});




});