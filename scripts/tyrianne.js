$(document).ready(function() {

	// brings you to the planet from the system map
	$('#Tyrianne').click(function() {
		$('#map').hide();
		$('#tyrianneMap').show();
		if(planets.Tyrianne.first == true) {
			play('speech/tyrianneIntro.mp3');
			planets.Tyrianne.first = false;
		};
	});




});