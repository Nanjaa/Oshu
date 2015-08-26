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
		if($('.planetInteraction').text() == text1) {
			clearInterval(displayOptions);
			setTimeout(function() {
				$('.planetInteraction').writeText(text2);
			}, 2000);
		};				
	};
	// now to display the yes or no options
	var displayYesNo = setInterval(function() {
		showYesNo(text2, price, yes, no, needMore)
	}, 1000);	
	function showYesNo(text2, price, yes, no, needMore) {
		if($('.planetInteraction').text() == text2) {
			clearInterval(displayYesNo);
			function yesNo(price) {
				$('.planetInteraction').append('<ul><li class="options yes">Yes</li><li class="options no">No</li></ul>')
			};
			setTimeout(yesNo(), 1000);
		};
		$('.yes').click(function() {
			var coins = Oshu.coins;
			if(coins >= price) {
	 			$('.planetInteraction').writeText(yes);	
	 			payMoney(price);			
			}
			else {
				$('.planetInteraction').writeText(needMore);
			}
		});
		$('.no').click(function() {
			$('.planetInteraction').writeText(no);
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

// ------------------------------------------------------
// 	CHANGE THE COLOR OF THE INTERACTION BASED ON LOCATION
// ------------------------------------------------------

$('.planet').click(function() {
	var destination = $(this).attr('id');
	switch(destination) {
		case 'Luneda':
			$('.planetInteraction').css('color', '#00bece');
			$('.planetInteraction').css('border', '1px solid #00bece');
			break;
		case 'Kanedos':
			$('.planetInteraction').css('color', '#ff4d00');
			$('.planetInteraction').css('border', '1px solid #ff4d00');
			break;
		case 'Tyrianne':
			$('.planetInteraction').css('color', '#8f46dd');
			$('.planetInteraction').css('border', '1px solid #8f46dd');
			break;
		case 'Kaprika':
			$('.planetInteraction').css('color', '#00b844');
			$('.planetInteraction').css('border', '1px solid #00b844');
			break;
		case 'AliNada':
			$('.planetInteraction').css('color', '#e32f2f');
			$('.planetInteraction').css('border', '1px solid #e32f2f');
			break;
	}
});

// ------------------------------------------------------
// 				COMPLETE LIST ITEM
// ------------------------------------------------------
function completeItem(quest) {
	$('.quest').each(function() {
		if($(this).text() == quest) {
			$(this).css('text-decoration', 'line-through');	
		}
	});	
}

// ------------------------------------------------------
// 				USE INVENTORY
// ------------------------------------------------------

function inventoryDescription(div, item, desc) {
	$(div).text(' - ');
	$(div).writeText(desc);
	var inventoryWait = setInterval(function() {
		$(div).text('');
		$(div).text(item);
		clearInterval(inventoryWait);
	}, 7000);
};

function complexDescription(itemSpan, descSpan, desc) {
	$(itemSpan).hide();
	$(descSpan).text(' - ');
	$(descSpan).writeText(desc);
	var inventoryWait = setInterval(function() {
		$(descSpan).text('');
		$(itemSpan).show();
	}, 7000)
}

// since coins is the only item already in the inventory, here is the function for it
$('#coins').click(function() {
	complexDescription('#coins', '#coinsDesc', Oshu.description.coins);
})

function useItem(item, div) {
	if(item > 0) {
		var amount = item - 1;
		item = amount;
		$(div).text(amount);
	} 
}