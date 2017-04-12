// var tournament = new Section({
// 		x: 350,
// 		y: 0,
//     	highlighted: true,
//     	title: 'Tournament',
// 		width: 800,
//     	height: 450,
//     	buttonX: this.x + 200,
//     	buttonY: this.y + 30
// });


function tourney() {
    var x = 350;
    var y = 0;
    globals.tourneySlider = createSlider(2, 9, 3);
    globals.tourneySlider.style('width', '100px');
    globals.tourneySlider.position(x + 40, y + 45);
    tourneyBtn2 = createButton('Fight it oot');
    tourneyBtn2.position(x + 200, y + 30);
    tourneyBtn2.mouseClicked(fightItOut);
     var tournament = new Section({
        x: 350,
        y: 0,
        highlighted: true,
        title: 'Tournament',
        width: 800,
        height: 450,
        buttonX: this.x + 200,
        buttonY: this.y + 30
    });
     // tournament.highlighted = true;
     tournament.draw();
}


function fightItOut() {
    // clear battleground
    rectMode(CORNER);
    // fill(200, 130, 40);
    // rect(370, 80, 600, 370);
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








