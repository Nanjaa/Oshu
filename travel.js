$(document).ready(function() {

	var planetNumber = $(this).attr('distance')

	$('.planet').mouseover(function() {
		var distanceCost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
		var distanceBar = distanceCost * 60;

		var currentTime = $('#minutes').text();
		var newTime = currentTime - distanceCost;
		console.log(distanceCost);


		$('.planet').click(function() {
			if(newTime <= 0) {
				console.log("not possible!");
				error.play();
			}
			else {
				myLocation.current = $(this).attr('distance');	
				// highlightPlanet();
				lifeEvent(distanceCost, distanceBar);
				// $(this).css('color', 'white');
				// $(this).attr('selected', 'yes');
			}
		});
	});

	// var colored = false;
	// var attr = $('#item').attr('selected');
	// if(attr === 'yes') {
	// 	if (colored) {
	// 		$('#item').css('color', 'white');
	// 		colored = false;
	// 	}
	// 	else {
	// 		$('#item').css('color', 'originalcolor');
	// 		colored = true;
	// 	}
	// }

	// function highlightPlanet() {
	// 	$('#Luneda').css('color', '#c1e3da');
	// 	$('#Kanedos').css('color', '#ff9a00');
	// 	$('#Tyrianne').css('color', '#db1600');
	// 	$('#Kaprika').css('color', '#1c9600');
	// 	$('#AliNada').css('color', '#969696');
	// 	$('#Carpic').css('color', '#5650ff');

	// 	$('#Luneda').attr('selected', 'no');
	// 	$('#Kanedos').css('color', '#ff9a00');
	// 	$('#Tyrianne').css('color', '#db1600');
	// 	$('#Kaprika').css('color', '#1c9600');
	// 	$('#AliNada').css('color', '#969696');
	// 	$('#Carpic').css('color', '#5650ff');
	// };


	// function hightlightplanettest() {
	// 	for (var i = 0; i < planets.length; i++) {
	// 		$(planets[i].id).css('color', planets[i].color);
	// 	}
	// };





	// function highlighted() {
	// 	var highlight = setInterval(function() {
	// 		highlightPlanet();
	// 		console.log('test');
	// 	}, 1000);		
	// }







});