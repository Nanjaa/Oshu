var Oshu = {
	remainingLife: 3600,
	coins: 50,
	crystals: 0,


}
var quests = {
	Luneda: {
		1: 'Swim the electric seas of Luneda',
		2: 'See the electric storms of Luneda',
		3: 'Taste the electric fruit of Luneda'
	},
	Kanedos: {
		1: 'See the Mercury Fighting Pits'
	}
}


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
		distance: 5,
		id: '#Luneda',
		name: 'Luneda'
	},
	Kanedos: {
	}
}