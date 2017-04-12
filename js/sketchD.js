/**
 * Created by angelo on 07/12/16.
 */
var sketch = function (p) {
    var gray = 0;

    p.setup = function () {
        p.createCanvas(600, 40);
    };

    p.draw = function () {
        p.background(gray);
        p.rect(p.width/2, p.height/2, 200, 200);
    };

    p.mousePressed = function () {
        gray = (gray + 16) % 256;
    };
};

new p5(sketch, "first");




var sketch2 = function (p) {
    var gray = 200;

    p.setup = function () {
        p.createCanvas(100, 100);
    };

    p.draw = function () {
        p.background(gray);
        p.rect(p.width/2, p.height/2, 100, 100);
    };

    p.mousePressed = function () {
        gray = (gray + 16) % 256;
    };
};

new p5(sketch2, "second");

sketch2.ellipse(10,10,10,10);