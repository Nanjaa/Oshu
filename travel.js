$(document).ready(function() {

	$('.planet').mouseover(function() {
		var minutesLost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
console.log(minutesLost);
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