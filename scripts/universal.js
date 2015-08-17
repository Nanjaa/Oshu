// ------------------------------------------------------
// 					GENERIZE QUESTS
// ------------------------------------------------------
randomizeQuests()
function randomizeQuests() {
	for(var i=0; i<Oshu.quests.length; i++) {
		var listNumber = Math.random();
		if(Oshu.quests[i] == Oshu.quests[4]) {
			$('.bucketList').append('<li class="quest">' + Oshu.quests[i][1][0] + '</li>')

		}
		else if(listNumber < 0.33) {
			$('.bucketList').append('<li class="quest">' + Oshu.quests[i][1][0] + '</li>')
		}
		else if(listNumber < 0.66) {
			$('.bucketList').append('<li class="quest">' + Oshu.quests[i][1][1] + '</li>')

		}
		else {
			$('.bucketList').append('<li class="quest">' + Oshu.quests[i][1][2] + '</li>')

		}
	}	
}

// ------------------------------------------------------
// 					LOSE LIFE
// ------------------------------------------------------

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

// ------------------------------------------------------
// 					WRITE TEXT
// ------------------------------------------------------

(function($) {
	$.fn.writeText = function(content) {
		$('.gameText').text('');
		var contentArray = content.split(""),
			current = 0,
			click = false,
			clicked = false,
			elem = this;

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


// ------------------------------------------------------
// 					PAY MONEY
// ------------------------------------------------------

function payMoney(price) {
	var coins = Oshu.coins;
	coins = coins - price;
	Oshu.coins = coins;
	$('#coinsAmt').text(coins);
};

function displayOptions(text1, text2, price, yes, no, needMore) {
	// the following chunk has to do with displaying the "do you want to buy" question
	var displayOptions = setInterval(function() {
		showOptions(text1);
	}, 1000);
	function showOptions(text1) {
		if($('.lunedaInteract').text() == text1) {
			clearInterval(displayOptions);
			setTimeout(function() {
				$('.lunedaInteract').writeText(text2);
			}, 2000);
		};				
	};
	// now to display the yes or no options
	var displayYesNo = setInterval(function() {
		showYesNo(text2, price, yes, no, needMore)
	}, 1000);	
	function showYesNo(text2, price, yes, no, needMore) {
		if($('.lunedaInteract').text() == text2) {
			clearInterval(displayYesNo);
			function yesNo(price) {
				$('.lunedaInteract').append('<ul><li class="options yes">Yes</li><li class="options no">No</li></ul>')
			};
			setTimeout(yesNo(), 1000);
		};
		$('.yes').click(function() {
			var coins = Oshu.coins;
			if(coins >= price) {
	 			$('.lunedaInteract').writeText(yes);	
	 			payMoney(price);			
			}
			else {
				$('.lunedaInteract').writeText(needMore);
			}
		});
		$('.no').click(function() {
			$('.lunedaInteract').writeText(no);
		})
	}
};

// ------------------------------------------------------
// 					PLAY AUDIO
// ------------------------------------------------------

function play(source) {
	$('#audio').attr('src', source);
	audio.play();
}

function maleVoice() {
	play('soundEffects/maleVoice.wav');
}
function femVoice() {
	play('soundEffects/femVoice.wav');
}