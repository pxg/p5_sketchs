var unit = 100;

function setup() {
    w = unit * 10;
    h = unit * 6;
    createCanvas(w, h);
}

function draw() {
    background('black');
    noFill();
    stroke(255);
    //point(width * 0.5, height * 0.5);
    //point(width * 0.5, height * 0.25);

    y = height - unit;
    for(row=1; row<=6; row++){
        x = 0;
        for(col=1; col<=10; col++){
            rect(x, y, unit, unit);
            x += unit;
        }
        y -= unit
    }
}