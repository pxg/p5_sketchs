let unit = 100;
let timer = 0
let old_timer = 0

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

    if (frameCount % 60 == 0) {
        old_timer = timer;
        timer++;
        console.log(timer, old_timer);
    }
    //if(old_timer != timer)

    y = height - unit;
    for(row=1; row<=6; row++){
        x = 0;
        for(col=1; col<=10; col++){
            rect(x, y, unit, unit);
            x += unit;
        }
        y -= unit
    }
    //old_timer = timer
}