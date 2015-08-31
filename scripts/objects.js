var Oshu = {
	onBoard: true,
	remainingLife: 3600,
	coins: 500,
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
		sunstone: 0,
		electroSuit: false, 
		clothes: true,
		lunedaSnowglobe: false,
		lunedaBobblehead: false,
		lunedaPostcard: false,
		ticket: false,
		jewelry: false,
		libraryPass: false, 
		weatherSpecimen: false
	},

	description: {
		coins: "Criticized for its generic name, Coins are the galaxy-wide currency.",
		electroSuit: "It looks like a diver's suit. The ElectroSuit is extremely heavy and gives off a faint buzz.",
		electange: "One of the famous electric fruits of Luneda, this brightly colored fruit is blue with yellow spots.",
		ganifruitEat: "You take a bite from the soft, purple fruit. It's got a bittersweet taste.",
		// ganifruit: "A soft, purple fruit, not considered electric. Known for its bittersweet taste.",
		clothes: "The dress is a deep emerald color, with lots of intricate embroidery.",
		lunedaSnowglobe: "The snowglobe has a bikini girl standing on the beach.",
		lunedaBobblehead: "A cute bobblehead version of a storm chaser with binoculars.",
		lunedaPostcard: "A simple postcard with a map of the capitol of Luneda",
		libraryPass: "A small, laminated card that grants access to the Intergalactic Library",
		weatherSpecimen: "A vial of rain water that needs to be delivered to AliNada",
		sunstone: "The sunstone is small and orange, and gives off a calming warmth."
	},
	
	quests: [
		['Luneda',
			['Swim the electric seas of Luneda',
			'See the electric storms of Luneda',
			'Taste the electric fruit of Luneda']
		],
		['Kanedos', [
			'See the Mercury Fighting Pits',
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
		luneda1: "We always went to the beach as a family. There was a particular beach on Capricorn, where we lived, that we frequented. I remember sitting in the sand and watching my brother and his children play in the waves. I didn't particularly care for the water itself, but I always loved the atmosphere of the ocean. I loved its vastness and its mystery. I loved every shell and grain of sand, and the occasional animal we'd see. I loved it so much. Naturally, spending all this time at the beach made me wish to go to the most intriguing of seas in our galaxy, the Perendi Sea, otherwise known as the Electric Sea. I submerged myself in the waters, and heard the faint buzzing of the ocean all around me. Although I couldn't feel the water due to the suit, my body felt as though I could light up. It was exciting! There was also something to be said about the risk of the sea. Knowing that the suit was the only thing keeping me from death was humbling.",
		luneda2: "When I was still a young android, and had just been adopted by my family, I grew an andolin tree in the backyard. My mother didn't find out about it until it was a sapling. I remember the way she called my brother and I outside when she discovered there was a small tree in her yard. She wasn't angry, only surprised. When it fully grew, the fruit it bore was remarkable. Every summer, I would harvest the fruit and share it. It was something I always looked forward to. I grew a couple other fruit trees, but I will never forget my andolin.",
		luneda3: "Storms have always fascinated me. I love how raw and powerful they are, and I thrive off the humbling experience of knowing just how out of your hands it is. Not only that, but I find lightning beautiful. Luneda is a planet known galaxy-wide for its storms. I used to browse through hundreds of pictures people had taken on the planet. I promised myself that I would take one of those pictures myself someday. Nothing could've prepared me for this. The storm was so much more powerful than I could've ever imagined. The lightning was so constant that the air around me was still bright, despite the fact that it was late at night. I felt tiny and insignificant as I watched. Hours passed, and the storm chasers were ready to head home. I activated the camera feature on my optical lens, and joined them.",
		kanedos1: "",
		kanedos2: "When Andy went off to college and I had full days where I was alone in the house, I discovered a hobby I never expected to enjoy so much. Every day, I watched a new martial arts movies. I loved goofy ones, I loved serious ones, I loved everything about martial arts movies. All androids have some form of a self-defense program installed, but I wanted to formally learn a martial art, just like the movies. I wanted to walk inside a dojo, and I wanted the authentic experience. Most of the movies took place on Kanedos, so naturally I desired to learn there. Today, I finally completed that mission. The lesson was quite a bit harder than I was expecting, and I learned to move my body in ways that it had never moved before. Although I didn't have the time to learn the art completely, this one class was enough to make me feel as though I could die happily. I thanked everyone at the dojo, and went on my way.",
		kanedos3: "",
		tyrianne1: "",
		tyrianne2: "Sunstones are said to bring a happy life, but that's what I've been living for 80 years. As with everyone, I have had my bad days alongside the good, but the people in my life have made it really something to behold. I've had such incredible opportunities, and each year is an adventure in itself. In honor of the happiness that has been given to me since the day I was first turned on, I wanted to buy a sunstone. I've already requested in my will that the sunstone be returned to my family after my death, as a token of our time together. Androids typically don't get the tombstones that living beings get, so I wanted to return something to them that would keep my memory alive.",
		tyrianne3: "",
		kaprika1: "When my brother Andrew was still in grade school, I went to pick him up as I always did. He got out of school, and ran up to me, more excited than he had been in a long time. He told me about how they learned about the nearby planet Kaprika that day, and how the planet was home to a fairy-like creature. He told me they looked just like the stories, and the excitement buzzed in his eyes.  Pulling out his science book, he showed me pictures of the strange and unusual beings, and I knew I had to see them for myself. That day, we promised we'd see them together, but obviously everything had not quite gone as planned. Seeing the fairy in front of me, though... It gave me fulfillment. I closed my eyes and imagined by brother at my side. Opening them again, I saw the fairies float around my head in delight.",
		kaprika2: "I remember when my father died. I remember saying goodbye to him in the hospital, and I remember watching the life drain from his eyes. During the days before his departure, I kept reading about ways to extend life. Every article pertaining to that subject consistently mentioned the Life Pools on Kaprika. I had heard of these pools, and the way that they unusually extended life. Nobody ever fully understood it (Then again, how much of Kaprika can be explained by science?), but many swore by it. It's never been proven whether or not the Pools actually work, but I'd like to think they do. As I lay in the warm water, I closed my eyes and thought about my father, and how much I missed him. I missed all my family members that had passed. I fell asleep in the soothing pool, and didn't wake up until the next morning. As I slept, I dreamt about my life, and all the people that had passed before me. I woke up a little nervous about how soon it was to my time.",
		kaprika3: "When Andy and I were young, we used to race each other to the tallest point on the tree. I would always win, but he it never stopped him. He was always so competetive, and so ready for competition that no matter the odds against him, he would fight. He would've made a great polititian if he had wanted to. I urged him a few times to consider it, but he always laughed and said he was too honest for the job. When he died, I decided I wanted to climb the highest tree in the solar system, just for him. As I looked over Kaprika, I felt proud. I knew Andy would've been too.",
		aliNada: ""
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