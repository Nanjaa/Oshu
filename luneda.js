$(document).ready(function() {

	$('#Luneda').click(function() {
		$('#map').hide();
		$('#lunedaMap').show();
	})

	$('.lunedaCity').click(function() {
		$('.lunedaCity').hide();
		$('.return').show();
		$('.lunedaInteract').show();
	});
	$('.return').click(function() {
		$('.return').hide();
		$('.cityDetails').hide();
		$('.lunedaCity').show();
	});
	$('.visitSea').click(function() {
		$('#beach').show();
		console.log('beach');
	});



});