var globals = {
	bitlength: 10,
	populationSize: 10,
	solutions: []
}

function setup() {
	createCanvas(1640, 880);
	// var genBtn = new Button({
 //    	x: 280,
 //    	y: 120,
 //    	width: 300,
 //    	height: 30,
 //    	label: 'generate random population',
 //    	color: color(255, 200, 50),
 //    	onClick: function() {
 //        	generateRandomSolutions();
 //        	// ellipse(mouseX, mouseY, 80, 80);
 //    	}
 //    });
 //    genBtn.draw();
}


function draw() {
  // if (mouseIsPressed) {
  // 	generateRandomSolutions();
  // } else {
  // 	fill(255);
  // }
  // ellipse(mouseX, mouseY, 80, 80)
  genesis();
}

function genesis() {
	var genBtn = new Button({
    	x: 280,
    	y: 120,
    	width: 300,
    	height: 30,
    	label: 'generate random population',
    	color: color(255, 200, 50),
    	onClick: function() {
        	println('d');
        	//generateRandomSolutions();
        	//ellipse(mouseX, mouseY, 80, 80);
    	}
    });
    genBtn.draw();
}


function generateRandomSolutions() {
	// generate p different solutions
	for (var i=0; i<globals.populationSize; i++) {
		globals.solutions[i] = '';
		for (var j=0; j<globals.bitlength; j++) {
			var randomBit = Math.round(Math.random());
			globals.solutions[i] += randomBit;
		}
		console.log(globals.solutions[i]);
	}
	// return solutions;
}