let unit = 100;
let timer = 0;

function setup() {
    w = unit * 10;
    h = unit * 6;
    createCanvas(w, h);
    background('black');
}

function draw() {
    noFill();
    stroke(255);
    if (frameCount % 60 == 0) {
        timer++;
        if (timer == 61){
            timer = 0;
            background('black');
        }
        draw_block(timer);
    }
}


function draw_block(number) {
    if (number < 1) {
        return
    }
    number -= 1;

    // Calculate the row
    y = height - unit - (int(number / 10) * unit);
    // Calculate the column
    x = (number % 10) * unit;
    rect(x, y, unit, unit);
}