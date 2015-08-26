var Oshu = {
	onBoard: true,
	remainingLife: 3600,
	coins: 50,
	crystals: 0,
	milo: 0,
	items: {
		ganifruit: 0,
		electange: 0,
		sunstone: 0,
		electroSuit: false, 
		clothes: true
	},

	// description: {
	// 	electroSuit: "It looks like a diver's suit. The ElectroSuit is extremely heavy and gives off a faint buzz. Made to handle the electricity in the Lunedian Seas.",
	// 	electange: "One of the famous electric fruits of Luneda, this brightly colored fruit is blue with yellow spots.",
	// 	ganifruit: "A soft, purple fruit from Luneda. This fruit is not considered an electric fruit. Instead, it is famous for its sweet taste and use in gourmet delicacies.",
	// 	sunstone: "The sunstone is small and orange, and gives off a calming warmth."
	// },
	
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

	completed: {
		Luneda: false,
		Kanedos: false,
		Kaprika: false,
		Tyrianne: false,
		AliNada: false
	}
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