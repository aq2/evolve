var globals = {
	bitlength: 10,
	populationSize: 10,
	creatures: [],
	initialGreenChance: 0.2,
	parent1: -1,
	parent2: -1,
	locus: -1,
	firstRun: true
};

function setup() {
	// defineColours();
	var rhino = color(60, 70, 80);
	var celery = color(200, 200, 80);
	var black = color(0);
	var white = color(255);
    rectMode(CORNER);
	createCanvas(1400, 880);
	noStroke();
	fill(rhino);
	rect(0,0, width, height);
	// defineButtons();
	rectMode(CORNER);
	// population.highlighted = true;
	population.draw();
	populate();
	ellipse(20,20,10,03);
	rectMode(CORNER);

	mouseClicked = function() {
    	// globals.generatePopulationBtn.handleMouseClick();
    	// globals.tourneyBtn.handleMouseClick();
    	// globals.getItOnBtn.handleMouseClick();
    	// globals.generateLocusBtn.handleMouseClick();
    	// globals.crossoverBtn.handleMouseClick();
	};
}

function draw() {
	if (globals.tourneySlider) {
		var val = globals.tourneySlider.value();
		rectMode(CORNER);		
		fill(60, 70, 180);
		rect(460, 35, 20, 20);
		fill(0);
		text(val, 520, 45);		
	}

	// draw rectangle around pop
	// stroke(6);
	// fill(0,0,0,0);
	// rect(0, 0, 340, 450);
	// noStroke();
}


function tournament() {
	rectMode(CORNER);
	// fill(0);
	// textSize(26);
	// text('Population', 80, 25);
	fill(255);
	textSize(26);
	text('Tournament', 520, 18);
	textSize(16);
	globals.tourneyBtn.draw();
	rectMode(CORNER);

	text('size', 430, 45);
	globals.tourneySlider = createSlider(2, 9, 3);
	globals.tourneySlider.style('width', '80px');
	globals.tourneySlider.position(420, 50);
}

function fightItOut3() {
	// clear battleground
	rectMode(CORNER);
	fill(200, 130, 40);
	rect(370, 80, 600, 370);
	var offset = 300;

	for (var p=0; p<2; p++) {
		var contestants = [];
		for (var i=0; i<globals.tourneySlider.value(); i++) {
			// randomly select t creatures - without replacement
			var randy = round(Math.random() * (globals.populationSize-1));
			contestants.push(randy);
		}
		fill(255);
		text('tournament ' + (p+1), 450+p*offset, 95);
		bestFitness = -1;
		bestCreature = -1;
		for (var j=0; j<contestants.length; j++) {
			var creatureNumber = contestants[j];
			fill(0);			
			var creature = globals.creatures[creatureNumber];
			creature.draw(380+p*offset, 125+(j*32));
			var fitness = creature.getFitness();
			text('f('+creatureNumber+') '+fitness, 620+p*offset, 125 + j*32);

			if (fitness > bestFitness) {
				bestJ = j;
				bestCreature = creatureNumber;
				bestFitness = fitness;
			}
		}
		// highlight winner
		winnerY = 110+(bestJ*32);  // position of highlight box
		fill(200,200,200,100);
		rectMode(CORNER);
		rect(365+p*offset, winnerY, 290, 30);
		if (p === 0) {
			globals.parent1 = bestCreature;
		}  else {
			globals.parent2 = bestCreature;
		}
	}
		fill(200);
		text('winners are ' + globals.parent1 + ' and ' + globals.parent2, 660, 125 + (j*34));
		parents();
}

function parents() {
	fill(0);
	textSize(26);
	text('Parents', 1080, 18);
	// textSize(16);
	globals.getItOnBtn.draw();
}

function getParents() {
	fill(0);
	text(globals.parent1, 1030, 100+(0*34));
	var creature = globals.creatures[globals.parent1];
	creature.draw(1060, 100+(0*34));
	fill(0);
	text(globals.parent2, 1030, 100+(1*34));
	var creature = globals.creatures[globals.parent2];
	creature.draw(1060, 100+(1*34));
	globals.generateLocusBtn.draw();		
}

function generateLocus() {
	rectMode(CORNER);
	fill(130,140,150);
	rect(1030, 230, 300, 800);
	globals.randomLocus = round(Math.random() * (globals.populationSize-2) + 1);
	fill(0);
	text('random locus ' + globals.randomLocus, 1110, 240);
	console.log(globals.randomLocus);
	var creature = globals.creatures[globals.parent1];
	creature.draw(1060, 265+(0*34), 0, globals.randomLocus);
	creature.draw(1080+globals.randomLocus, 265+(0*34), globals.randomLocus, globals.bitlength);
	var creature2 = globals.creatures[globals.parent2];
	creature2.draw(1060, 265+(1*34), 0, globals.randomLocus);
	creature2.draw(1080+globals.randomLocus, 265+(1*34), globals.randomLocus, globals.bitlength);
	globals.crossoverBtn.draw();
}

function crossover() {}