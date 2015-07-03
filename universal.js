// ------------------------------------------------------
// 					LOSE LIFE
// ------------------------------------------------------

selectList();
var bucketListArray = {

}
function selectList() {
	test = Oshu.quests;
}

for(i = 0; i<6; i++) {
	var listNumber = Math.random();
	console.log(Oshu.quests[i])
	// if(listNumber < 0.33) {
	// 	console.log(Oshu.quests[i].1);
	// }
	// else if(listNumber < 0.66) {
	// 	console.log(Oshu.quests[i].2);
	// }
	// else {
	// 	console.log(Oshu.quests[i].3)
	// }

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