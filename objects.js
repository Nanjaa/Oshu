var Oshu = {
	remainingLife: 3600,
	coins: 50,
	crystals: 0,
	milo: 0,
	items: {
		ganifruit: 0,
		electange: 0,
		sunstone: 0,
		electroSuit: false
	},
	
	quests: [
		['Luneda',
			['Swim the electric seas of Luneda',
			'See the electric storms of Luneda',
			'Taste the electric fruit of Luneda']
		],
		['Kanedos', [
			'See the Mercury Fighting Pits',
			'Take a Kanedos style martial arts class',
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
		name: 'Luneda',
		first: true
	},
	Kanedos: {
		color: '#ff9a00',
		selected: false,
		distance: 3,
		id: '#Kanedos',
		name: 'Kanedos',
		first: true
	},
	Tyrianne: {
		color: '#db1600',
		selected: false,
		distance: 7,
		id: '#Tyrianne',
		name: 'Tyrianne',
		first: true
	},
	Kaprika: {
		color: '#1c9600',
		selected: false,
		distance: 5,
		id: '#Kaprika',
		name: 'Kaprika',
		first: true
	},
	AliNada: {
		color: '#969696',
		selected: false,
		distance: 9,
		id: '#AliNada',
		name: 'AliNada',
		first: true
	}
};