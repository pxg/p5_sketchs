var unit = 100;

function setup() {
    w = 1000;
    h = 400;
    createCanvas(w, h);
}

function draw() {
    background('black');
    noFill();
    stroke(255);
    //point(width * 0.5, height * 0.5);
    //point(width * 0.5, height * 0.25);

    x = 0
    for(n=1; n<=10; n++){
        rect(x, height - unit, unit, unit);
        x += unit;
    }
}