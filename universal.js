function lifeEvent(timer, bar) {
// calculate loss
console.log('timer ' + timer);
console.log('bar ' + bar);
	var remainingLife = Oshu.remainingLife;
	Oshu.remainingLife = remainingLife - bar;
	console.log('remaininglife: ' + remainingLife);
	$('#remainingLife').attr('remainingLife', remainingLife);

	var currentTime = $('#minutes').text();
	var newTime = currentTime - timer;
// display loss
	var percent = ((remainingLife/3600)*100) + "%";
	$('#life').css('width', percent);
	$('#minutes').text(newTime);

	return;
}