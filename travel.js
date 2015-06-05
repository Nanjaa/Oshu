$(document).ready(function() {

	$('#myShip').click(function() {
		$('.visitPlanet').hide();
		$('#map').show();
	})

	$('.planet').mouseover(function() {
		var minutesLost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
		$('#planetName').text($(this).attr('id'));
console.log(minutesLost);
	});

	$('.planet').mouseout(function() {
		$('#planetName').text('');
	});



	$('.planet').click(function() {
		var minutesLost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
		if(($('#minutes').text() - minutesLost) <= 0) {
console.log("not possible!");
			error.play();
		}
		else {
			lifeEvent(minutesLost);
			myLocation.current = $(this).attr('distance');
		};
	});

	$('.planet').click(function() {
		if($(this).attr('id') == AliNada) {
			console.log('it worked');
		};
	});

	// var selected = planets.
	// if(attr === 'yes') {
	// 	if (colored) {
	// 		$(this).css('color', 'white');
	// 		colored = false;
	// 	}
	// 	else {
	// 		$(this).css('color', 'originalcolor');
	// 		colored = true;
	// 	}
	// }



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