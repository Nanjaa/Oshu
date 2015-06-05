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
		$('.lunedaInteract').writeText(beachText.welcome);
		console.log('beach');
	});

	(function($) {
		$.fn.writeText = function(content) {
			$('.lunedaInteract').text('');
			var contentArray = content.split(""),
				current = 0,
				elem = this;
				setInterval(function() {
					if(current < contentArray.length) {
						elem.text(elem.text() + contentArray[current++]);
					}
				}, 30);
		};
	}) (jQuery);

	var beachText = {
		welcome: "You have arrived on the beaches of the Electric Sea. There is a buzzing sound that mixes gently with the sound of the waves crashing."
	};





});