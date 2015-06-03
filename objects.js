var Oshu = {
	remainingLife: 3600,
	coins: 50,
	crystals: 0,
	milo: 0,
	items: {
		electricFruit: 0,
		sunstone: 0		
	},
	
	quests: {
		Luneda: {
			1: 'Swim the electric seas of Luneda',
			2: 'See the electric storms of Luneda',
			3: 'Taste the electric fruit of Luneda'
		},
		Kanedos: {
			1: 'See the Mercury Fighting Pits',
			2: 'Take a Kanedos style martial arts class',
			3: 'Visit the Crater Valley on Kanedos'
		},
		Tyrianne: {
			1: "Visit the galaxy's largest library on Tyrianne",
			2: 'Buy a sunstone from Tyrianne',
			3: 'See the alien philosophers of Tyrianne'
		},
		Kaprika: {
			1: 'Find a fairy on Kaprika',
			2: 'Sleep in the life pools of Kaprika',
			3: 'Climb the highest tree in Kaprika'
		},
		AliNada: {
			1: "Visit brother's grave on AliNada"
		},
		Capric: {
			1: 'Steal something in the Thieves District of Capric',
			2: 'Ride a Swampie on Capric',
			3: 'See the whirlwind storms of Capric'
		}
	},

	completed: {
		Luneda: false,
		Kanedos: false,
		Kaprika: false,
		Tyrianne: false,
		AliNada: false,
		Capric: false
	}
};


var myLocation = {
	current: 1,
	Luneda: false,
	Kanedos: false,
	Tyrianne: false,
	Kaprika: false,
	AliNada: false,
	Capric: false
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
	},
	Capric: {
		color: '#560ff',
		selected: false,
		distance: 11,
		id: '#Capric',
		name: 'Capric',
		first: true
	}
};