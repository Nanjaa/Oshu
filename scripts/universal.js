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
	var currentTime = $('#minutes').text(),
		newTime = currentTime - minutesLost,
		bar = minutesLost * 60;		

	// next, the life bar

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

// This small var will help immensely with all the writetext
var go = true;
var dontGo = false;

function resetText() {
	$(this).text('');
	$('#interactionText').text('');
	$('#miloSays').text('');
}

(function($) {
	resetText();
	$.fn.writeText = function(content) {
		go = false;
		resetText();
		var contentArray = content.split(""),
			current = 0,
			click = false,
			clicked = false,
			elem = this;

		var textWait = setInterval(function() {
			$(this).click(function() {
				click = true;
			});
			if(current == contentArray.length-1 && click == false) {
				click = true;
			}
			else if((current < contentArray.length) && click == false) {
				elem.text(elem.text() + contentArray[current]);
				current = current+1;
			}
			else if(click == true && clicked == false) {
				elem.text('');
				elem.text(elem.text() + content);
				clicked = true;
				if(dontGo !== true) {
					go = true;					
				}

			}				
		}, 30);
	};
}) (jQuery);

// ------------------------------------------------------
// 					IGNORE OR SKIP TEXT
// ------------------------------------------------------

function ignore(map) {
	$('#miloResponse').hide();
	$('#miloInteraction').hide();
	$(map).show();
	audio.pause();
	$('#skip').hide();
	$('#skip').unbind('click');
	$('#skipButton').unbind('click');
}

// ------------------------------------------------------
// 				SHOW PLANET CONTENT!!
// ------------------------------------------------------

function showContent(content, script) {
	$('#map').hide();
	$('#planetContent').load(content);
	$.getScript(script);
}

function hideContent(content) {
	$(content).remove();	
}

// ------------------------------------------------------
// 				GET MONEY GET PAID
// ------------------------------------------------------

function getPaid(price) {
	var coins = Oshu.coins;
	var payment = setInterval(function() {
		coins = coins + 1;
		Oshu.coins = coins;
		$('#coinsAmt').text(coins);		
	}, 500);
};

getPaid();

// ------------------------------------------------------
// 					PAY MONEY
// ------------------------------------------------------

function payMoney(price) {
	var coins = Oshu.coins;
	coins = coins - price;
	Oshu.coins = coins;
	$('#coinsAmt').text(coins);
};

var optionsStatus = 1;

function displayOptions(text1, text2, price, yes, no, needMore) {
	if(dontGo !== true) {
		$('#interactionText').writeText(text1);
		dontGo = true;
		var displayGo = false;

		// the following chunk has to do with displaying the "do you want to buy" question
		var holding = setTimeout(function() {
			dontGo = false;
			// now to display the yes or no options
			twoOptions(text2, 'Yes', 'No');
			dontGo = true;
			$('#optionOne').unbind('click');
			$('#optionOne').click(function() {
				dontGo = false;
				$('.option').hide();
				var coins = Oshu.coins;
				if(coins >= price) {
		 			$('#interactionText').writeText(yes);	
		 			payMoney(price);			
				}
				else {
					$('#interactionText').writeText(needMore);
				}
			});
			$('#optionTwo').unbind('click');
			$('#optionTwo').click(function() {
				dontGo = false;
				$('.options').hide();
				$('#interactionText').writeText(no);
			})
		}, 4000);					

		// click your mouse button to skip the wait
		$(this).click(function() {
			var wait2 = setInterval(function() {
				if($('#interactionText').text() == text1) {
					clearInterval(wait2);
					displayGo = true;
				}
			}, 1)
			if(displayGo == true) {
				displayGo = false;
				clearTimeout(holding);
				dontGo = false;
				// now to display the yes or no options
				twoOptions(text2, 'Yes', 'No');
				dontGo = true;
				$('#optionOne').unbind('click');
				$('#optionOne').click(function() {
					dontGo = false;
					$('.option').hide();
					var coins = Oshu.coins;
					if(coins >= price) {
			 			$('#interactionText').writeText(yes);	
			 			payMoney(price);			
					}
					else {
						$('#interactionText').writeText(needMore);
					}
				});
				$('#optionTwo').unbind('click');
				$('#optionTwo').click(function() {
					dontGo = false;
					$('.options').hide();
					$('#interactionText').writeText(no);
				});
			};
		});
	};
};

// ------------------------------------------------------
// 					ADD INVENTORY ITEM
// ------------------------------------------------------

function addItem(id, name, fullId, description) {
	// adds item to inventory if not already there
	$('.inventoryList').append("<li class='inventoryItem'><span class='clickInventory' id=" + id + ">" + name + "</span></li>");

	// now you can select the clothes
	$(fullId).click(function() {
		inventoryDescription(fullId, name, description);
	});
}

// ------------------------------------------------------
// 					PLAY AUDIO
// ------------------------------------------------------

function play(source) {
	$('#audio').attr('src', source);
	audio.play();
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

function completeItem(quest, speech) {
	finished = finished + 1;
	$('#oshuInteraction').text('');
	play('soundEffects/completeItem.wav');
	$('.quest').each(function() {
		if($(this).text() == quest) {
			$(this).css('text-decoration', 'line-through');	
		}
	});
	$(Oshu.currentLocation).fadeOut();
	$('.return').fadeOut();
	$('#planetInteraction').hide();
	var timeout = setTimeout(function() {
		$('#oshuInteraction').show();
		$('#skip').show();
		$('#oshuInteraction').writeText(speech);
	}, 500);
};

function endSpeech() {
	$('#skip').hide();
	$('#oshuInteraction').hide();
	$('#oshuInteraction').text('');
	if(Oshu.currentLocation !== '#map') {
		$('.return').show();
		$('#planetInteraction').show();		
	};
}

// ------------------------------------------------------
// 				USE INVENTORY
// ------------------------------------------------------

function inventoryDescription(div, item, desc) {
	if(go) {
		$(div).text(' - ');
		$(div).writeText(desc);
		var inventoryWait = setInterval(function() {
			$(div).text('');
			$(div).text(item);
			clearInterval(inventoryWait);
		}, 7000);		
	};
};

function complexDescription(itemSpan, descSpan, desc) {
	if(go) {
		$(itemSpan).hide();
		$(descSpan).text(' - ');
		$(descSpan).writeText(desc);
		var inventoryWait = setInterval(function() {
			$(descSpan).text('');
			$(itemSpan).show();
		}, 7000)		
	};
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
	};
};

// ------------------------------------------------------
// 				PROVIDE CURRENT LOCATION
// ------------------------------------------------------

function changeLocation(newLocation, clickReturn, clickShip) {
	Oshu.currentLocation = newLocation;
	if(clickReturn) {
		play('soundEffects/return.wav');
	}
	else if(clickShip) {
		play('soundEffects/returnToShip.wav');
	}
	else {
		play('soundEffects/click.wav');		
	}
};

// ------------------------------------------------------
// 				CONVERSATION FUNCTIONS
// ------------------------------------------------------

function oneOption(referenceText, option) {
	$('#optionTwo').hide();
	$('#optionThree').hide();
	$('#interactionText').writeText(referenceText);
	var option1 = setInterval(function() {
		if($('#interactionText').text() == referenceText) {
			clearInterval(option1);
			$('#optionOne').show();
			$('#optionOne').text(option);
		};
	}, 1);
};
function twoOptions(referenceText, option1, option2) {
	$('#optionThree').hide();
	$('#interactionText').writeText(referenceText);
	var wait = setInterval(function() {
		if($('#interactionText').text() == referenceText) {
			clearInterval(wait);
			$('#optionOne').show();
			$('#optionTwo').show();
			$('#optionOne').text(option1);
			$('#optionTwo').text(option2);
		};
	}, 1);
};
function threeOptions(referenceText, option1, option2, option3) {
	if(dontGo !== true) {
		$('#interactionText').writeText(referenceText);
		dontGo = true;
		var displayGo = false;

		// the following chunk has to do with displaying the "do you want to buy" question
		var wait3 = setTimeout(function() {
			dontGo = false;
			$('#interactionText').text('');
			$('#optionOne').show();
			$('#optionTwo').show();
			$('#optionThree').show();
			$('#optionOne').text(option1);
			$('#optionTwo').text(option2);
			$('#optionThree').text(option3);
		}, 4000);					

		// click your mouse button to skip the wait
		$(this).click(function() {
			var wait4 = setInterval(function() {
				if($('#interactionText').text() == referenceText) {
					clearInterval(wait4);
					displayGo = true;
				}
			}, 1)
			if(displayGo == true) {
				displayGo = false;
				clearTimeout(wait3);
				dontGo = false;
				$('#interactionText').text('');
				$('#optionOne').show();
				$('#optionTwo').show();
				$('#optionThree').show();
				$('#optionOne').text(option1);
				$('#optionTwo').text(option2);
				$('#optionThree').text(option3);
			};
		});
	};
};

$('.option').click(function() {
	$('#optionOne').hide();
	$('#optionTwo').hide();
	$('#optionThree').hide();
});

function endConversation(referenceText) {
	$('.option').hide();
	$('#interactionText').writeText(referenceText);
};

// ------------------------------------------------------
// 				CONSISTENT SOUND EFFECTS
// ------------------------------------------------------


function maleVoice() {
	play('soundEffects/maleVoice.wav');
}
function maleVoice2() {
	play('soundEffects/maleVoice2.wav');
}
function maleVoice3() {
	play('soundEffects/maleVoice3.wav');
}
function femVoice() {
	play('soundEffects/femVoice.wav');
}
function femVoice2() {
	play('soundEffects/femVoice2.wav');
}
function femVoice3() {
	play('soundEffects/femVoice3.wav');
}

// ------------------------------------------------------
// 				MUTE THE GAME
// ------------------------------------------------------

$('#sounds').click(function() {
	if(sound) {
		$('#soundsOn').hide();
		$('#soundsOff').show();
		sound = false;
		$('#audio').prop('muted', true);
	}
	else {
		$('#soundsOff').hide();
		$('#soundsOn').show();
		$('#audio').prop('muted', false);
		sound = true;
	}
});

// ------------------------------------------------------
// 					RESET THE OPTIONS
// ------------------------------------------------------

$('.clickable').click(function() {
	$('.option').hide();
});
$('.return').click(function() {
	$('.option').hide();
});

// ------------------------------------------------------
// 					CLICK ON MY SHIP
// ------------------------------------------------------

$('#myShip').click(function() {
	go = true;
	changeLocation('#map', false, true);
	hideContent('#lunedaContent');
	hideContent('#kanedosContent');
	hideContent('#tyrianneContent');
	hideContent('#kaprikaContent');
	hideContent('#aliNadaContent');
});