function lifeEvent(loss) {
	remainingLife = remainingLife - 1;
	$('#remainingLife').attr('remainingLife', remainingLife);
	var percent = ((remainingLife/3600)*100) + "%";
	$('#life').css('width', percent);
	if(remainingLife >= 2400) {
		$('#life').css('background-color', 'green');
	}
	else if(remainingLife >= 1200) {
		$('#life').css('background-color', 'orange');
	}
	else {
		$('#life').css('background-color', 'red');
	}
	$('#minutes').text(newTime);
}