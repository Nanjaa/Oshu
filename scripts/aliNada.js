$(document).ready(function() {

	// brings you to the planet from the system map
	$('#AliNada').click(function() {
		$('#map').hide();
		$('#aliNadaMap').show();
		if(planets.AliNada.first == true) {
			play('speech/aliNadaIntro.mp3');
			planets.AliNada.first = false;
		};
	});




});

