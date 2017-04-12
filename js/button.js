var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 80;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color = config.color || color(207, 85, 85);
    // this.color = config.color || celery;
    this.onClick = config.onClick || function() {};
};

//draw the button
Button.prototype.draw = function() {
    if (this.isMouseInside() && mouseIsPressed) {
        // fill(255, 255, 255);
        fill(255);
    } else {
       fill(this.color); 
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 5);
    // fill(0, 0, 0);
    fill(0);
    textSize(19);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
    rectMode(CORNER);

};

//check if mouse cursor is inside the button
Button.prototype.isMouseInside = function() {
    return mouseX > this.x-this.width/2 &&
           mouseX < (this.x + this.width/2) &&
           mouseY > this.y - this.height/2 &&
           mouseY < (this.y + this.height/2);
};

//handle mouse clicks for the button
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

function defineButtons() {
    // define buttons used in simulation

    // globals.generatePopulationBtn = new Button({
    //     x: 165,
    //     y: 55,
    //     width: 300,
    //     height: 40,
    //     label: 'generate random population',
    //     // color: celery,
    //     onClick: function() {
    //         generateRandomCreatures();
    //         displayPopulation();
    //         tournament();
    //     }    
    // });

    // globals.tourneyBtn = new Button({
    //     x: 560,
    //     y: 55,
    //     width: 120,
    //     height: 40,
    //     label: 'fight it out',
    //     color: color(200, 200, 80),
    //     onClick: function() {
    //         fightItOut();
    //         // displayPopulation();
    //     }    
    // });

    globals.getItOnBtn = new Button({
        x: 1180,
        y: 55,
        width: 290,
        height: 40,
        label: 'select tournament winners',
        color: color(200, 200, 80),
        onClick: function() {
            getParents();
            // displayPopulation();
        }    
    });

    globals.generateLocusBtn = new Button({
        x: 1180,
        y: 200,
        width: 290,
        height: 40,
        label: 'generate random locus',
        color: color(200, 200, 80),
        onClick: function() {
            generateLocus();
            // displayPopulation();
        }    
    });

    globals.crossoverBtn = new Button({
        x: 1180,
        y: 360,
        width: 290,
        height: 40,
        label: 'do crossover',
        color: color(200, 200, 80),
        onClick: function() {
            crossover();
            // displayPopulation();
        }    
    });

    globals.tourneySlider;

}