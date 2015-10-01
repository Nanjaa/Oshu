$(document).ready(function() {
	inGame = false;

	function sound() {
		sound = localStorage.getItem('sound');
		if(sound == null) {
			$('#audio').prop('muted', false);
		}
		else if(sound == 'true') {
			$('#audio').prop('muted', false);
		}
		else {
			$('#audio').prop('muted', true);
			$('#soundsOn').hide();
			$('#soundsOff').show();
			sound = false;
		}		
	}
	
	sound();



var text = {
	shutoff: "The mechanic finished his work, and my Lifecycle Program was shut off. I felt a strange sense of relief. I had something the rest of my family didn't: A second chance. Although it was important that I felt human like them, I realized that this second chance was something any of them wanted dearly. If a human being were offered a second life on their deathbed, many would accept. I was now being given that offer, and I realize now that I wanted to accept it. MILO and I spent time together anytime it didn't affect his work at the rental agency. We traversed much of space, and I saw and experienced things that dwarfed the original list. That bucket list grew and grew, and my life was filled with many happy memories.",
	completeGood: "I did it. I actually finished everything. I looked down at my list, and thought about everything that had happened throughout it. I thought about what lay before me. I wished for the heaven that so many of my human companions dreamed of. I thought about how if it existed, Andy would be there. I missed Andy so much… MILO and I traveled to a nearby supernova, just out of distance to see it but not close enough to be affected. It was MILO’s idea. I watched the star explode, knowing that I’d soon meet a similar end. Had I been alive, I would cry. My programs began to shut down one by one, and I felt my body relax. My sight shut down, and I was left in darkness. I had made a very dear friend, and I had experienced everything I could ever ask for. This was the perfect ending.",
	completeNeut: "I did it. I actually finished everything. I looked down at my list, and thought about everything that had happened throughout it. I thought about what lay before me. I wished for the heaven that so many of my human companions dreamed of. I thought about how if it existed, Andy would be there. I missed Andy so much… MILO and I traveled to a nearby supernova, just out of distance to see it but not close enough to be affected. It was MILO’s idea. I watched the star explode, knowing that I’d soon meet a similar end. Had I been alive, I would cry. My programs began to shut down one by one, and I felt my body relax. My sight shut down, and I was left in darkness. My last thoughts were blurry and quiet as I faded away. This was the perfect ending.",
	completeBad: "I did it. I actually finished everything. I looked down at my list, and thought about everything that had happened throughout it. I thought about what lay before me. I wished for the heaven that so many of my human companions dreamed of. I thought about how if it existed, Andy would be there. I missed Andy so much… MILO and I traveled to a nearby supernova, just out of distance to see it but not close enough to be affected. It was MILO’s idea. I watched the star explode, knowing that I’d soon meet a similar end. Had I been alive, I would cry. My programs began to shut down one by one, and I felt my body relax. My sight shut down, and I was left in darkness. Although MILO and I fought a lot, it was nice to have him with me. It felt much less lonely. This was the perfect ending.",
	incompleteGood: "Although I wasn’t able to complete my list, I was pleased with my life’s ending. I looked down at my list, and thought about everything that had happened throughout it. I thought about what lay before me. I wished for the heaven that so many of my human companions dreamed of. I thought about how if it existed, Andy would be there. I missed Andy so much… MILO and I traveled to a nearby supernova, just out of distance to see it but not close enough to be affected. It was MILO’s idea. I watched the star explode, knowing that I’d soon meet a similar end. Had I been alive, I would cry. My programs began to shut down one by one, and I felt my body relax. My sight shut down, and I was left in darkness. I had made a very dear friend, and I had experienced everything I could ever ask for. This was the perfect ending.",
	incompleteNeut: "Although I wasn’t able to complete my list, I was pleased with my life’s ending. I looked down at my list, and thought about everything that had happened throughout it. I thought about what lay before me. I wished for the heaven that so many of my human companions dreamed of. I thought about how if it existed, Andy would be there. I missed Andy so much… MILO and I traveled to a nearby supernova, just out of distance to see it but not close enough to be affected. It was MILO’s idea. I watched the star explode, knowing that I’d soon meet a similar end. Had I been alive, I would cry. My programs began to shut down one by one, and I felt my body relax. My sight shut down, and I was left in darkness. My last thoughts were blurry and quiet as I faded away. This was the perfect ending.",
	incompleteBad: "Although I wasn’t able to complete my list, I was pleased with my life’s ending. I looked down at my list, and thought about everything that had happened throughout it. I thought about what lay before me. I wished for the heaven that so many of my human companions dreamed of. I thought about how if it existed, Andy would be there. I missed Andy so much… MILO and I traveled to a nearby supernova, just out of distance to see it but not close enough to be affected. It was MILO’s idea. I watched the star explode, knowing that I’d soon meet a similar end. Had I been alive, I would cry. My programs began to shut down one by one, and I felt my body relax. My sight shut down, and I was left in darkness. Although MILO and I fought a lot, it was nice to have him with me. It felt much less lonely. This was the perfect ending."
}

var complete = localStorage.getItem('complete');
var status = localStorage.getItem('status');

function speech() {
	console.log(complete);
	if(complete == 'shutoff') {
		play('speech/shutoff.mp3');
		$('#oshuText').writeText(text.shutoff);
		var hold7 = setTimeout(credits, 47000);
	}
	else if(complete == 'true') {
		if(status == 'good') {
			play('speech/endingCompleteGood.wav');
			$('#oshuText').writeText(text.completeGood);
			var hold1 = setTimeout(credits, 56000);
		}
		else if(status == 'neut') {
			play('speech/endingCompleteNeut.wav');
			$('#oshuText').writeText(text.completeNeut);
			var hold2 = setTimeout(credits, 56000);
		}
		else if(status == 'bad') {
			play('speech/endingCompleteBad.wav');
			$('#oshuText').writeText(text.completeBad);
			var hold3 = setTimeout(credits, 57000);
		}
	}
	else {
		if(status == 'good') {
			play('speech/endingIncompleteGood.wav');
			$('#oshuText').writeText(text.incompleteGood);
			var hold4 = setTimeout(credits, 57000);
		}
		else if(status == 'neut') {
			play('speech/endingIncompleteNeut.wav');
			$('#oshuText').writeText(text.incompleteNeut);
			var hold5 = setTimeout(credits, 57000);
		}
		else if(status == 'bad') {
			play('speech/endingIncompleteBad.wav');
			$('#oshuText').writeText(text.incompleteBad);
			var hold6 = setTimeout(credits, 58000);
		};
	};

	$('#skipButton').unbind('click');
	$('#skipButton').click(function() {
		credits();
	});
};

speech();

	function credits() {
		$('#skip').hide();
		$('#oshuText').hide();
		play('music/introSong.wav');
		$('.ending').show();
		$('#creditsWrap').animate({
			marginTop: '-1200'
		}, 20000, 'linear');
	}
});