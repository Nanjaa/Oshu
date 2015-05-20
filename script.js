$(document).ready(function() {

// begin

	var cookies = 100;

	// $('#test').click(function() {
	// 	console.log("test");
	// });

	$('#test').click(function() {
		cookieClick(1);
	});

	function cookieClick(number) {
		cookies = cookies - number;
		$('#number').text(cookies);
	};












});