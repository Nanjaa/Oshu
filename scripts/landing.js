$(document).ready(function() {

	var text = {
		introduction: "Hello, my name is Oshu. I am an android. This is the year 2175. Androids, humans, aliens, and other species live together in harmony. As an android, I have a choice: repair my parts and live as long as possible, or make use of a program that will terminate me after a set amount of time. I have chosen the latter. I wanted to be as human as possible, to feel like I really belonged to my family. My time has almost come to an end, and I can see my internal clock depleting quickly. However, there are still many things I wish to see and do before I pass. I've made a list of the experiences I crave most, and now set out to complete that list. I don't have much time, but I'm excited that my last hours will be beautiful, and full of rich and wonderful memories."
	};


	function playText() {
		$('#skip').show();
		$('#intro').writeText(text.introduction);
		oshuIntro.play();
	};

	function showTitle() {
		$('#intro').hide();
		$('#bigTitles').show();
		$('#bigTitle').show();
		$('#bigSub').show();
		console.log('change');
	}

	function showSub() {

	}








	$('#clickPlay').click(function() {
		$('#landing').fadeOut();
		$('#welcome').show();
		var wait1 = setTimeout(playText, 1000);
		var wait2 = setTimeout(showTitle, 55000);
		var wait3 = setTimeout(showSub, 60000);
		$('#skip').click(function() {
			oshuIntro.pause();
			clearTimeout(wait2);
			clearTimeout(wait3);
			$('#welcome').hide();
			$('#instructions').show();
		})
	});

});

