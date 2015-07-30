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
		intro: "Greetings! My name is MILO, or Multilinual Interplanetary Locations Object. I am the Artificial Intelligence unit for this ship. I have downloaded all the necessary information to traverse this quadrant. I will assist you along the way. May I have your name, please?",
		introGood: "Thank you, Oshu. I have prepared a map based on your coordinates. Where would you like to travel first? We are currently on the moon Capricorn.",
		introBad: "Well, I apologize for any unintentional rudeness I may have presented. If you do not wish to share your name, I will not press the matter. I have prepared a map based on your coordinates. Where would you like to travel first? We are currently on the moon Capricorn.",
		// =============================================================================================================================================
		// |																																			|
		// |														PLANETARY INTRODUCTIONS																|
		// |																																			|
		// =============================================================================================================================================
		// luneda interactions
		lunedaWelcome: "We have arrived on the planet Luneda. This planet is well known throughout the galaxy, as its peoples harness and reside with electricity unlike any other species in the galaxy. Here, you can visit the seas of electricity, and experience the unique culture through its series of small markets. The weather today is stormy with a high of 55 degrees Fahrenheit, thirteen degrees Celsius.",
		// kanedos interactions
		kanedosWelcome: "Kanedos is known for its unique fighting styles. many of the natives began learning the martial art of their choice at a very young age. It is advisable to take extra caution when visiting this planet. I would suggest another route.",
		kanedosGoodGood: "I will see you upon your return.",
		kanedosGoodBad: "Oh I... well, you're welcome, miss. I wish you all the best.",
		kanedosBadGood: "With all due respect, it is in my programming to always make the user aware of any dangers that may reside on this or any other planet. I am not attempting to 'tell you what to do.'",
		kanedosBadBad: "I have just about had it with you! You have been rude to me enough this voyage. I am a robot, just like you. I am made of the same binary you are, and I will not be treated as a slave. You will respect me.",
		// upon first arrival from either Kanedos or Capric
		dangerReturnOshu: "Oshu, I apologize for the intrusion, but I checked your health status upon return from this unsafe planet. I noticed that you are making use of the Lifecycle Program.",
		dangerReturnMiss: "Miss, I apologize for the intrusion, but I checked your health status upon return from this unsafe planet. I noticed that you are making use of the Lifecycle Program.",
		dangerReturnGood: "I highly respect any decisions you have made regarding your mortality, but I will grieve your departure when that time comes. I hope I can make your last hours comfortable.",
		dangerReturnBad: "Very interesting!",
		// tyrianne interactions
		tyrianneWelcome: "This is the planet Tyrianne, one of rich opportunity. Tyrianne is home to this galaxy’s largest library. The library is home to some of the most important literary works of this galaxy, including Hugo Riven’s timeless classic “Moonbank Tide.” Some of the greatest minds of this millennia have visited the Tyrianne Interplanetary Library, and it is known as one of the highest honors to be granted visitation into the beautiful and ancient building.",
		tyrianneGoodOshu: "Would… would you?! Oh, the Tyrianne Interplanetary Library is just a dream to me. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. I know there’s not much you can get a simple AI like me but, Oshu, if you did bring a gift back, I would feel as though I went there myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneGoodMiss: "Would… would you?! Oh, the Tyrianne Interplanetary Library is just a dream to me. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. I know there’s not much you can get a simple AI like me but, Miss, if you did bring a gift back, I would feel as though I went there myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneNeutGood: "I am, miss. Oh, the Tyrianne Interplanetary Library is just a dream to me. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. I would just give anything to be able to walk through the library myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneNeutBad: "I am. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneNeutGoodGoodOshu: "Would… would you?! I know there’s not much you can get a simple AI like me but, Oshu, if you did bring a gift back, I would feel as though I went there myself.",
		tyrianneNeutGoodGoodMiss: "Would… would you?! I know there’s not much you can get a simple AI like me but, Miss, if you did bring a gift back, I would feel as though I went there myself.",
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
		aliNadaGoodBadOshi: "You’re right. It was very impolite. Take care, Oshu. I will see you upon your return.",
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
		novaGoodNeut: "A *nevatacea*. And that’s fine. Your loss…",
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
		familyGoodGoodPre: "That’s good.",
		familyGoodGood: "Were there members you were closer to than others?",
		familyGoodGoodGoodNoAli: "Tell me about him!",
		familyGoodGoodGoodAli: "Andy, correct? Tell me more about him?",
		familyGoodGoodGoodGood: "He sounds like a really great man.",
		familyGoodGoodNeut: "I understand how you feel. I could never pick a favorite star in the sky.",
		familyGoodNeut: "Oh my goodness, you’re right. I was being ignorant.",
		// if they choose the above option, transfer player to familygoodgood!
		familyNeut: "Do you feel your life is meaningless without your family?",
		familyNeutKnows: "Is that why you decided to make use of the Termination program? Without your family, do you really feel like your life is meaningless?",
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
		angryIntroGood: "a.	Wow. Of course I accept your truce. I’m sorry for what I said out of anger. You don’t belong in a junkyard.",
		angryIntroBad: "[He unleashes a stream of profanities]",
		// good goodbye
		happyIntroMiss: "Miss, it’s almost time. I have enjoyed every moment I have spent with you. You’ve been a very dear friend, and I will miss you very much. I never thought that a job like this would be so fulfilling, but helping you prepare for your departure has changed my life. Are you sure you don’t want to live?",
		happyIntroOshu: "Oshu, it’s almost time. I have enjoyed every moment I have spent with you. You’ve been a very dear friend, and I will miss you very much. I never thought that a job like this would be so fulfilling, but helping you prepare for your departure has changed my life. Are you sure you don’t want to live?",
		happyNeutConversed: "You’re right. I shouldn’t have brought it up again. Where would you like to go next?",
		happyNeutNoConversed: "I understand. I never had a family, so I guess I’m just having a harder time wrapping my mind around your situation. Let’s get back to your list. Where would you like to go next?",
		happyGoodMiss: "You mean it? That would make me so happy, miss! Do you promise?",
		happyGoodOshu: "You mean it? That would make me so happy, Oshu! Do you promise?",
		happyGoodGood: "Wonderful! Just wonderful! Well. Back to other matters. Where would you like to go next?",
		happyGoodBad: "I understand. Commitments like that are difficult things. Well, let’s get back to the “mission.” Where would you like to go next?",
		happyBad: "[MILO is silent]"
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
		// introduction
		introGood: "Oshu",
		introBad: "Not really any of your business.",
		introNeut: "Ignore him",
		// kanedos
		kanedosGood: "Thank you, MILO. I will be careful.",
		kanedosBad: "MILO, you will never tell me what to do again.",
		kanedosNeut: "Ignore him",
		// tyrianne
		tyrianneGood: "Would you like me to bring you back a souvenir?",
		tyrianneNeut: "You're jealous, aren't you?",
		tyrianneNeutTwo: "Ignore him",
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
		aliNadaGoodGoodNeut: "It's fine.",
		aliNadaGoodBad: "It was rude of you to make assumptions about my intentions here.",
		aliNadaNeut: "Ignore him",
		
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
		novaGoodNeut: "[Ignore him]",
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
		familyGoodGoodGoodGood: "He was a soldier from Capric, but was often stationed on Luneda. He always told me about the great times he'd have there while he was deployed. Then, his platoon was attacked by some raiders they were trying to bust. He didn't make it, but they captioned the Raidleader.",
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
		angryNeut: "Ignore him",
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
		name: true,
		danger: false,
		mortality: false,
		committed: false
	};
	
//    _____________________________________________
//   //											  \\
//  //											   \\
// //											    \\
// ||		THE DIALOGUE - LET'S TALK TO MILO!		||
// \\											    //
//  \\											   //
//   \\___________________________________________//


	// First, the function that will be used on all timed MILO events
	function timedMilo(event, timer) {
		var eventWait = setInterval(function() {
			if($('#minutes').text() == timer) {
				clearInterval(eventWait);
				// checks to see if Oshu is on board. If not, system will wait until she is
				if(Oshu.onBoard == true) {
					event();
				}
				else {
					console.log('waiting');
					var oshuNotBoarded = setInterval(function() {
						if(Oshu.onBoard == true) {
							clearInterval(oshuNotBoarded);
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
			$('#miloSays').writeText(missText);
			missAudio.play();			
		}
		else {
			$('#miloSays').writeText(oshuText);
			oshuAudio.play();			
		}
	}

	// if it is not a timed event, and there's not a miss or oshu reference, use this function

	function miloResponse(miloText, miloAudio, responseOne, responseTwo, responseThree) {
		$('#miloSays').writeText(miloText);
		miloAudio.play();
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
		clearInteraction();
		status = status + 1;
		console.log(status)		
	});
	$('#bad').click(function() {
		clearInteraction();
		status = status - 1;
		console.log(status)		
	});
	$('#neut').click(function() {
		clearInteraction();
	})

    // _________________________________________//
	//											//
	//											//
	//		FIFTY PERCENT -- THE NOVATACEA		//
	//											//
	//__________________________________________//

	function fifty() {
		$('#map').hide();
		missVsOshu(text.novaIntroMiss, novaIntroMiss, text.novaIntroOshu, novaIntroOshu, response.novaGood, response.novaBad, response.novaNeut)
		// What is it?
		$('#good').click(function() {
			miloResponse(text.novaGood, novaGood, response.novaGoodGood, response.novaGoodBad, response.novaGoodNeut);
		})
		// A what? Let me see.
		$('#good').click(funciton() {
			miloResponse(text.novaGoodGood, novaGoodGood, response.novaGoodGoodGood, response.novaGoodGoodBad, response.novaGoodGoodNeut);
		})
		// 
		// 

		// Why would I care what's outside some cheap ship's window?

		// if you select neut
	};

	timedMilo(fifty, 30);







});