$(document).ready(function() {

	// your status with MILO
	var status = 0;
	
	// all milo text 

	var text = {
		intro: "Greetings! My name is MILO, or Multilinual Interplanetary Locations Object. I am the Artificial Intelligence unit for this ship. I have downloaded all the necessary information to traverse this quadrant. I will assist you along the way. May I have your name, please?",
		introGood: "Thank you, Oshu. I have prepared a map based on your coordinates. Where would you like to travel first? We are currently on the moon Capricorn.",
		introBad: "Well, I apologize for any unintentional rudeness I may have presented. If you do not wish to share your name, I will not press the matter. I have prepared a map based on your coordinates. Where would you like to travel first? We are currently on the moon Capricorn.",
		lunedaWelcome: "i.	We have arrived on the planet Luneda. This planet is well known throughout the galaxy, as its peoples harness and reside with electricity unlike any other species in the galaxy. Here, you can visit the seas of electricity, and experience the unique culture through its series of small markets. The weather today is stormy with a high of 55 degrees Fahrenheit, thirteen degrees Celsius.",
		kanedosWelcome: "Kanedos is known for its unique fighting styles. many of the natives began learning the martial art of their choice at a very young age. It is advisable to take extra caution when visiting this planet. I would suggest another route.",
		kanedosGoodGood: "I will see you upon your return.",
		kanedosGoodBad: "Oh I... well, you're welcome, miss. I wish you all the best.",
		kanedosBadGood: "With all due respect, it is in my programming to always make the user aware of any dangers that may reside on this or any other planet. I am not attempting to 'tell you what to do.'",
		kanedosBadBad: "I have just about had it with you! You have been rude to me enough this voyage. I am a robot, just like you. I am made of the same binary you are, and I will not be treated as a slave. You will respect me.",
		dangerReturnOshu: "Oshu, I apologize for the intrusion, but I checked your health status upon return from this unsafe planet. I noticed that you are making use of the Lifecycle Program.",
		dangerReturnMiss: "Miss, I apologize for the intrusion, but I checked your health status upon return from this unsafe planet. I noticed that you are making use of the Lifecycle Program.",
		dangerReturnGood: "I highly respect any decisions you have made regarding your mortality, but I will grieve your departure when that time comes. I hope I can make your last hours comfortable.",
		dangerReturnBad: "Very interesting!",
		tyrianneWelcome: "i.	This is the planet Tyrianne, one of rich opportunity. Tyrianne is home to this galaxy’s largest library. The library is home to some of the most important literary works of this galaxy, including Hugo Riven’s timeless classic “Moonbank Tide.” Some of the greatest minds of this millennia have visited the Tyrianne Interplanetary Library, and it is known as one of the highest honors to be granted visitation into the beautiful and ancient building.",
		tyrianneGoodOshu: "a.	Would… would you?! Oh, the Tyrianne Interplanetary Library is just a dream to me. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. I know there’s not much you can get a simple AI like me but, Oshu, if you did bring a gift back, I would feel as though I went there myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneGoodMiss: "a.	Would… would you?! Oh, the Tyrianne Interplanetary Library is just a dream to me. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. I know there’s not much you can get a simple AI like me but, Miss, if you did bring a gift back, I would feel as though I went there myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneNeutGood: "I am, miss. Oh, the Tyrianne Interplanetary Library is just a dream to me. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. I would just give anything to be able to walk through the library myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneNeutBad: "I am. Since the moment I discovered the library, I’ve wanted nothing more than to see it for myself. Sometimes, miss, this ship feels like such a cage.",
		tyrianneNeutGoodGoodOshu: "Would… would you?! I know there’s not much you can get a simple AI like me but, Oshu, if you did bring a gift back, I would feel as though I went there myself.",
		tyrianneNeutGoodGoodMiss: "Would… would you?! I know there’s not much you can get a simple AI like me but, Miss, if you did bring a gift back, I would feel as though I went there myself.",
		bookmarkOshu: "Oh, Oshu! You really did it! You really brought me a gift! And what is it? A bookmark!",
		bookmarkMiss: "Oh, miss! You really did it! You really brought me a gift! And what is it? A bookmark!",
		bobbleheadOshu: "Oh, Oshu! You really did it! You really brought me a gift! And what is it? A bobblehead!"
		bobbleheadMiss: "Oh, miss! You really did it! You really brought me a gift! And what is it? A bobblehead!"
		moonbankOshu: "Oh, Oshu! You really did it! You really brought me a gift! And what is it? A SIGNED COPY OF “MOONBANK TIDE?!” This must have cost a fortune! Oh, I am the happiest robot in all the galaxy! I couldn’t be more ecstatic! Oshu, I wish I could embrace you. If I were human, I would probably even cry. Oh, I couldn’t ask for a more wonderful companion. Is that alright? To call you a companion? You feel more than just a captain.",
		moonbankMiss: "Oh, miss! You really did it! You really brought me a gift! And what is it? A SIGNED COPY OF “MOONBANK TIDE?!” This must have cost a fortune! Oh, I am the happiest robot in all the galaxy! I couldn’t be more ecstatic! Miss, I wish I could embrace you. If I were human, I would probably even cry. Oh, I couldn’t ask for a more wonderful companion. Is that alright? To call you a companion? You feel more than just a captain.",
		moonbankConfrontationOshu: "It just… It hurts to know what will happen all too soon. Please, Oshu. Reconsider your mortality. I would do anything to keep you as my friend for even a day longer than your scheduled shutdown. All I ask is that you consider the idea of continuing your travels with me, and any other friends and good company we encounter.",
		moonbankConfrontation: "It just… It hurts to know what will happen all too soon. Please, miss. Reconsider your mortality. I would do anything to keep you as my friend for even a day longer than your scheduled shutdown. All I ask is that you consider the idea of continuing your travels with me, and any other friends and good company we encounter.",
		confrontationGood: "1.	Thank the heavens. Since I don’t have mobility, could you find a safe place for the gift? I don’t want anyone to take it from me. I can’t stop them if they tried…",
		confrontationNeut: "1.	I understand. Losing such a dear friend is hard, and I’m sure I’m not making it any easier for you, either. Since I don’t have mobility, could you find a safe place for the gift? I don’t want anyone to take it from me. I can’t stop them if they tried…",
		confrontationBad: "1.	I know, (Oshu/Miss). I am sorry, I shouldn’t have said anything. Since I don’t have mobility, could you find a safe place for the gift? I don’t want anyone to take it from me. I can’t stop them if they tried…",
		defaultGiftEnd: "b.	Since I don’t have mobility, could you find a safe place for the gift? I don’t want anyone to take it from me. I can’t stop them if they tried…"
	}
	
	// milo introduces himself








});