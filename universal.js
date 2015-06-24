function lifeEvent(minutesLost) {
// calculate loss

	// first, the timer
	var currentTime = $('#minutes').text();
	var newTime = currentTime - minutesLost;

	// next, the life bar
	var bar = minutesLost * 60;
	var remainingLife = Oshu.remainingLife;
	Oshu.remainingLife = remainingLife - bar;
	
	// display the loss
	var percent = ((Oshu.remainingLife/3600)*100) + "%";
	$('#life').css('width', percent);
	$('#minutes').text(newTime);
};

(function($) {
	$.fn.writeText = function(content) {
		$('.gameText').text('');
		var contentArray = content.split(""),
			current = 0,
			click = false,
			clicked = false,
			elem = this;

		console.log(contentArray);

		setInterval(function() {
			$(this).click(function() {
				click = true;
			});
			if(current < contentArray.length && click == false && contentArray.length != $('.gameText').text().length) {
				elem.text(elem.text() + contentArray[current++]);
			}
			else if(click == true && clicked == false) {
				elem.text('');
				elem.text(elem.text() + content);
				clicked = true;
			}
		}, 30);
	};
}) (jQuery);


	// function writeText(content) {
	// 	$('.lunedaInteract').text('');
	// 	var contentArray = content.split(""),
	// 	current = 0,
	// 	elem = this;
	// 	setInterval(function() {
	// 		if(current < contentArray.length && test == false) {
	// 			elem.text(elem.text() + contentArray[current++]);
	// 		}
	// 		else {
	// 			elem.text(elem.text() + contentArray);
	// 			test = false;
	// 		};
	// 	}, 30);
	// };