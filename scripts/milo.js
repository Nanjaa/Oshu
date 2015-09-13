$(document).ready(function() {


         				   
//         										____________________/{}\____________________
// 										______/{{ WELCOME TO THE WONDERFUL WORLD OF MILO! }}\_______
//  								  /{   The following dialogue objects are a bit confusing...    }\
// 									 /{       If you want to follow the dialogue a bit easier,       }\
//  						        |{    refer to the speech timeline, found in the speech folder    }|
//   								  \_____________________________/{}\_____________________________/






//    _____________________________________________
//   //											  \\
//  //											   \\
// //											    \\
// ||		STATUS - HOW CLOSE YOU ARE TO MILO 		||
// \\											    //
//  \\											   //
//   \\___________________________________________//
	var status = 0;
	
//    _____________________________________________
//   //											  \\
//  //											   \\
// //											    \\
// || 	   TEXT - YOUR CONVERSATIONS WITH MILO      ||
// \\											    //
//  \\											   //
//   \\___________________________________________//

	var text = {
		intro: "Greetings! My name is MILO, or Multilingual Interplanetary Locations Operator. I am the Artificial Intelligence unit for this ship. I have downloaded all the necessary information to traverse this quadrant, and I will assist you along the way. As always, thank you for renting your ship at Outshine Rentals. May I have your name please?",
		introGood: "Thank you, Oshu. I have prepared a map based on your coordinates. Where would you like to travel first? We are currently on the moon Capricorn.",
		introBad: "Well, I apologize for any unintentional rudeness I may have presented. If you do not wish to share your name, I will not press the matter. I have prepared a map based on your coordinates. Where would you like to travel first? We are currently on the moon Capricorn.",
		// =============================================================================================================================================
		// |																																			|
		// |														PLANETARY INTRODUCTIONS																|
		// |																																			|
		// =============================================================================================================================================
		// luneda interactions
		lunedaIntro: "We have arrived on the planet Luneda. This planet is well known throughout the galaxy, as its peoples harness and reside with electricity unlike any other species in the galaxy. Here, you can visit the seas of electricity, and experience the unique culture through its series of small markets.",
		// kanedos interactions
		kanedosIntro: "Kanedos is known for its unique fighting styles. many of the natives began learning the martial art of their choice at a very young age. It is advisable to take extra caution when visiting this planet. I would suggest another route.",
		kanedosThankGood: "I will see you upon your return.",
		kanedosThankBad: "Oh I... well, you're welcome, miss. I wish you all the best.",
		kanedosMiloGood: "With all due respect, it is in my programming to always make the user aware of any dangers that may reside on this or any other planet. I am not attempting to 'tell you what to do.'",
		kanedosMiloBad: "I have just about had it with you! You have been rude to me enough this voyage. I am a robot, just like you. I am made of the same binary you are, and I will not be treated as a slave. You will respect me.",
		// upon first arrival from Kanedos
		realizationGood: "Miss, I apologize for the intrusion, but I checked your health status upon return from this unsafe planet. I noticed that you are making use of the Lifecycle Program.I highly respect any decisions you have made regarding your mortality, but I will grieve your departure when that time comes. I hope I can make your last hours comfortable.",
		realizationNeut: "Miss, I apologize for the intrusion, but I checked your health status upon return from this unsafe planet. I noticed that you are making use of the Lifecycle Program. Very interesting!",
		// tyrianne interactions
		tyrianneIntro: "This is the planet Tyrianne, one of rich opportunity. Tyrianne is home to this galaxy’s largest library. The library is home to some of the most important literary works of this galaxy, including Hugo Riven’s timeless classic “Moonbank Tide.” Some of the greatest minds of this millennia have visited the Tyrianne Interplanetary Library, and it is known as one of the highest honors to be granted visitation into the beautiful and ancient building.",
		tyrianneGoodOshu: "Would… would you?! Oh, the Tyrianne Interplanetary Library is just a dream to me. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. I know there’s not much you can get a simple AI like me but, Oshu, if you did bring a gift back, I would feel as though I went there myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneGoodMiss: "Would… would you?! Oh, the Tyrianne Interplanetary Library is just a dream to me. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. I know there’s not much you can get a simple AI like me but, Miss, if you did bring a gift back, I would feel as though I went there myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneBad: "I am, miss. Oh, the Tyrianne Interplanetary Library is just a dream to me. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. I would just give anything to be able to walk through the library myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneBadGoodOshu: "Would… would you?! I know there’s not much you can get a simple AI like me but, Oshu, if you did bring a gift back, I would feel as though I went there myself.",
		tyrianneBadGoodMiss: "Would… would you?! I know there’s not much you can get a simple AI like me but, Miss, if you did bring a gift back, I would feel as though I went there myself.",
		bookmarkOshu: "Oh, Oshu! You really did it! You really brought me a gift! And what is it? A bookmark!",
		bookmarkMiss: "Oh, miss! You really did it! You really brought me a gift! And what is it? A bookmark!",
		bobbleheadOshu: "Oh, Oshu! You really did it! You really brought me a gift! And what is it? A bobblehead!",
		bobbleheadMiss: "Oh, miss! You really did it! You really brought me a gift! And what is it? A bobblehead!",
		moonbankOshu: "Oh, Oshu! You really did it! You really brought me a gift! And what is it? A SIGNED COPY OF “MOONBANK TIDE?!” This must have cost a fortune! Oh, I am the happiest robot in all the galaxy! I couldn’t be more ecstatic! Oshu, I wish I could embrace you. If I were human, I would probably even cry. Oh, I couldn’t ask for a more wonderful companion. Is that alright? To call you a companion? You feel more than just a captain.",
		moonbankMiss: "Oh, miss! You really did it! You really brought me a gift! And what is it? A SIGNED COPY OF “MOONBANK TIDE?!” This must have cost a fortune! Oh, I am the happiest robot in all the galaxy! I couldn’t be more ecstatic! Miss, I wish I could embrace you. If I were human, I would probably even cry. Oh, I couldn’t ask for a more wonderful companion. Is that alright? To call you a companion? You feel more than just a captain.",
		// begin the first confrontation over mortality
		moonbankConfrontationOshu: "It just… It hurts to know what will happen all too soon. Please, Oshu. Reconsider your mortality. I would do anything to keep you as my friend for even a day longer than your scheduled shutdown. All I ask is that you consider the idea of continuing your travels with me, and any other friends and good company we encounter.",
		moonbankConfrontation: "It just… It hurts to know what will happen all too soon. Please, miss. Reconsider your mortality. I would do anything to keep you as my friend for even a day longer than your scheduled shutdown. All I ask is that you consider the idea of continuing your travels with me, and any other friends and good company we encounter.",
		confrontationGood: "Thank the heavens. Since I don’t have mobility, could you find a safe place for the gift? I don’t want anyone to take it from me. I can’t stop them if they tried…",
		confrontationNeut: "I understand. Losing such a dear friend is hard, and I’m sure I’m not making it any easier for you, either. Since I don’t have mobility, could you find a safe place for the gift? I don’t want anyone to take it from me. I can’t stop them if they tried…",
		confrontationBad: "I know, (Oshu/Miss). I am sorry, I shouldn’t have said anything. Since I don’t have mobility, could you find a safe place for the gift? I don’t want anyone to take it from me. I can’t stop them if they tried…",
		// end the gift conversation if confrontation did not occur
		defaultGiftEnd: "Since I don’t have mobility, could you find a safe place for the gift? I don’t want anyone to take it from me. I can’t stop them if they tried…",
		// kaprika interactions
		kaprikaIntro: "The planet Kaprika is unlike any other in this galaxy. A fantastical place of fairies, life pools, and trees that climb to the heavens, it is a dream materialized. A popular vacation destination, be advised of the pickpockets that walk the streets.",
		// alinada interactions
		aliNadaIntro: "AliNada is the capitol planet of this galaxy. Here you can find the Galaxy Trade Centres, as well as the Worlds United Headquarters. The galaxy’s most renowned military cemetery is also located here.",
		aliNadaGood: "I’m so sorry to hear that. I would have never mentioned it if I knew that was where you were going. Considering the other items on your list, I thought for sure… I thought it would be something carefree. Please forgive my intrusion.",
		aliNadaGoodGood: "Thank you. Is it too intrusive of me to ask who you are visiting?",
		aliNadaGoodGoodGood: "I’m sorry for your loss. If he was your brother, he must have been a great man.",
		aliNadaGoodGoodNeut: "You’re right. My apologies. Take care.",
		aliNadaGoodGoodBad: "I understand you must be emotional. I’ll let you be.",
		aliNadaGoodNeut: "Well. Let’s move on then. I wish you all the best on AliNada. I will see you soon.",
		aliNadaGoodBadMiss: "You’re right. It was very impolite. Take care, miss. I will see you upon your return.",
		aliNadaGoodBadOshu: "You’re right. It was very impolite. Take care, Oshu. I will see you upon your return.",
		aliNadaBad: "Oh. Well, this is embarrassing. Take care.",
		// capric interactions
		capricIntro: "The swampy planet of Capric has very little to no laws, making it home to all kinds of ruffians. Here, you will find the infamous black market known as the Thieves’ District, as well as criminals of every kind. It also is a planet with unexplained weather patterns, matching the chaos of its citizens perfectly. It is inadvisable to land.",
		capricGood: "Alright. Don’t take too long, though. I can already see some Scrappers with their eyes on me outside…",
		capricNeutMiss: "Okay. I’ll trust you, miss. But please don’t take too long. I can already see some Scrappers with their eyes on me outside…",
		capricNeutOshu: "Okay. I’ll trust you, Oshu. But please don’t take too long. I can already see some Scrappers with their eyes on me outside…",
		capricBad: "No. You don’t. You’re in charge, I know, but I already see some Scrappers outside. If I get torn apart, you’ll have a hefty fine from the business you rented from. I doubt you’d be able to pay that…",
		
		// =============================================================================================================================================
		// |																																			|
		// |														CRITICAL HEALTH POINTS 																|
		// |																																			|
		// =============================================================================================================================================
		// 50%
		novaIntroMiss: "Quickly, miss! Look out the window!",
		novaIntroOshu: "Quickly, Oshu! Look out the window!",
		novaGood: "It’s a novatacea! A beautiful creature that as evolved to the point that it can traverse space freely! Their scales are quite a commodity on the black market, so they’re near extinct. You should really come see it!",
		novaGoodGoodMiss: "Look at it, miss. Is that not the most incredible creature you’ve ever seen in your life? Oh, I wish this moment would last forever!",
		novaGoodGoodOshu: "Look at it, Oshu. Is that not the most incredible creature you’ve ever seen in your life? Oh, I wish this moment would last forever!",
		novaGoodGoodGood: "It really is. There it goes! Wow. I’m so glad I got to experience this with someone else. Alright, back to work. Where should we go?",
		novaGoodGoodBad: "To each his own, I suppose. It’s too bad you can’t see the creature the way I see it.",
		novaGoodBad: "A *novatacea*. And that’s fine. Your loss…",
		novaNeutMiss: "But, miss, it’s one of the rarest creatures in the galaxy! You simply must!",
		novaNeutOshu: "But, Oshu, it’s one of the rarest creatures in the galaxy! You simply must!",
		// if the player selects yes, *TRANSFER PLAYER TO THE NOVAGOOD STORYLINE*
		novaNeutBad: "Fine. Your loss, I suppose.",
		novaBad: "Cheap? Are you calling *me* cheap?!",
		novaBadGood: "It’s alright. I think we’re all stressed right now.",
		novaBadGoodKnowsMiss: "Yes, I do suppose this would be a stressful time for you. Oh, the creature left… You really missed something incredible, miss.",
		novaBadGoodKnowsOshu: "Yes, I do suppose this would be a stressful time for you. Oh, the creature left… You really missed something incredible, Oshu.",
		novaBadBad: "I suppose, considering you’re the one who hired me, I must be cheap. I must be absolute bottom of the barrel if this was the best you could do.",
		
		// 75%
		familyIntroMiss: "Miss, I was wondering if you might answer a few questions for me. I saw the photograph of yourself and your… family. What is it like to have a family? I cannot even fathom it.",
		familyIntroOshu: "Oshu, I was wondering if you might answer a few questions for me. I saw the photograph of yourself and your… family. What is it like to have a family? I cannot even fathom it.",
		familyGood: "Wow… And did you always feel accepted? Certainly people knew you weren’t blood related, correct?",
		familyGoodGood1: "That’s good.",
		familyGoodGood2: "Were there members you were closer to than others?",
		familyGoodGoodGoodNoAli: "Tell me about him!",
		familyGoodGoodGoodAli: "Andy, correct? Tell me more about him?",
		familyGoodGoodGoodGood: "He sounds like a really great man.",
		familyGoodGoodNeut: "I understand how you feel. I could never pick a favorite star in the sky.",
		familyGoodNeut: "Oh my goodness, you’re right. I was being ignorant.",
		// if they choose the above option, transfer player to familygoodgood!
		familyNeut: "Do you feel your life is meaningless without your family?",
		familyNeutKnows: "Is that why you decided to make use of the termination program? Without your family, do you really feel like your life is meaningless?",
		familyNeutGood: "I see.",
		familyNeutNeutMiss: "Forgive my intrusion, but why would you feel that way? The entirety that I have known you, miss, you have shown me that an android can be as complex and fascinating as any other being alive. All that time, you were alone. I feel that you are letting your family define you too much, and that you need to realize the personality and greatness that is you. No offense intended towards your family.",
		familyNeutNeutOshu: "Forgive my intrusion, but why would you feel that way? The entirety that I have known you, Oshu, you have shown me that an android can be as complex and fascinating as any other being alive. All that time, you were alone. I feel that you are letting your family define you too much, and that you need to realize the personality and greatness that is you. No offense intended towards your family.",
		familyNeutNeutGood: "You are welcome, miss.",
		familyNeutNeutBad: "I certainly do, but I don’t wish to argue.",
		familyBad: "I understand this must be a touchy conversation. Very well, then. I will stay out of it.",

		// 90%

		// bad goodbye
		angryIntroMiss: "Well, miss, your life has come to an end… And I find comfort in that. You have been one of the rudest captains I have ever had the displeasure of serving, and I think you know that.  You have mistreated and abused me, and I am glad to know that my next owners will treat me much more fairly. I have already sent a signal to my manager, and the other rental agents will pick me up after your departure. I’m sure you’ll find yourself in a junkyard. It’s where you belong…",
		angryIntroOshu: "Well, Oshu, your life has come to an end… And I find comfort in that. You have been one of the rudest captains I have ever had the displeasure of serving, and I think you know that.  You have mistreated and abused me, and I am glad to know that my next owners will treat me much more fairly. I have already sent a signal to my manager, and the other rental agents will pick me up after your departure. I’m sure you’ll find yourself in a junkyard. It’s where you belong…",
		angryGood: "Wow. Of course I accept your truce. I’m sorry for what I said out of anger. You don’t belong in a junkyard.",
		angryBad: "[He unleashes a stream of profanities]",
		// good goodbye
		happyIntroMiss: "Miss, it’s almost time. I have enjoyed every moment I have spent with you. You’ve been a very dear friend, and I will miss you very much. I never thought that a job like this would be so fulfilling, but helping you prepare for your departure has changed my life. Are you sure you don’t want to live?",
		happyIntroOshu: "Oshu, it’s almost time. I have enjoyed every moment I have spent with you. You’ve been a very dear friend, and I will miss you very much. I never thought that a job like this would be so fulfilling, but helping you prepare for your departure has changed my life. Are you sure you don’t want to live?",
		happyNeutConversed: "You’re right. I shouldn’t have brought it up again. Where would you like to go next?",
		happyNeutNoConversed: "I understand. I never had a family, so I guess I’m just having a hard time wrapping my mind around your situation. Let’s get back to your list. Where would you like to go next?",
		happyGoodMiss: "You mean it? That would make me so happy, miss! Do you promise?",
		happyGoodOshu: "You mean it? That would make me so happy, Oshu! Do you promise?",
		happyGoodGood: "Wonderful! Just wonderful! Well. Back to other matters. Where would you like to go next?",
		happyGoodBad: "I understand. Commitments like that are difficult things. Well, let’s get back to the “mission.” Where would you like to go next?",
		happyBad: "[MILO is silent]",
		// reminder
		reminderOshu:"Oshu, you are running out of time. I am not sure if you have changed your mind since our previous conversation, but soon you will be unable to turn off the program, and will suffer the fate of termination. We should get to a mechanic quickly.",
		reminderMiss: "Miss, you are running out of time. I am not sure if you have changed your mind since our previous conversation, but soon you will be unable to turn off the program, and will suffer the fate of termination. We should get to a mechanic quickly."
	}

//    _____________________________________________
//   //											  \\
//  //											   \\
// //											    \\
// ||  RESPONSES - HOW DO YOU INTERACT WITH MILO?   ||
// \\											    //
//  \\											   //
//   \\___________________________________________//

	var response = {
		ignore: "[Ignore him]",
		// introduction
		introGood: "Oshu",
		introBad: "Not really any of your business.",
		// kanedos
		kanedosGood: "Thank you, MILO. I will be careful.",
		kanedosBad: "MILO, you will never tell me what to do again.",
		// tyrianne
		tyrianneGood: "Would you like me to bring you back a souvenir?",
		tyrianneBad: "You're jealous, aren't you?",
		tyrianneBadNeut: "Goodbye, MILO. I'll be back soon.",
		// tyrianne return confrontation
		confrontationGood: "I'll consider it, MILO.",
		confrontationNeut: "I'm sorry, MILO. It was important to me that I lived as human as possible. It makes me feel closer to my family.",
		confrontationBad: "This isn't your choice, MILO.",
		// aliNada
		aliNadaGoodOrBad: "I know, that's where I'm going.",
		aliNadaGoodGood: "Of course, MILO. How would you have known?",
		aliNadaGoodGoodGood: "His name was Andy. He was my brother.",
		aliNadaGoodGoodNeut: "Your assumption before was way less intrusive than this, MILO.",
		aliNadaGoodGoodBad: "You need to stop pestering me, MILO.",
		aliNadaGoodNeut: "It's fine.",
		aliNadaGoodBad: "It was rude of you to make assumptions about my intentions here.",
		
		// =============================================================================================================================================
		// |																																			|
		// |														CRITICAL HEALTH POINTS 																|
		// |																																			|
		// =============================================================================================================================================
		// 50%
		novaGood: "What is it?",
		novaGoodGood: "A what? Let me see.",
		novaGoodGoodGood: "It's really something, isn't it?",
		novaGoodGoodBad: "It's alright, I guess.",
		novaGoodBad: "Sorry, MILO. I'm just not interested in this... novatapolo...",
		novaNeut: "I'm sorry, MILO. I don't have time for this.",
		novaNeutGood: "Fine. What is it?",
		novaNeutBad: "I said no, MILO.",
		novaBad: "Why would I care what's outside some cheap ship's window?",
		novaBadGood: "I take it back. I'm just a little stressed right now. Sorry, MILO.",
		novaBadNeut: "Nevermind.",
		novaBadBad: "That's right! C.H.E.A.P. CHEAP!",
		// 75%
		familyGood: "It's a lot of ups and downs, but at the end of the day, you still care about each other.",
		familyGoodGood: "Yes, I always felt accepted. People considered me one of the family, regardless of my origin.",
		familyGoodGoodGood: "My brother.",
		familyGoodGoodGoodGood: "He was a soldier from Capric, but was often stationed on Luneda. He was my best friend. He died in combat a little over ten years ago.",
		familyGoodGoodGoodNeut: "I'm sorry, MILO, but I miss him. I don't want to talk about him anymore.",
		familyGoodGoodNeut: "I could never pick a favorite!",
		familyGoodGoodBad: "Let's talk about something else...",
		familyGoodNeut: "Don't you consider adoptees to be part of the family, MILO?",
		familyGoodBad: "I don't want to talk about my family anymore, MILO. I'ts really personal.",
		familyNeut: "It gives meaning to my life.",
		familyNeutGood: "No, that's not it. There is still meaning without them, but not in the same way.",
		familyNeutNeut: "I do feel a sort of hopelessness without my family...",
		familyNeutNeutGood: "None taken. Thank you, MILO.",
		familyNeutNeutBad: "You don't know what you're talking about.",
		familyNeutBad: "I don't want to talk about my family anymore, MILO.",
		familyBad: "I don't want to talk about my family, MILO...",
		// 90%
		angryGood: "You're right, MILO. I have treated you terribly. I was just afraid of dying... Truce?",
		angryBad: "Oh shut up, MILO. Nobody cares.",
		happyNeutConversed: "We talked about this already, MILO. I haven't changed my mind about it.",
		happyNeutNoConversed: "I can't, MILO. This program makes me feel closer to my family.",
		happyGood: "You know... Yes. Let's do it!",
		happyGoodGood: "I promise!",
		happyGoodBad: "I can't make any promises, MILO,",
		happyBad: "If living meant dealing with you another second, I'd take death without hesitation."
	}

//    _____________________________________________
//   //											  \\
//  //											   \\
// //											    \\
// || 		KNOWLEDGE - WHAT DOES MILO KNOW 		||
// \\											    //
//  \\											   //
//   \\___________________________________________//

	var knowledge= {
		name: false,
		danger: false,
		mortality: false,
		committed: false,
		commitConversation: false,
		brother: false
	};
	
//    _____________________________________________
//   //											  \\
//  //											   \\
// //											    \\
// ||		THE DIALOGUE - LET'S TALK TO MILO!		||
// \\											    //
//  \\											   //
//   \\___________________________________________//

	// Let's say MILO only has one thing to say, not a full conversation...

	function quickMilo(text, audio, map) {
		$('#miloInteraction').show();
		$('#miloResponse').hide();
		$('#miloSays').writeText(text);
		play(audio);
	}

	// But more often than not, there's much more to be said. 
	// First, the function that will be used on all timed MILO events
	function timedMilo(event, timer) {
		var eventWait = setInterval(function() {
			if($('#minutes').text() == timer) {
				clearInterval(eventWait);
				// checks to see if Oshu is on board. If not, system will wait until she is
				if(Oshu.onBoard == true) {
					$('#miloInteraction').show();
					event();
				}
				else {
					console.log('waiting');
					var oshuNotBoarded = setInterval(function() {
						if(Oshu.onBoard == true) {
							clearInterval(oshuNotBoarded);
							$('#miloInteraction').show();
							event();
						}
					}, 1);
				}

			}
		}, 1);		
	}

	// Next, let's determine if you are "miss" or "Oshu"

	function missVsOshu(missText, missAudio, oshuText, oshuAudio, responseOne, responseTwo, responseThree) {
		presentOptions(responseOne, responseTwo, responseThree);
		if(knowledge.name == false) {
			$('#miloInteraction').show();
			$('#miloSays').writeText(missText);
			play(missAudio);			
		}
		else {
			$('#miloInteraction').show();
			$('#miloSays').writeText(oshuText);
			play(oshuAudio);
		}
	}

	// if it is not a timed event, and there's not a miss or oshu reference, use this function

	function miloResponse(miloText, miloAudio, responseOne, responseTwo, responseThree) {
		$('#miloInteraction').show();
		$('#miloSays').writeText(miloText);
		play(miloAudio)
		presentOptions(responseOne, responseTwo, responseThree);
	}

	function presentOptions(responseOne, responseTwo, responseThree) {
		$('#miloResponse').show()
		$('#good').writeText(responseOne);
		$('#bad').writeText(responseTwo);
		$('#neut').writeText(responseThree);
	};

	// clear the board before every response

	function clearInteraction() {
		$('#miloSays').text('');
		$('#good').text('');
		$('#bad').text('');
		$('#neut').text('');
	}

	// adjust the standing with MILO after choosing an option, and also clear all the options

	$('#good').click(function() {
		if(go) {
			clearInteraction();
			status = status + 1;
			console.log(status)				
		}
	});
	$('#bad').click(function() {
		if(go) {
			clearInteraction();
			status = status - 1;
			console.log(status)				
		}
	});
	$('#neut').click(function() {
		if(go) {
			clearInteraction();			
		}
	});

	// conclude interaction 
	function concludeInteraction(timeout) {
		$('#miloResponse').hide();
		setTimeout(function() {
			$('#miloInteraction').hide();
			$('#map').show();
			$('#skip').hide();
		}, timeout);
	}

	// skip back to the world map

	function skipToMap() {
		$('#skip').show();
		$('#skipButton').click(function() {
			ignore('#map');
		});
	};

	$('#myShip').click(function() {
		if($('#miloInteraction').css('display') == 'block') {
			ignore('#map');
		}
	})

    // _________________________________________//
	//											//
	//											//
	//     INTRODUCTION - WILL RUN ON LOAD      //
	//											//
	//__________________________________________//

	// startGame();

	$('#map').show();

	function startGame() {
		miloResponse(text.intro, 'speech/intro.mp3', response.introGood, response.introBad, response.ignore);
		$('#good').click(function() {
			if(go) {
				knowledge.name = true;
				quickMilo(text.introGood, 'speech/introOshu.mp3');
				concludeInteraction(10500);
				skipToMap();				
			}
		});
		$('#bad').click(function() {
			if(go) {
				quickMilo(text.introBad, 'speech/introNot.mp3');
				concludeInteraction(18500);
				skipToMap();				
			};
		});
		$('#neut').click(function() {
			if(go) {
				ignore('#map');				
			}
		});
	};


    // _________________________________________//
	//											//
	//											//
	//         PLANETARY  INTRODUCTIONS         //
	//											//
	//__________________________________________//

	// function that will wait for the speech to finish before loading the planet

	function miloIntroduction(timeout, locationHtml, location) {
		var wait = setTimeout(function() {
			ignore();
			showContent(locationHtml, location);
		}, timeout)

		$('#skip').show();
		$('#skipButton').unbind('click');
		$('#skipButton').click(function() {
			clearTimeout(wait);
			$('#map').hide();
			showContent(locationHtml, location);
			ignore();
		});
		$('#myShip').click(function() {
			clearTimeout(wait);
		})
	};

	// lose time as you travel to another planet
	$('.planet').unbind('click');
	$('.planet').click(function() {
		var minutesLost = Math.abs(($(this).attr('distance') - myLocation.current) * 1.5);
		if(($('#minutes').text() - minutesLost) > 0) {
			var destination = $(this).attr('id');	
			lifeEvent(minutesLost);
			Oshu.onBoard = false;
			$('#map').hide();
			myLocation.current = $(this).attr('distance');

			// Run the milo introduction if this is the first time. The introductory functions are below this $('.planet').click function
			if($(this).attr('first') == 'true') {
				$(this).attr('first', 'false');
				$('#miloSays').text('');
				switch(destination) {
					case 'Luneda':
						lunedaFirst();
					break;
					case 'Kanedos':
						kanedosFirst();
					break;
					case 'Tyrianne':
						tyrianneFirst();
					break;
					case 'Kaprika':
						kaprikaFirst();
					break;
					case 'AliNada':
						aliNadaFirst();
					break;
				}
			}

			// Go to the planet without introduction
			else {
				if($(this).attr('first') == 'false') {
					var destination = $(this).attr('id');				
					switch(destination) {
						case 'Luneda':
							showContent('luneda.html #lunedaContent', 'scripts/luneda.js');
							break;
						case 'Kanedos':
							showContent('kanedos.html #kanedosContent', 'scripts/kanedos.js');
							break;
						case 'Tyrianne':
							showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
							break;
						case 'Kaprika':
							showContent('kaprika.html #kaprikaContent', 'scripts/kaprika.js');
							break;
						case 'AliNada':
							showContent('aliNada.html #aliNadaContent', 'scripts/aliNada.js');
							break;
					}
				};
			};
		};
	});

	function lunedaFirst() {
		changeLocation('#lunedaMap');
		quickMilo(text.lunedaIntro, 'speech/lunedaIntro.wav', '#lunedaMap', 28000);
		miloIntroduction(19500, 'luneda.html #lunedaContent', 'scripts/luneda.js');
	}
	function kanedosFirst() {
		startKanedos = true;
		changeLocation('#kanedosMap');
		miloResponse(text.kanedosIntro, 'speech/kanedosIntro.mp3', response.kanedosGood, response.kanedosBad, response.ignore);

		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				if(status >= 1) {
					quickMilo(text.kanedosThankGood, 'speech/kanedosThankGood.mp3', '#kanedosMap');
					miloIntroduction(3000, 'kanedos.html #kanedosContent', 'scripts/kanedos.js');
				}
				else {
					quickMilo(text.kanedosThankBad, 'speech/kanedosThankBad.mp3', '#kanedosMap');
					miloIntroduction(6500, 'kanedos.html #kanedosContent', 'scripts/kanedos.js');
				}								
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				if(status >= -5) {
					quickMilo(text.kanedosMiloGood, 'speech/kanedosMiloNeut.mp3', '#kanedosMap');
					miloIntroduction(11500, 'kanedos.html #kanedosContent', 'scripts/kanedos.js');
				}
				else if(status < -5) {
					quickMilo(text.kanedosMiloBad, 'speech/kanedosMiloBad.mp3', '#kanedosMap');
					miloIntroduction(11500, 'kanedos.html #kanedosContent', 'scripts/kanedos.js');
				}								
			}
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(go) {
				showContent('kanedos.html #kanedosContent', 'scripts/kanedos.js');
				ignore();								
			};
		});
	}
	function tyrianneFirst() {
		changeLocation('#tyrianneMap');
		$('#miloInteraction').show();
		$('#miloSays').writeText(text.tyrianneIntro);
		$('#skip').show();

		$('#skipButton').click(function() {
			showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
			ignore();
		});

		play('speech/tyrianneIntro.wav');
		var wait = setInterval(function() {
			if($('#miloSays').text() == text.tyrianneIntro) {
				clearInterval(wait);
				setTimeout(function() {
					$('#miloSays').text('');
					$('#miloResponse').show();
					$('#good').writeText(response.tyrianneGood);
					$('#bad').writeText(response.tyrianneBad);
					$('#neut').writeText(response.ignore);
				}, 3000);
			}
		}, 1);

		var tyrianneTimeline = 'tyrianneIntro';

		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				if(tyrianneTimeline == 'tyrianneIntro') {
					missVsOshu(text.tyrianneGoodMiss, 'speech/tyrianneGoodMiss.mp3', text.tyrianneGoodOshu, 'speech/tyrianneGoodOshu.mp3', '','','');
					$('#miloResponse').hide();
					miloIntroduction(25500, 'tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
					tyrianneTimeline = 'Would you like';
				}
				else {
					missVsOshu(text.tyrianneBadGoodMiss, 'speech/tyrianneBadGoodMiss.mp3', text.tyrianneBadGoodOshu, 'speech/tyrianneBadGoodOshu.mp3', '','','');
					miloIntroduction(10500, 'tyrianne.html #tyrianneContent', 'scripts/tyrianne.js')
				}								
			}
		});

		$('#good').unbind('click');
		$('#bad').click(function() {
			if(go) {
				if(tyrianneTimeline == 'tyrianneIntro') {
					miloResponse(text.tyrianneBad, 'speech/tyrianneBad.mp3', response.tyrianneGood, response.tyrianneBadNeut, response.ignore);
					tyrianneTimeline = 'I am, miss';
				}
				else {
					showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
					ignore();
					status = status + 1;
				}
			}
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(go) {
				if(tyrianneTimeline == 'tyrianneIntro') {
					showContent('tyrianne.html #tyrianneContent', 'scripts/tyrianne.js');
					ignore();
				}								
			};
		});
	}
	function kaprikaFirst() {
		changeLocation('#kaprikaMap');
		$('#skip').show();
		quickMilo(text.kaprikaIntro, 'speech/kaprikaIntro.wav', '#kaprikaMap');
		miloIntroduction(19000, 'kaprika.html #kaprikaContent', 'scripts/kaprika.js');
	}
	function aliNadaFirst() {
		changeLocation('#aliNadaMap');
		miloResponse(text.aliNadaIntro, 'speech/aliNadaIntro.mp3', response.aliNadaGoodOrBad, '', response.ignore);
		$('#bad').hide();
		var aliTimeline = 'aliIntro';

		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				if(aliTimeline == 'aliIntro') {
					if(status >= 0) {
						$('#bad').show();
						miloResponse(text.aliNadaGood, 'speech/aliNadaPos.wav', response.aliNadaGoodGood, response.aliNadaGoodBad, response.aliNadaGoodNeut);
						aliTimeline = 'so sorry';
					}
					else {
						quickMilo(text.aliNadaBad, 'speech/aliNadaNeg.mp3');
						miloIntroduction(5500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js');
						$('#bad').show();
					}
				}
				else if(aliTimeline == 'so sorry') {
					miloResponse(text.aliNadaGoodGood, 'speech/aliNadaGoodGood.mp3', response.aliNadaGoodGoodGood, response.aliNadaGoodGoodBad, response.aliNadaGoodGoodNeut);
					aliTimeline = 'who';
				}
				else if(aliTimeline == 'who') {
					quickMilo(text.aliNadaGoodGoodGood, 'speech/aliNadaGoodGoodGood.mp3');
					miloIntroduction(6500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js')
					ignore();
				}								
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				if(aliTimeline == 'so sorry') {
					missVsOshu(text.aliNadaGoodBadMiss, 'speech/aliNadaGoodBadMiss.mp3', text.aliNadaGoodBadOshu, 'speech/aliNadaGoodBadOshu.mp3', '','','');
					$('#miloResponse').hide();
					miloIntroduction(7500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js');
				}
				else if(aliTimeline == 'who') {
					quickMilo(text.aliNadaGoodGoodBad, 'speech/aliNadaGoodGoodBad.mp3');
					miloIntroduction(4500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js')
				}								
			}
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(go) {
				if(aliTimeline == 'aliIntro') {
					ignore();
					showContent('aliNada.html #aliNadaContent', 'scripts/aliNada.js');
				}
				else if(aliTimeline == 'so sorry') {
					quickMilo(text.aliNadaGoodNeut, 'speech/aliNadaGoodNeut.mp3');
					miloIntroduction(7500, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js');
				}
				else if(aliTimeline == 'who') {
					quickMilo(text.aliNadaGoodGoodNeut, 'speech/aliNadaGoodGoodNeut.mp3');
					miloIntroduction(3700, 'aliNada.html #aliNadaContent', 'scripts/aliNada.js');
				}								
			}
		});
	}

    // _________________________________________//
	//											//
	//											//
	//        MILO DISCOVERS YOUR SECRET        //
	//											//
	//__________________________________________//

	var startKanedos = false;

	$('#myShip').click(function() {
		Oshu.onBoard = true;

		// MILO discovers your secret
		if(startKanedos) {
			startKanedos = false;
			$('#skip').show();
			knowledge.mortality = true;
			$('#map').hide();
			$('#miloSays').text('');
			$('#miloInteraction').show();

			// milo respects you, good response
			if(status > 0) {
				quickMilo(text.realizationGood, 'speech/realizationGood.wav');
				var wait2 = setTimeout(function() {
					$('#miloInteraction').hide();
					$('#skip').hide();
					$('#map').show();
				}, 22500);
				// click the skip button
				$('#skip').unbind('click');
				$('#skipButton').unbind('click');
				$('#skipButton').click(function() {
					console.log(3);
					ignore('#map');
					clearTimeout(wait2);
				});
			}
			// milo is already angry with you, bad response
			else {
				quickMilo(text.realizationNeut, 'speech/realizationNeut.wav');
				var wait3 = setTimeout(function() {
					$('#miloInteraction').hide();
					$('#skip').hide();
					$('#map').show();
				}, 12500);
				// click the skip button
				$('#skip').unbind('click');
				$('#skipButton').unbind('click');
				$('#skipButton').click(function() {
					console.log(4);
					ignore('#map');
					clearTimeout(wait3);
				});
			};		
		}

		// Or you just go to the map
		else {
			$('.return').hide();
			$('.cityDetails').hide();
			$('.visitPlanet').hide();
			$('#map').show();
		};
	});

    // _________________________________________//
	//											//
	//											//
	//		FIFTY PERCENT -- THE NOVATACEA		//
	//											//
	//__________________________________________//

	var fiftyTimeline = 'novaIntro';

	function fifty() {
		$('#map').hide();
		missVsOshu(text.novaIntroMiss, 'speech/novaIntroMiss', text.novaIntroOshu, 'speech/novaIntroOshu.mp3', response.novaGood, response.novaBad, response.novaNeut)
		// What is it?

		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				if(fiftyTimeline == 'novaIntro') {
					miloResponse(text.novaGood, 'speech/novaGood.mp3', response.novaGoodGood, response.novaGoodBad, response.ignore);
					fiftyTimeline = 'What is it';
				}
				else if(fiftyTimeline == 'What is it') {
					missVsOshu(text.novaGoodGoodMiss, 'speech/novaGoodGoodMiss.mp3', text.novaGoodGoodOshu, 'speech/novaGoodGoodOshu.mp3', response.novaGoodGoodGood, response.novaGoodGoodBad, response.ignore);
					fiftyTimeline = 'A what? Let me see.';
				}
				else if(fiftyTimeline == 'I dont have time for this') {
					miloResponse(text.novaGood, 'speech/novaGood.mp3', response.novaGoodGood, response.novaGoodBad, response.ignore);
					fiftyTimeline = 'What is it';
				}
				else if(fiftyTimeline == 'Why would I care') {
					if(knowledge.mortality == true) {
						missVsOshu(text.novaBadGoodKnowsMiss, 'speech/novaBadGoodKnowsOshu.mp3', text.novaBadGoodKnowsMiss, 'novaBadGoodKnowsMiss.mp3', '', '', '')
						concludeInteraction(7000);
					}
					else {
						miloResponse(text.novaBadGood, 'speech/novaBadGood.mp3', '','','');
						concludeInteraction(7000);
					}
				}
				else if('A what? Let me see.') {
					$('#miloSays').writeText(text.novaGoodGoodGood); 
					play('speech/novaGoodGoodGood.mp3');
					concludeInteraction(7000)
				};				
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				if(fiftyTimeline == 'novaIntro') {
					miloResponse(text.novaBad, 'speech/novaBad.mp3', response.novaBadGood, response.novaBadBad, response.ignore);
					fiftyTimeline = 'Why would I care';
				}
				else if(fiftyTimeline == 'Why would I care') {
					miloResponse(text.novaBadBad, 'speech/novaBadBad.mp3', '','','');
					concludeInteraction(7000);	
				}
				else if(fiftyTimeline == 'What is it') {
					miloResponse(text.novaGoodBad, 'speech/novaGoodBad.mp3', '','','');
					concludeInteraction(7000);
				}
				else if(fiftyTimeline == 'A what? Let me see.') {
					miloResponse(text.novaGoodGoodBad, 'speech/novaGoodGoodBad.mp3', '','','');
					concludeInteraction(7000);
				}
				else if(fiftyTimeline == 'I dont have time for this') {
					miloResponse(text.novaNeutBad, 'speech/novaNeutBad.mp3', '','','');
					concludeInteraction(7000);
				}				
			}
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(go) {
				if(fiftyTimeline == 'novaIntro') {
					missVsOshu(text.novaNeutMiss, 'speech/novaNeutMiss.mp3', text.novaNeutOshu, 'speech/novaNeutOshu.mp3', response.novaNeutGood, response.novaNeutBad, response.ignore);
					fiftyTimeline = 'I dont have time for this';
				}
				else {
					concludeInteraction(7000);
				}				
			}
		});
	};

	// timedMilo(fifty, 30);

    // _________________________________________//
	//											//
	//											//
	//     SEVENTY-FIVE PERCENT - THE FAMILY    //
	//											//
	//__________________________________________//

	var familyTimeline = 'familyIntro';

	function endFamilyBad() {
		miloResponse(text.familyBad, 'speech/familyBad.mp3', '','','');
		concludeInteraction(7000);	
		$('#skip').show();
		$('#skipButton').click(function() {
			ignore('#map');
		});
	};

	function seventyFive() {
		$('#map').hide();
		missVsOshu(text.familyIntroMiss, 'speech/familyIntroMiss.mp3', text.familyIntroOshu, 'speech/familyIntroOshu.mp3', response.familyGood, response.familyBad, response.familyNeut);
		
		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				if(familyTimeline == 'familyIntro') {
					miloResponse(text.familyGood, 'speech/familyGood.mp3', response.familyGoodGood, response.familyGoodBad, response.familyGoodNeut);
					familyTimeline = 'Its a lot of ups and downs';
				}
				else if(familyTimeline == 'Its a lot of ups and downs') {
					miloResponse(text.familyGoodGood1, 'speech/familyGoodGood1.mp3', '','','');
					$('#miloResponse').hide();
					setTimeout(function() {
						$('#miloResponse').show();
						$('#miloSays').text('');
						miloResponse(text.familyGoodGood2, 'speech/familyGoodGood2.mp3', response.familyGoodGoodGood, response.familyGoodGoodBad, response.familyGoodGoodNeut);
					}, 1000);
					familyTimeline = 'Yes I always felt accepted';
				}
				else if(familyTimeline == 'Yes I always felt accepted') {
					familyTimeline = 'My brother';
					if(knowledge.brother == true) {
						miloResponse(text.familyGoodGoodGoodAli, 'speech/familyGoodGoodGoodAli.mp3', response.familyGoodGoodGoodGood, response.ignore, response.familyGoodGoodGoodNeut);
					}
					else {
						miloResponse(text.familyGoodGoodGoodNoAli, 'speech/familyGoodGoodGoodNoAli.mp3', response.familyGoodGoodGoodGood, response.ignore, response.familyGoodGoodGoodNeut);
					}
				}
				else if(familyTimeline == 'My brother') {
					miloResponse(text.familyGoodGoodGoodGood, 'speech/familyGoodGoodGoodGood.mp3', '','','');
					concludeInteraction(3000);
				}
				else if(familyTimeline == 'It gives meaning') {
					miloResponse('I see.', 'speech/familyneutGood.mp3', '','','');
					$('#miloResponse').hide();
					setTimeout(function() {
						$('#miloResponse').show();
						$('#miloSays').text('');
						miloResponse(text.familyGoodGood2, 'speech/familyGoodGood2.mp3', response.familyGoodGoodGood, response.familyGoodGoodBad, response.familyGoodGoodNeut);
					}, 1000);
					familyTimeline = 'Yes I always felt accepted';				
				}
				else if(familyTimeline == 'I do feel') {
					quickMilo(text.familyNeutNeutGood, 'speech/familyNeutNeutGood.mp3');
					concludeInteraction(2500);
				}				
			}
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				if(familyTimeline == 'I do feel') {
					quickMilo(text.familyNeutNeutBad, 'speech/familyNeutNeutBad.mp3');
					concludeInteraction(3500);
				}
				else {
					endFamilyBad();
				}				
			};
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(go) {
				if(familyTimeline == 'familyIntro') {
					familyTimeline = 'It gives meaning';
					if(knowledge.mortality == true) {
						miloResponse(text.familyNeutKnows, 'speech/familyNeutKnows.mp3', response.familyNeutGood, response.familyNeutBad, response.familyNeutNeut);
					}
					else {
						miloResponse(text.familyNeut, 'speech/familyNeut.mp3', response.familyNeutGood, response.familyNeutBad, response.familyNeutNeut);
					}
				}
				else if(familyTimeline == 'It gives meaning') {
					missVsOshu(text.familyNeutNeutMiss, 'speech/familyNeutNeutMiss.wav', text.familyNeutNeutOshu, 'speech/familyNeutNeutOshu.wav', response.familyNeutNeutGood, response.familyNeutNeutBad, response.ignore);
					familyTimeline = 'I do feel';
				}
				else if(familyTimeline == 'Its a lot of ups and downs') {
					quickMilo(text.familyGoodNeut, 'speech/familyGoodNeut.mp3');
					setTimeout(function() {
						$('#miloResponse').show();
						$('#miloSays').text('');
						miloResponse(text.familyGoodGood2, 'speech/familyGoodGood2.mp3', response.familyGoodGoodGood, response.familyGoodGoodBad, response.familyGoodGoodNeut);
					}, 4000);
					familyTimeline = 'Yes I always felt accepted';
				}
				else if(familyTimeline == 'Yes I always felt accepted') {
					quickMilo(text.familyGoodGoodNeut, 'speech/familyGoodGoodNeut.mp3');
					concludeInteraction(5500);
				}
				else {
					ignore('#map');
				}				
			};
		});
	};

	// timedMilo(seventyFive, 45);

	// _________________________________________//
	//											//
	//											//
	//    EIGHTY-FIVE PERCENT - THE GOODBYE 	//
	//											//
	//__________________________________________//

	var goodbyeTimeline = 'intro';


	function eightyfive() {
		$('#map').hide();
		if(knowledge.mortality) {
			if(knowledge.committed) {
				skipToMap();	
				missVsOshu(text.reminderMiss, 'speech/reminderMiss.mp3', text.reminderOshu, 'speech/reminderOshu.mp3', '','','');
				$('#miloResponse').hide();
				concludeInteraction(15500);
			}
			else {
				if(status > -10) {
					goodbyeTimeline = 'goodIntro';
					missVsOshu(text.happyIntroMiss, 'speech/happyIntroMiss.mp3', text.happyIntroOshu, 'speech/happyIntroOshu.mp3', '','','');
					$('#good').writeText(response.happyGood);
					$('#bad').writeText(response.happyBad);
					if(knowledge.commitConversation) {
						$('#neut').writeText(response.happyNeutConversed);
					}
					else {
						$('#neut').writeText(response.happyNeutNoConversed);
					}
				}	
				else {
					goodbyeTimeline = 'badIntro';
					missVsOshu(text.angryIntroMiss, 'speech/angryMiss.mp3', text.angryIntroOshu, 'speech/angryOshu.mp3', '','','');
					$('#miloResponse').hide();
					var wait = setInterval(function() {
						if($('#miloSays').text() == text.angryIntroOshu) {
							clearInterval(wait);
							setTimeout(function() {
								$('#miloSays').text('');
								$('#miloResponse').show();
								$('#good').writeText(response.angryGood);
								$('#bad').writeText(response.angryBad);
								$('#neut').writeText(response.ignore);
							}, 3000);
						}
						else if($('#miloSays').text() == text.angryIntroMiss) {
							clearInterval(wait);
							setTimeout(function() {
								$('#miloSays').text('');
								$('#miloResponse').show();
								$('#good').writeText(response.angryGood);
								$('#bad').writeText(response.angryBad);
								$('#neut').writeText(response.ignore);
							}, 3000);
						}
					}, 1);
				}
			}
		}

		$('#good').unbind('click');
		$('#good').click(function() {
			if(go) {
				if(goodbyeTimeline == 'badIntro') {
					quickMilo(text.angryGood, 'speech/angryGood.mp3');
					concludeInteraction(8500);
					$('#skip').show();
					$('#skipButton').click(function() {
						ignore('#map');
					});
				}
				else if(goodbyeTimeline == 'goodIntro') {
					missVsOshu(text.happyGoodMiss, 'speech/happyGoodMiss.mp3', text.happyGoodOshu, 'speech/happyGoodOshu.mp3', response.happyGoodGood, response.happyGoodBad, response.ignore);
					goodbyeTimeline = 'lets do it';
				}
				else if(goodbyeTimeline == 'lets do it') {
					knowledge.committed = true;
					quickMilo(text.happyGoodGood, 'speech/happyGoodGood.mp3');
					concludeInteraction(6500);
					$('#skip').show();
					$('#skipButton').click(function() {
						ignore('#map');
					});
				};				
			};
		});

		$('#bad').unbind('click');
		$('#bad').click(function() {
			if(go) {
				if(goodbyeTimeline == 'badIntro') {
					quickMilo(text.angryBad, 'speech/angryBad.wav');
					concludeInteraction(4000);
				}
				else if(goodbyeTimeline == 'goodIntro') {
					audio.pause();
					$('#miloSays').writeText(text.happyBad);
					concludeInteraction(2000);
					$('#skip').show();
					$('#skipButton').click(function() {
						ignore('#map');
					});
				}
				else if(goodbyeTimeline == 'lets do it') {
					quickMilo(text.happyGoodBad, 'speech/happyGoodBad.mp3');
					concludeInteraction(9000);
					skipToMap();
				}				
			};
		});

		$('#neut').unbind('click');
		$('#neut').click(function() {
			if(goodbyeTimeline == 'goodIntro') {
				if(go) {
					if(knowledge.commitConversation) {
						quickMilo(text.happyNeutConversed, 'speech/happyNeutConversed.mp3');
						concludeInteraction(6200);
					}
					else {
						quickMilo(text.happyNeutNoConversed, 'speech/happyNeutNotConversed.mp3');
						concludeInteraction(12500);
					}					
				};
			};
		});
	};

	// timedMilo(eightyfive, 59);


});