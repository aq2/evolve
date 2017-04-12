function Creature(chromosome) {
	this.chromosome = chromosome;  // eg '10011100'
}

Creature.prototype.getFitness = function() {
	// simple fitness function - a 1 allele increases fitness by 1
	fitness = 0;
	for (var i = 0; i < globals.bitlength; i++) {
		if (this.chromosome.charAt(i) === '1') {
			fitness++;
		}
	}
	return fitness;
}

// old.Creature.prototype.draw = function(x, y) {
// 	// draw creature as colured circles
// 	for (var i = 0; i < globals.bitlength; i++) {
// 		var allele = this.chromosome.charAt(i);
// 		// which colour?
// 		allele === '0' ? fill (15, 20, 80) : fill(80,120,10);		
// 		if (i < globals.bitlength-1) {
// 			ellipse(x+i*24, y, 25, 25);  		// body segment
// 		} else {
// 			arc(x+i*24, y, 25, 25, PI/4, 0);	// head + eye
// 			fill(125,0,0);
// 			ellipse(x+4+i*24, y-7, 5, 5);
// 		}
// 	}	
// }

Creature.prototype.draw = function(x, y, start=0, stop=globals.bitlength) {
	// draw creature as colured circles
	for (var i = start; i < stop; i++) {
		var allele = this.chromosome.charAt(i);
		// which colour?
		allele === '0' ? fill (15, 20, 80) : fill(80,120,10);		
		if (i < globals.bitlength-1) {
			ellipse(x+i*22, y, 23, 23);  		// body segment
		} else {
			arc(x+i*22, y, 23, 23, PI/4, 0);	// head + eye
			fill(125,0,0);
			ellipse(x+4+i*22, y-6, 5, 5);
		}
	}	
}

// function defineButtons() {
// 	// define buttons used in simulation

// 	globals.generatePopulationBtn = new Button({
//     	x: 165,
//     	y: 55,
//     	width: 300,
//     	height: 40,
//     	label: 'generate random population',
//     	color: color(200, 200, 80),
//     	onClick: function() {
//         	generateRandomCreatures();
//         	displayPopulation();
//         	tournament();
//     	}    
// 	});

// 	globals.tourneyBtn = new Button({
//     	x: 560,
//     	y: 55,
//     	width: 120,
//     	height: 40,
//     	label: 'fight it out',
//     	color: color(200, 200, 80),
//     	onClick: function() {
//         	fightItOut();
//         	// displayPopulation();
//     	}    
// 	});

// 	globals.getItOnBtn = new Button({
//     	x: 1180,
//     	y: 55,
//     	width: 290,
//     	height: 40,
//     	label: 'select tournament winners',
//     	color: color(200, 200, 80),
//     	onClick: function() {
//         	getParents();
//         	// displayPopulation();
//     	}    
// 	});

// 	globals.generateLocusBtn = new Button({
//     	x: 1180,
//     	y: 200,
//     	width: 290,
//     	height: 40,
//     	label: 'generate random locus',
//     	color: color(200, 200, 80),
//     	onClick: function() {
//         	generateLocus();
//         	// displayPopulation();
//     	}    
// 	});

// 	globals.crossoverBtn = new Button({
//     	x: 1180,
//     	y: 360,
//     	width: 290,
//     	height: 40,
//     	label: 'do crossover',
//     	color: color(200, 200, 80),
//     	onClick: function() {
//         	crossover();
//         	// displayPopulation();
//     	}    
// 	});

// 	globals.tourneySlider;

// }