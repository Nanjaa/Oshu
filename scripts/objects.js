var Oshu = {
	onBoard: true,
	remainingLife: 3600,
	coins: 50000,
	currentLocation: '#lunedaMap',
	itemFirst: {
		ganifruit: true,
		electange: true,
		electroSuit: true,
		clothes: true,
		lunedaSnowglobe: true,
		lunedaBobblehead: true,
		lunedaPostcard: true
	},
	
	items: {
		ganifruit: 1,
		electange: 0,
		brokenRobot: false,
		fixedRobot: false,
		password: false,
		electroSuit: false, 
		clothes: false,
		lunedaSnowglobe: false,
		lunedaBobblehead: false,
		lunedaPostcard: false,
		jewelry: false,
		libraryPass: false, 
		weatherSpecimen: false,
		weatherComplete: false,
		kanedosNecklace: false,
		kanedomeTicket: false,
		libraryBobblehead: false,
		bookmark: false,
		book: false,
		tyrianneBracelet: false,
		emptyBottle: false,
		fullBottle: false,
		sunstone: false,
		shrunkenHead: false,
		sleepPotion: false
	},

	description: {
		coins: "Criticized for its generic name, Coins are the galaxy-wide currency",
		electroSuit: "It looks like a diver's suit. The ElectroSuit is extremely heavy and gives off a faint buzz",
		electange: "One of the famous electric fruits of Luneda, this brightly colored fruit is blue with yellow spots",
		ganifruitEat: "You take a bite from the soft, purple fruit. It's got a bittersweet taste",
		brokenRobot: "A small, handheld robot with a few wires hanging out",
		fixedRobot: "The small robot hums with life",
		clothes: "The dress is a deep emerald color, with lots of intricate embroidery",
		lunedaSnowglobe: "The snowglobe has a bikini girl standing on the beach",
		lunedaBobblehead: "A cute bobblehead version of a storm chaser with binoculars",
		lunedaPostcard: "A simple postcard with a map of the capitol of Luneda",
		libraryPass: "A small, laminated card that grants access to the Intergalactic Library",
		weatherSpecimen: "A vial of rain water that needs to be delivered to AliNada",
		kanedosNecklace: "A silver necklace with bright red stones along the length of the chain",
		kanedomeTicket: "A ticket stub allowing access to a fight at the Kanedome",
		libraryBobblehead: "A bobblehead of a girl reading atop a pile of books",
		bookmark: "A bookmark covered with pictures of the library",
		book: "A copy of 'Moonbank Tide', signed by Hugo Riven himself!",
		tyrianneBracelet: "A beautiful beaded bracelet with tons of colors",
		emptyBottle: "A small bottle, just big enough to house a fairy",
		fullBottle: "A fairy is trapped inside the bottle. She gives off a soft light",
		sunstone: "The sunstone is small and orange, and gives off a calming warmth",
		shrunkenHead: "A tiny version of a head, with hair and everything",
		sleepPotion: "A small vial with bright pink fluid",
	},
	
	quests: [
		['Luneda',
			['Swim the electric seas of Luneda',
			'See the electric storms of Luneda',
			'Taste the electric fruit of Luneda']
		],
		['Kanedos', [
			'See a fight at the Kanedome',
			'Take a Kanedos martial arts class',
			'Visit the Crater Valley on Kanedos']
		],
		['Tyrianne', [
			"Visit the galaxy's largest library on Tyrianne",
			'Buy a sunstone from Tyrianne',
			'See the alien philosophers of Tyrianne']
		],
		['Kaprika', [
			'Find a fairy on Kaprika',
			'Sleep in the life pools of Kaprika',
			'Climb the tallest tree in Kaprika']
		],
		['AliNada', [
			"Visit brother's grave on AliNada"]
		],
	],

	questSpeech: {
		luneda1: "We always went to the beach as a family. I remember sitting in the sand and watching my brother and his children play in the waves. I didn't particularly care for the water itself, but I always loved the atmosphere of the ocean. I loved its vastness and its mystery. Naturally, spending all this time at the beach made me wish to go to the most intriguing of seas in our galaxy, the Perendi Sea, otherwise known as the Electric Sea. I submerged myself in the waters, and heard the faint buzzing of the ocean all around me.",
		luneda3: "When I was still a young android, and had just been adopted by my family, I grew an andolin tree in the backyard. My mother didn't find out about it until it was a sapling. I remember the way she called my brother and I outside when she discovered there was a small tree in her yard. She wasn't angry, only surprised. When it fully grew, the fruit it bore was remarkable. Every summer, I would harvest the fruit and share it. It was something I always looked forward to. I grew a couple other fruit trees, but I will never forget my andolin.",
		luneda2: "Storms have always fascinated me. I love how raw and powerful they are, and I find lightning beautiful. Luneda is a planet known galaxy-wide for its storms. No amount of research could've prepared me for this. The storm was so much more powerful than I could've ever imagined. The lightning was so constant that the air around me was still bright, despite the fact that it was late at night. Hours passed, and the storm chasers were ready to head home.",
		kanedos1: "When Andy went off to college, I went into a bit of a fighting television kick. I watched a lot of martial arts movies, and every Friday night, I'd tune into the Kanedome. I knew it was fake, but I enjoyed it anyway. I entered the Kanedome, and found myself in a crowd of people in full paint, sporting the colors of the warrior of their choice. The fights I saw that day were good, but the audience made the experience even better. I was shy for an hour or so, but after that, I let loose and joined them. I wish I had gotten over my pride and indulged in this guilty pleasure earlier. It was one of the most enjoyable nights of my life.",
		kanedos2: "When Andy went off to college and I had full days where I was alone in the house, I discovered a love for martial arts movies. I used to watch them a few times a week. All androids have some form of a self-defense program installed, but I wanted to formally learn a martial art, just like the movies. I wanted to walk inside a dojo, and I wanted the authentic experience. Most of the movies took place on Kanedos, so naturally I desired to learn there. Today, I finally completed that mission. The lesson was quite a bit harder than I was expecting, and I learned to move my body in ways that it had never moved before. I thanked everyone at the dojo, and went on my way.",
		kanedos3: "This particular item on my list all boiled down to pictures. I remember seeing pictures of the Crater Valley, and how transcendental it looked. It compelled me. I had to see it for myself! Renting a ship like I am now is expensive, though, so I never got to explore the rest of the galaxy until now. There were other places I'd seen in photographs that I wanted to visit, but given the amount of time and money I had, I chose Crater Valley. It was just like the photographs, too. There were so many more craters than I could've ever imagined, though. As the sun set, I rode the camel back to the main city.",
		tyrianne1: "I was always jealous of the human adolescents that had the opportunity to go to school. My model was specifically made without an extensive database to begin with and a high rate of learning. We really enjoy it, and it makes us seem more human to our users. Although it's possible for androids to go to school, education is very expensive, and my parents could only afford for their human son to go. So, I went to the library. And today, I got to go to the biggest one. Its enormity was something to behold in itself, but the sheer amount of books they had was breathtaking. I took hours to explore the entirety of it. It was incredible.",
		tyrianne2: "Sunstones are said to bring a happy life, but that's what I've been living for 80 years. Of course, as with everyone, I have had my bad days alongside the good. I've had such incredible opportunities, and each year is an adventure in itself. In honor of the happiness that has been given to me since the day I was first turned on, I wanted to buy a sunstone. I've already requested in my will that the sunstone be returned to my family after my death, as a token of our time together. Androids typically don't get tombstones or memorials, so I wanted to return something to them that would keep my memory alive.",
		tyrianne3: "I stepped into the room and saw the intricate wooden table, with its fantastical philosophers surrounding it. It wasn't for any particular reason that I wanted to see them. I've always loved ethics and philosophy, and when I learned of the philosophers on Tyrianne, I wanted to see them. I wanted to hear the words they had to say, and take something out of it that would expand my mind and give me even more closure in my life. Seeing them was so sacred and so beautiful that I wish not to talk about it. Any words I may say about them will only dwarf their beauty and wisdom. I will never be able to express my experience at the magnitude that it happened.",
		kaprika1: "When my brother was still in grade school, I went to pick him up as I always did. He ran up to me and told me about how they learned about the nearby planet Kaprika that day, and how the planet was home to a fairy-like creature. He told me they looked just like the stories, and the excitement buzzed in his eyes.  That day, we promised we'd see them together. Obviously, everything had not quite gone as planned. Seeing the fairy in front of me, though... It made me feel like Andy was still here.",
		kaprika2: "I remember when my father died. I remember saying goodbye to him in the hospital, and I remember watching the life drain from his eyes. During the days before his departure, I was researching ways to extend life. Articles pertaining to that subject consistently mentioned the Life Pools on Kaprika. Nobody ever fully understood them (Then again, how much of Kaprika can be explained by science?), but many swore by it. As I lay in the warm water, I closed my eyes and thought about my father, and how much I missed him. I fell asleep in the soothing pool, and didn't wake up until the next morning. I woke up a little nervous about how soon it was to my time.",
		kaprika3: "When Andy and I were young, we used to race each other to the tallest point on the tree. I would always win, but he it never stopped him. He was always so competetive, and so ready for competition that no matter the odds against him, he would fight. He would've made a great polititian if he had wanted to. I urged him a few times to consider it, but he always laughed and said he was too honest for the job. When he died, I decided I wanted to climb the highest tree in the solar system, just for him. As I looked over Kaprika, I felt proud. I knew Andy would've been too.",
		aliNada: "My brother had been my best friend throughout life. My parents had bought me specifically for the purpose of being his friend, as he was an only child. He got married, had children, and had a stable job, but we always lived close to each other. I got to watch him live his life as I lived mine. When they were yonger, I'd help take care of his children. They were so much like him, too. I said goodbye to them and the rest of my family already, except one. I knelt at my brother's grave, just as I had knelt in front of my parents' graves. I thanked him for all the happy memories, and told him how my life had turned out after he left. The sun set on AliNada before I left."
	},
};

var finished = 0;


var myLocation = {
	current: 1,
	Luneda: false,
	Kanedos: false,
	Tyrianne: false,
	Kaprika: false,
	AliNada: false
};

var sound = true;


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
	introGood: "Thank you, Oshu. I have prepared a map based on your coordinates. Where would you like to travel first?",
	introBad: "Well, I apologize for any unintentional rudeness I may have presented. If you do not wish to share your name, I will not press the matter. I have prepared a map based on your coordinates. Where would you like to travel first?",
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