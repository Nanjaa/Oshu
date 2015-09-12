var Oshu = {
	onBoard: true,
	remainingLife: 3600,
	coins: 50,
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
		ganifruit: 0,
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
		kanedosJewelry: false,
		kanedomeTicket: false,
		tyrianneJewelry: false,
		emptyBottle: false,
		sunstone: false,
		shrunkenHead: false,
		sleepPotion: false
	},

	description: {
		coins: "Criticized for its generic name, Coins are the galaxy-wide currency.",
		electroSuit: "It looks like a diver's suit. The ElectroSuit is extremely heavy and gives off a faint buzz.",
		electange: "One of the famous electric fruits of Luneda, this brightly colored fruit is blue with yellow spots.",
		ganifruitEat: "You take a bite from the soft, purple fruit. It's got a bittersweet taste.",
		brokenRobot: "A small, handheld robot with a few wires hanging out.",
		fixedRobot: "The small robot hums with life.",
		clothes: "The dress is a deep emerald color, with lots of intricate embroidery.",
		lunedaSnowglobe: "The snowglobe has a bikini girl standing on the beach.",
		lunedaBobblehead: "A cute bobblehead version of a storm chaser with binoculars.",
		lunedaPostcard: "A simple postcard with a map of the capitol of Luneda",
		libraryPass: "A small, laminated card that grants access to the Intergalactic Library",
		weatherSpecimen: "A vial of rain water that needs to be delivered to AliNada",
		kanedosJewelry: "A silver necklace with bright red stones along the length of the chain",
		kanedomeTicket: "A ticket stub allowing access to a fight at the Kanedome.",
		tyrianneJewelry: "A beautiful beaded bradelet with tons of colors",
		emptyBottle: "A small bottle, just big enough to house a fairy.",
		sunstone: "The sunstone is small and orange, and gives off a calming warmth.",
		shrunkenHead: "A tiny version of a head, with hair and everything.",
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
			'Climb the highest tree in Kaprika']
		],
		['AliNada', [
			"Visit brother's grave on AliNada"]
		],
	],

	questSpeech: {
		luneda1: "We always went to the beach as a family. I remember sitting in the sand and watching my brother and his children play in the waves. I didn't particularly care for the water itself, but I always loved the atmosphere of the ocean. I loved its vastness and its mystery. Naturally, spending all this time at the beach made me wish to go to the most intriguing of seas in our galaxy, the Perendi Sea, otherwise known as the Electric Sea. I submerged myself in the waters, and heard the faint buzzing of the ocean all around me.",
		luneda3: "When I was still a young android, and had just been adopted by my family, I grew an andolin tree in the backyard. My mother didn't find out about it until it was a sapling. I remember the way she called my brother and I outside when she discovered there was a small tree in her yard. She wasn't angry, only surprised. When it fully grew, the fruit it bore was remarkable. Every summer, I would harvest the fruit and share it. It was something I always looked forward to. I grew a couple other fruit trees, but I will never forget my andolin.",
		luneda2: "Storms have always fascinated me. I love how raw and powerful they are, and I find lightning beautiful. Luneda is a planet known galaxy-wide for its storms. I used to browse through hundreds of pictures people had taken on the planet. Nothing could've prepared me for this. The storm was so much more powerful than I could've ever imagined. The lightning was so constant that the air around me was still bright, despite the fact that it was late at night. Hours passed, and the storm chasers were ready to head home.",
		kanedos1: "When Andy went off to college, I went into a bit of a fighting television kick. I watched a lot of martial arts movies, and every Friday night, I'd tune into the Kanedome. I knew it was fake, but I enjoyed it anyway. I entered the Kanedome, and founc myself in a crowd of people in full paint, sporting the colors of the warrior of their choice. The fights I saw that day were good, but the audience made the experience even better. I was shy for an hour or so, but after that, I let loose and joined them. I wish I had gotten over my pride and indulged in this guilty pleasure earlier. It was one of the most enjoyable nights of my life.",
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


var myLocation = {
	current: 1,
	Luneda: false,
	Kanedos: false,
	Tyrianne: false,
	Kaprika: false,
	AliNada: false
};

var planets = {
	Luneda: {
		color: '#c1e3da',
		selected: false,
		distance: 1,
		id: '#Luneda',
		name: 'Luneda'
	},
	Kanedos: {
		color: '#ff9a00',
		selected: false,
		distance: 3,
		id: '#Kanedos',
		name: 'Kanedos'
	},
	Tyrianne: {
		color: '#db1600',
		selected: false,
		distance: 7,
		id: '#Tyrianne',
		name: 'Tyrianne'
	},
	Kaprika: {
		color: '#1c9600',
		selected: false,
		distance: 5,
		id: '#Kaprika',
		name: 'Kaprika'
	},
	AliNada: {
		color: '#969696',
		selected: false,
		distance: 9,
		id: '#AliNada',
		name: 'AliNada'
	}
};

var sound = true;