$(document).ready(function() {

	var planetNumber = $(this).attr('distance')

	$('.planet').mouseover(function() {
		var distanceCost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
		var currentTime = $('#minutes').text();
		var newTime = currentTime - distanceCost;
		$('.planet').click(function() {
			$('#minutes').text(newTime);
			myLocation.current = $(this).attr('distance');			
		});
	});

	$('.planet').click(function() {
		highlightPlanet();
		$(this).css('color', 'white');
	});

	function highlightPlanet() {
		$('#Luneda').css('color', '#c1e3da');
		$('#Kanedos').css('color', '#ff9a00');
		$('#Tyrianne').css('color', '#db1600');
		$('#Kaprika').css('color', '#1c9600');
		$('#AliNada').css('color', '#969696');
		$('#Carpic').css('color', '#5650ff');
	};

	// function highlighted() {
	// 	var highlight = setInterval(function() {
	// 		highlightPlanet();
	// 		console.log('test');
	// 	}, 1000);		
	// }







});